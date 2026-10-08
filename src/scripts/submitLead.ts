export interface Lead {
  message: string;
  email: string;
  phone?: string;
  name?: string;
  website?: string;
  service?: string;
}

export interface SubmitResult {
  ok: boolean;
  mode: "endpoint" | "mailto";
}

const LABELS: [keyof Lead, string][] = [
  ["name", "Name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["website", "Website"],
  ["service", "Interested in"],
];

// Tells the marketing tools a form was sent (only those that are loaded; nothing personal is passed).
function track(newsletter: boolean) {
  const w = window as any;
  try {
    w.fbq?.("track", newsletter ? "Subscribe" : "Lead");
    if (!newsletter) w.gtag?.("event", "generate_lead");
    w.clarity?.("event", newsletter ? "subscribe" : "lead");
  } catch {}
}

// Posts JSON to the endpoint when one is configured; otherwise opens a
// pre-filled email in the visitor's mail app.
export async function submitLead(
  lead: Lead,
  { endpoint, toEmail }: { endpoint: string; toEmail: string },
): Promise<SubmitResult> {
  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...lead,
          _subject: lead.message === "Newsletter signup" ? "New newsletter signup" : "New enquiry from the website",
          source: location.pathname + location.search,
        }),
      });
      if (res.ok) track(lead.message === "Newsletter signup");
      return { ok: res.ok, mode: "endpoint" };
    } catch {
      return { ok: false, mode: "endpoint" };
    }
  }

  const lines = LABELS.filter(([k]) => lead[k]).map(([k, label]) => `${label}: ${lead[k]}`);
  lines.push("", lead.message);
  const href = `mailto:${toEmail}?subject=${encodeURIComponent("New enquiry from the website")}&body=${encodeURIComponent(lines.join("\n"))}`;
  const link = document.createElement("a");
  link.href = href;
  document.body.append(link);
  link.click();
  link.remove();
  return { ok: true, mode: "mailto" };
}
