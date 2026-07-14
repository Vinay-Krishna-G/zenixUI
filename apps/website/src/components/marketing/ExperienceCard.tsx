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
      className="group flex flex-col bg-surface-card border border-surface-border rounded-card overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
    >
      {/* 1. Preview */}
      <div className="relative aspect-[16/10] w-full bg-[#0a0a0a] overflow-hidden border-b border-surface-border">
        <Image 
          src={entry.manifest.preview} 
          alt={`${entry.manifest.name} Preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-brand-primary text-brand-foreground text-sm font-semibold px-6 py-2 rounded-control shadow-[0_0_16px_rgba(99,102,241,0.3)] transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Customize &rarr;
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-6">
          {/* 2. Name */}
          <h3 className="text-xl font-bold tracking-tight text-text-heading mb-2">{entry.manifest.name}</h3>
          {/* 3. Description */}
          <p className="text-sm text-text-body leading-relaxed mb-4 line-clamp-2">
            {entry.manifest.description}
          </p>
          
          {/* 4. Best for & 5. Difficulty & 6. Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Best For</span>
              <span className="text-sm text-text-heading font-medium">{entry.manifest.tags.join(", ")}</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Difficulty</span>
              <span className="text-sm text-text-heading font-medium">{entry.manifest.difficulty}</span>
            </div>
            <div className="col-span-2">
               <span className="block text-xs font-semibold text-brand-primary uppercase tracking-wider mb-1">Time to launch</span>
               <span className="text-sm text-text-heading font-medium">&lt; 2 Hours</span>
            </div>
          </div>
        </div>

        {/* 8. Trust Footer */}
        <div className="mt-auto pt-6 border-t border-surface-border">
          <ul className="flex items-center gap-4 text-xs font-semibold text-text-muted">
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
