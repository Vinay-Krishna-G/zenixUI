import { ExperienceEditorSchema } from "../../types/experience"

export const editor: ExperienceEditorSchema = {
  order: ["nav", "hero", "proof", "explore", "makeItYours", "socialProof", "cta"],
  labels: {
    nav: "Navigation",
    hero: "Hero",
    proof: "Ownership Features",
    explore: "Experiences",
    makeItYours: "Process",
    socialProof: "Testimonials",
    cta: "Bottom CTA"
  },
  fields: {
    nav: {
      logo: { kind: "string", label: "Logo Text" },
      links: {
        kind: "list",
        label: "Navigation Links",
        schema: {
          label: { kind: "string", label: "Label" },
          href: { kind: "string", label: "URL" }
        }
      },
      cta: {
        kind: "object",
        label: "Call to Action",
        fields: {
          label: { kind: "string", label: "Label" },
          href: { kind: "string", label: "URL" }
        }
      }
    },
    hero: {
      badge: { kind: "string", label: "Badge" },
      headline: { kind: "title", label: "Headline" },
      subheadline: { kind: "textarea", label: "Subheadline" },
      primaryCta: {
        kind: "object",
        label: "Primary Button",
        fields: {
          label: { kind: "string", label: "Label" },
          href: { kind: "string", label: "URL" }
        }
      },
      secondaryCta: {
        kind: "object",
        label: "Secondary Button",
        fields: {
          label: { kind: "string", label: "Label" },
          href: { kind: "string", label: "URL" }
        }
      }
    },
    proof: {
      eyebrow: { kind: "string", label: "Eyebrow" },
      headline: { kind: "string", label: "Headline" },
      subheadline: { kind: "textarea", label: "Subheadline" },
      items: {
        kind: "list",
        label: "Proof Points",
        schema: {
          title: { kind: "string", label: "Title" },
          description: { kind: "textarea", label: "Description" },
          visual: { kind: "string", label: "Visual Type (folder/code/checklist)" },
          codeSnippet: { kind: "textarea", label: "Code Snippet (Optional)" }
        }
      }
    },
    explore: {
      eyebrow: { kind: "string", label: "Eyebrow" },
      headline: { kind: "string", label: "Headline" },
      subheadline: { kind: "textarea", label: "Subheadline" },
      items: {
        kind: "list",
        label: "Projects",
        schema: {
          title: { kind: "string", label: "Title" },
          category: { kind: "string", label: "Category" },
          status: { kind: "string", label: "Status" },
          href: { kind: "string", label: "URL" }
        }
      }
    },
    makeItYours: {
      headline: { kind: "string", label: "Headline" },
      subheadline: { kind: "textarea", label: "Subheadline" },
      items: {
        kind: "list",
        label: "Process Steps",
        schema: {
          title: { kind: "string", label: "Title" },
          description: { kind: "textarea", label: "Description" },
          visual: { kind: "string", label: "Visual Type (customize/export/continue)" }
        }
      }
    },
    socialProof: {
      eyebrow: { kind: "string", label: "Eyebrow" },
      headline: { kind: "string", label: "Headline" },
      subheadline: { kind: "textarea", label: "Subheadline" },
      quotes: {
        kind: "list",
        label: "Quotes",
        schema: {
          quote: { kind: "textarea", label: "Quote" },
          author: { kind: "string", label: "Author" },
          role: { kind: "string", label: "Role" }
        }
      }
    },
    cta: {
      headline: { kind: "title", label: "Headline" },
      subheadline: { kind: "textarea", label: "Subheadline" },
      primaryCta: {
        kind: "object",
        label: "Primary Button",
        fields: {
          label: { kind: "string", label: "Label" },
          href: { kind: "string", label: "URL" }
        }
      },
      secondaryCta: {
        kind: "object",
        label: "Secondary Button",
        fields: {
          label: { kind: "string", label: "Label" },
          href: { kind: "string", label: "URL" }
        }
      }
    }
  }
}
