import { experiences } from "@/experiences"
import { ExperienceCard } from "./ExperienceCard"

interface ExperienceGridProps {
  category: string
}

export function ExperienceGrid({ category }: ExperienceGridProps) {
  // Filter experiences by category (if applicable)
  const filtered = experiences.filter(e => 
    e.manifest.category.toLowerCase() === category.toLowerCase() || 
    category === "All" ||
    (category === "Business" && e.manifest.tags.includes("business"))
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {filtered.length > 0 ? (
        filtered.map(entry => (
          <ExperienceCard key={entry.manifest.id} entry={entry} />
        ))
      ) : (
        <div className="col-span-full py-24 text-center border border-dashed border-surface-border rounded-card">
          <p className="text-text-muted text-lg mb-2">No experiences yet for this category.</p>
          <p className="text-text-body text-sm">We are launching new ones every week.</p>
        </div>
      )}
    </div>
  )
}
