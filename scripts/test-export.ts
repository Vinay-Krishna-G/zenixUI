import fs from "fs"
import path from "path"
import { experiences } from "../apps/website/src/experiences"
import { assembleProject } from "../apps/website/src/lib/export/assembler"
import { execSync } from "child_process"

// Polyfill window so URL.createObjectURL doesn't crash if we inadvertently hit zip code
;(global as any).window = { URL: { createObjectURL: () => "", revokeObjectURL: () => "" } }

const entry = experiences[0]
const config = { theme: entry.defaultTheme, content: entry.defaultContent }

const files = assembleProject(entry, config)
const TARGET_DIR = path.join(process.cwd(), "../my-startup-test")

console.log("Cleaning target dir...")
fs.rmSync(TARGET_DIR, { recursive: true, force: true })
fs.mkdirSync(TARGET_DIR, { recursive: true })

console.log("Writing exported files...")
for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(TARGET_DIR, filePath)
  fs.mkdirSync(path.dirname(fullPath), { recursive: true })
  fs.writeFileSync(fullPath, content)
}

console.log("✅ Export output written to " + TARGET_DIR)
