import { ExperienceEditorSchema } from "../../types/experience"

export const editor: ExperienceEditorSchema = {
  order: ["nav", "hero", "story", "gallery", "features", "testimonials", "cta", "footer"],
  labels: {
    nav: "Navigation",
    hero: "Hero",
    story: "Our Story",
    gallery: "Gallery",
    features: "Features",
    testimonials: "Testimonials",
    cta: "Invitation",
    footer: "Footer"
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
      headline: { kind: "title", label: "Headline" },
      subheadline: { kind: "textarea", label: "Subheadline" },
      primaryCta: {
        kind: "object",
        label: "Primary Button",
        fields: {
          label: { kind: "string", label: "Label" },
          href: { kind: "string", label: "URL" }
        }
      }
    },
    story: {
      headline: { kind: "title", label: "Headline" },
      body: { 
        kind: "list", 
        label: "Paragraphs",
        // When schema is empty for a list, the editor will treat it as an array of primitives
        schema: {}
      }
    },
    gallery: {
      headline: { kind: "string", label: "Headline" },
      items: {
        kind: "list",
        label: "Images",
        schema: {
          id: { kind: "string", label: "ID" },
          url: { kind: "image", label: "Image URL" },
          alt: { kind: "string", label: "Alt Text" },
          caption: { kind: "string", label: "Caption" }
        }
      }
    },
    features: {
      headline: { kind: "string", label: "Headline" },
      items: {
        kind: "list",
        label: "Feature Cards",
        schema: {
          title: { kind: "string", label: "Title" },
          body: { kind: "textarea", label: "Description" },
          icon: { kind: "string", label: "SVG Icon Code" }
        }
      }
    },
    testimonials: {
      headline: { kind: "string", label: "Headline" },
      items: {
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
      }
    },
    footer: {
      brandName: { kind: "string", label: "Brand Name" },
      brandTagline: { kind: "string", label: "Tagline" },
      copyright: { kind: "string", label: "Copyright text" },
      links: {
        kind: "list",
        label: "Link Columns",
        schema: {
          title: { kind: "string", label: "Column Title" },
          items: {
            kind: "list",
            label: "Links",
            schema: {
              label: { kind: "string", label: "Label" },
              href: { kind: "string", label: "URL" }
            }
          }
        }
      }
    }
  }
}
