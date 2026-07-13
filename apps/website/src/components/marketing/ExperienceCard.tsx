import Link from "next/link"
import Image from "next/image"
import type { ExperienceEntry } from "@/types/experience"

interface ExperienceCardProps {
  entry: ExperienceEntry
}

export function ExperienceCard({ entry }: ExperienceCardProps) {
  return (
    <Link 
      href={`/studio/${entry.manifest.id}`}
      className="group flex flex-col bg-surface-card border border-surface-border rounded-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
    >
      {/* 1. Preview */}
      <div className="relative aspect-[4/3] w-full bg-[#111] overflow-hidden border-b border-surface-border">
        {/* We use an actual Next/Image or fallback */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <Image 
          src={entry.manifest.preview} 
          alt={`${entry.manifest.name} Preview`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-brand-primary text-brand-foreground font-semibold px-6 py-2.5 rounded-control shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            Customize →
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div>
            {/* 2. Name */}
            <h3 className="text-xl font-bold text-text-heading mb-1">{entry.manifest.name}</h3>
            {/* 3. Best for */}
            <p className="text-sm text-text-muted">Best for: {entry.manifest.tags.join(", ")}</p>
          </div>
          {/* 4. Time to customize */}
          <div className="flex flex-col items-end">
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-wide">Time to launch</span>
            <span className="text-sm font-medium text-text-heading">&lt; 2 Hours</span>
          </div>
        </div>

        {/* 5. Confidence Footer */}
        <div className="mt-auto pt-6 border-t border-surface-border">
          <ul className="flex items-center gap-4 text-xs font-medium text-text-muted">
            <li className="flex items-center gap-1.5">
              <span className="text-brand-primary">✓</span> Mobile Ready
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-brand-primary">✓</span> Accessible
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-brand-primary">✓</span> Export Ready
            </li>
          </ul>
        </div>
      </div>
    </Link>
  )
}
