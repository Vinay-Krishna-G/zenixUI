import "ignore-styles";

import { assembleProject } from "../apps/website/src/lib/export/assembler";
import { aurora } from "../apps/website/src/experiences/aurora";
import { hanami } from "../apps/website/src/experiences/hanami";
import { chromium } from "playwright";
import * as fs from "fs";
import * as path from "path";
import { execSync, spawn } from "child_process";

const WORLDS = {
  aurora: aurora,
  hanami: hanami,
};

const EXPORT_DIR = path.join(process.cwd(), "test_exports");

async function testExport(name: string, experience: any) {
  console.log(`\n--- [Export Acceptance Test] ${name} ---`);
  const config = {
    theme: { ...experience.theme },
    content: JSON.parse(JSON.stringify(experience.content)),
  };

  const projectPath = path.join(EXPORT_DIR, name);
  if (fs.existsSync(projectPath)) {
    fs.rmSync(projectPath, { recursive: true, force: true });
  }
  fs.mkdirSync(projectPath, { recursive: true });

  console.log(`[1/5] Assembling Project...`);
  const files = assembleProject(experience, config);
  for (const [filePath, content] of Object.entries(files)) {
    const fullPath = path.join(projectPath, filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, "utf-8");
  }

  // Force Node dependencies resolution since it's locally generated Next.js project
  console.log(`[2/5] Installing Dependencies...`);
  execSync("npm install", { cwd: projectPath, stdio: "inherit" });

  console.log(`[3/5] Building Project...`);
  execSync("npm run build", { cwd: projectPath, stdio: "inherit" });

  console.log(`[5/5] Visual Verification (Playwright)...`);
  const port = name === "aurora" ? 3001 : 3002;
  
  const server = spawn("npm", ["run", "start", "--", "-p", String(port)], {
    cwd: projectPath,
    stdio: "pipe",
    detached: true,
  });

  await new Promise<void>((resolve, reject) => {
    let output = "";
    const timeout = setTimeout(() => {
      reject(new Error("Server took too long to start:\n" + output));
    }, 15000);

    server.stdout.on("data", (data) => {
      output += data.toString();
      if (output.includes("Ready in") || output.includes("started server on") || output.includes("http://localhost:")) {
        clearTimeout(timeout);
        resolve();
      }
    });
    server.stderr.on("data", (data) => {
      output += data.toString();
    });
  });

  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}`);
    await page.waitForTimeout(2000); 
    const screenshotPath = path.join(EXPORT_DIR, `${name}_screenshot.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`✓ Screenshot saved: ${screenshotPath}`);
    await browser.close();
  } catch (error) {
    console.error(`❌ Playwright test failed:`, error);
    throw error;
  } finally {
    try {
      process.kill(-server.pid!);
    } catch (e) {}
  }
  
  console.log(`✅ ${name} passes all Export Acceptance Tests.`);
}

async function runTests() {
  if (!fs.existsSync(EXPORT_DIR)) {
    fs.mkdirSync(EXPORT_DIR, { recursive: true });
  }

  let failed = false;
  for (const [name, experience] of Object.entries(WORLDS)) {
    try {
      await testExport(name, experience);
    } catch (error) {
      console.error(`\n❌ Failed testing ${name}:`, error);
      failed = true;
    }
  }

  if (failed) {
    process.exit(1);
  } else {
    console.log(`\n🎉 All worlds passed Export Acceptance Testing!`);
  }
}

runTests();
