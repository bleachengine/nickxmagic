import { SiteShell } from "@/components/site-shell"

export const metadata = {
  title: "Terms of Use | NickXMagic",
  description: "Read the terms of use for the NickXMagic website.",
}

export default function TermsOfUsePage() {
  return (
    <SiteShell>
      <section className="px-6 pb-16 pt-28 md:pt-32">
        <div className="mx-auto max-w-4xl border border-border bg-card/60 p-6 md:p-8">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Terms of Use
          </p>
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Terms of Use
          </h1>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              This website is provided for general information, booking inquiries
              and service communication related to NickXMagic performances.
            </p>
            <p>
              All website content, including branding, text, design elements and
              media, should not be copied, redistributed or reused without prior
              permission.
            </p>
            <p>
              Submitting a form or inquiry does not guarantee a confirmed booking.
              Event dates, availability, pricing and performance terms are subject
              to direct confirmation.
            </p>
            <p>
              The information shown on this website is intended to help visitors
              understand available performance formats, event types, contact
              options and general service direction. Final scope of work,
              performance length, pricing and travel-related arrangements are
              confirmed separately through direct communication.
            </p>
            <p>
              Users agree not to misuse the website, attempt unauthorized access,
              submit false booking details or use the contact forms for spam,
              abusive or misleading communication. Any such misuse may result in
              inquiries being ignored or blocked.
            </p>
            <p>
              While reasonable care is taken to keep content accurate and updated,
              NickXMagic does not guarantee that all website information will
              always be complete, current or error-free. Performance availability
              may change without notice depending on schedule, travel and event
              commitments.
            </p>
            <p>
              Any third-party links, social media links or external references
              provided on this website are for convenience only. Their content,
              terms and policies are governed by the respective third-party
              platforms.
            </p>
            <p>
              Use of this website does not create a client relationship until a
              booking is reviewed, accepted and confirmed through direct
              communication. By continuing to use the site, you agree to these
              terms and to any reasonable updates made for operational, legal or
              business purposes.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
