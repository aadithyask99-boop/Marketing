import { SITE, OFFICES, SOCIALS, SERVICES } from "../data/site";

// Real profile URLs only; "#" placeholders are left out of sameAs.
const sameAs = SOCIALS.map((s) => s.href).filter((h) => h.startsWith("http"));

export const orgId = (origin: string) => `${origin}/#organization`;

export function siteGraph(origin: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId(origin),
        name: SITE.name,
        legalName: SITE.name,
        url: origin,
        logo: `${origin}/favicon.svg`,
        image: `${origin}/og.png`,
        description: SITE.description,
        email: SITE.email,
        foundingDate: SITE.founded,
        identifier: { "@type": "PropertyValue", propertyID: "Companies House number", value: SITE.companyNumber },
        areaServed: ["United Kingdom", "United Arab Emirates", "India"].map((name) => ({ "@type": "Country", name })),
        address: OFFICES.map((o) => ({
          "@type": "PostalAddress",
          streetAddress: o.street,
          addressLocality: o.locality,
          ...(o.region && { addressRegion: o.region }),
          ...(o.postcode && { postalCode: o.postcode }),
          addressCountry: o.code,
        })),
        contactPoint: OFFICES.map((o) => ({
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: o.tel,
          email: SITE.email,
          areaServed: o.code,
        })),
        sameAs,
      },
      { "@type": "WebSite", "@id": `${origin}/#website`, name: SITE.name, url: origin, publisher: { "@id": orgId(origin) } },
    ],
  };
}

export function webPage(origin: string, path: string, type: string, name: string, description: string, extra: object = {}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${origin}${path}#webpage`,
    url: `${origin}${path}`,
    name,
    description,
    isPartOf: { "@id": `${origin}/#website` },
    about: { "@id": orgId(origin) },
    ...extra,
  };
}

export function breadcrumbs(origin: string, trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${origin}${t.path}`,
    })),
  };
}

export function serviceList(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.summary,
        url: `${origin}/services#${s.slug}`,
        provider: { "@id": orgId(origin) },
      },
    })),
  };
}
