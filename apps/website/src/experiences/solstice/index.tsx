import { Experience } from "@/types/experience"
import { manifest } from "./manifest"
import { theme } from "./theme"
import { content } from "./content"

export function SolsticePreview({ config }: any) {
  return (
    <div className="flex items-center justify-center h-screen bg-[#FAFAFA] text-[#111]">
      <h1 className="text-4xl font-serif">Solstice (World 03)</h1>
    </div>
  )
}

export const solstice: Experience = {
  manifest,
  theme,
  content,
  preview: SolsticePreview,
  studio: {},
  editor: {
    order: [],
    labels: {},
    fields: {}
  },
  exporter: {
    files: [],
    generatePage: (config) => {
      return `export default function Page() { return <div>Solstice</div> }`
    },
    dependencies: {}
  }
}
