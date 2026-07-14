// packages/sections/src/index.ts
// Barrel export for all shared section components.
// Add each section here as it is built.

// Business Landing sections
export { Hero }     from "./hero/Hero"
export { Features } from "./features/Features"
export { Stats }    from "./stats/Stats"
export { Pricing }  from "./pricing/Pricing"
export { FAQ }      from "./faq/FAQ"
export { CTA }      from "./cta/CTA"
export { Footer }   from "./footer/Footer"

// Aurora sections
export { AuroraHero } from "./aurora/AuroraHero"
export { AuroraNav }  from "./aurora/AuroraNav"
export { AuroraCTA }  from "./aurora/AuroraCTA"
export { AuroraProof } from "./aurora/AuroraProof"
export { AuroraExplore } from "./aurora/AuroraExplore"
export { AuroraMakeItYours } from "./aurora/AuroraMakeItYours"
export { AuroraSocialProof } from "./aurora/AuroraSocialProof"

// Hanami sections
export * from "./hanami/components"
export * from "./hanami/behavior"

// Types
export * from "./types"
