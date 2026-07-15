import fs from "fs"
import path from "path"

const UI_DIR = path.join(process.cwd(), "packages/ui/src")
const OUTPUT_FILE = path.join(process.cwd(), "apps/website/src/lib/export/raw-components.ts")

function walkDir(dir: string, fileList: Record<string, string> = {}) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath, fileList)
    } else if (filePath.endsWith(".tsx") || filePath.endsWith(".ts") || filePath.endsWith(".css")) {
      // Don't include index.ts or types.ts from root
      if (dir === UI_DIR && file === "index.ts") continue
      
      const relativePath = path.relative(UI_DIR, filePath)
      const content = fs.readFileSync(filePath, "utf-8")
      fileList[relativePath] = content
    }
  }

  return fileList
}

const files = walkDir(UI_DIR)

const fileContent = `// GENERATED FILE - DO NOT EDIT
// This file contains the raw source code of all UI components.
// It is used by the client-side exporter to generate the zip file.

export const RAW_COMPONENTS: Record<string, string> = ${JSON.stringify(files, null, 2)}
`

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true })
fs.writeFileSync(OUTPUT_FILE, fileContent)
console.log("✅ Generated raw-components.ts")
