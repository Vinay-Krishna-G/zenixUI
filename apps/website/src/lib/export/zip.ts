import JSZip from "jszip"
import type { FileMap } from "./assembler"

export async function downloadAsZip(files: FileMap, projectName: string): Promise<void> {
  const zip = new JSZip()
  const root = zip.folder(projectName)

  if (!root) {
    throw new Error("Failed to create zip root folder")
  }

  // Add all files to the zip
  for (const [filePath, content] of Object.entries(files)) {
    root.file(filePath, content)
  }

  // Generate the zip file asynchronously
  const blob = await zip.generateAsync({ type: "blob" })

  // Trigger browser download
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${projectName}.zip`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url)
}
