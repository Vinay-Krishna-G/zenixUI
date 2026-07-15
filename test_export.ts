import { assembleProject } from "./apps/website/src/lib/export/assembler";
import { aurora } from "./apps/website/src/experiences/aurora";
import { hanami } from "./apps/website/src/experiences/hanami";
import * as fs from "fs";
import * as path from "path";

function testExport(worldName: string, experience: any) {
  console.log(`\n--- Validating ${worldName} Export ---`);
  
  // Clone the config
  const config = {
    theme: { ...experience.theme },
    content: JSON.parse(JSON.stringify(experience.content))
  };

  // Mutate with some "ugly" content
  if (config.content.hero) {
    config.content.hero.headline = "Super Long Company Name That Breaks Everything™ And Wraps Forever And Ever And Ever";
    config.content.hero.subheadline = "Very short";
  }

  // Mutate Navigation to have very long text
  if (config.content.nav && config.content.nav.links) {
    config.content.nav.links.push({ label: "Extremely Long Navigation Link That Will Take Up The Whole Row", href: "#long" });
    config.content.nav.links.push({ label: "Another Extremely Long Navigation Link", href: "#long2" });
  }

  const outDir = path.join(process.cwd(), `test_export_${worldName}`);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const files = assembleProject(experience, config);
  let hasMissingComponents = false;
  let fileCount = 0;

  for (const [filePath, content] of Object.entries(files)) {
    const fullPath = path.join(outDir, filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, "utf-8");
    fileCount++;
    if (content.includes("undefined")) {
      console.log(`⚠️ Warning: "undefined" found in exported file: ${filePath}`);
    }
  }

  console.log(`✅ Exported ${fileCount} files to ${outDir}`);

  // Identity Preservation Check
  console.log(`Checking Identity Preservation...`);
  // Since we mutated the content wildly, we can check if the underlying components still remain intact.
  const pageTsx = files["app/page.tsx"];
  if (worldName === "aurora" && !pageTsx.includes("AuroraHero")) {
    console.log(`❌ Identity Preservation Failed: AuroraHero missing from page.tsx`);
  } else if (worldName === "hanami" && !pageTsx.includes("HanamiHero")) {
    console.log(`❌ Identity Preservation Failed: HanamiHero missing from page.tsx`);
  } else {
    console.log(`✅ Identity Preserved in page.tsx structure.`);
  }

  // Export Quality Audit
  console.log(`Checking Export Quality...`);
  let hasHardcodedZenix = false;
  for (const [filePath, content] of Object.entries(files)) {
    if (filePath !== "types/index.ts" && content.includes("@zenix/ui")) {
      console.log(`❌ Leak found: @zenix/ui used in ${filePath}`);
      hasHardcodedZenix = true;
    }
  }
  if (!hasHardcodedZenix) {
    console.log(`✅ No @zenix/ui module leaks.`);
  }
}

testExport("aurora", aurora);
testExport("hanami", hanami);
