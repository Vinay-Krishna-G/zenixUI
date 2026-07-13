import * as fs from 'fs';
import * as path from 'path';
import { assembleProject } from '../apps/website/src/lib/export/assembler';
import { experiences } from '../apps/website/src/experiences';
import type { ExperienceConfig, ExperienceEntry } from '../apps/website/src/types/experience';

const entry: ExperienceEntry = experiences[0];
const config: ExperienceConfig = {
  theme: entry.defaultTheme,
  content: entry.defaultContent
};

const fileMap = assembleProject(entry, config);
const outDir = path.join(__dirname, '../zenix-export-test');

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

for (const [filePath, content] of Object.entries(fileMap)) {
  const fullPath = path.join(outDir, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content);
}

console.log('Export written to ' + outDir);
