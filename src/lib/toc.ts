export interface Heading { depth: number; slug: string; text: string }

// Contents entries for an article: the H2 headings, or when a post has few of them (older posts use H3
// for their sections) the H2 and H3 headings together, skipping repeated generic ones.
export function tocItems(headings: Heading[]): Heading[] {
  const h2 = headings.filter((h) => h.depth === 2);
  if (h2.length >= 4) return h2;
  const seen = new Set<string>();
  const generic = /^(how to fix it|first|second|third|fourth|fifth|google ads|chatgpt ads)$/i;
  return headings
    .filter((h) => h.depth === 2 || h.depth === 3)
    .filter((h) => {
      const k = h.text.trim().toLowerCase();
      if (generic.test(k) || seen.has(k)) return false;
      seen.add(k);
      return true;
    })
    .slice(0, 24);
}
