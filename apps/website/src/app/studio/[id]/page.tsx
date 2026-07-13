import { experiences } from "@/experiences"
import { Studio } from "@/components/Studio"

// This is a dynamic route, but since we are just starting, we'll
// look up the experience by ID.
export default async function StudioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const entry = experiences.find(e => e.manifest.id === id)

  if (!entry) {
    return <div>Experience not found</div>
  }

  return <Studio entry={entry} />
}

export function generateStaticParams() {
  return experiences.map(entry => ({
    id: entry.manifest.id,
  }))
}
