import { SiteShell } from "@/components/site-shell"

export const metadata = {
  title: "Privacy Policy | NickXMagic",
  description: "Read the privacy policy for the NickXMagic website.",
}

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <section className="px-6 pb-16 pt-28 md:pt-32">
        <div className="mx-auto max-w-4xl border border-border bg-card/60 p-6 md:p-8">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Privacy Policy
          </p>
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Information shared through this website, including your name, email,
              phone number and event details, is used only for communication,
              inquiry handling and booking coordination.
            </p>
            <p>
              Personal details are not sold or publicly shared. Data is handled
              only as needed for service-related communication and client support.
            </p>
            <p>
              If you want your submitted information removed or updated, you can
              contact the team directly using the website contact options.
            </p>
            <p>
              When you submit a booking inquiry or contact form, the information
              you provide may be used to respond to your request, discuss
              performance availability, share booking-related updates and manage
              follow-up communication connected to your event.
            </p>
            <p>
              Basic technical information such as browser type, device behavior or
              limited analytics data may also be collected through normal website
              operation to improve usability, page performance and site
              reliability. This information is generally used in aggregate and not
              for public identification.
            </p>
            <p>
              Personal information is retained only for as long as reasonably
              necessary to respond to inquiries, manage discussions, maintain
              booking records or comply with legitimate operational requirements.
              Unnecessary data is not intentionally kept longer than needed.
            </p>
            <p>
              This website may include links to social media platforms or external
              services. Once you leave this website, the handling of your data is
              subject to the privacy practices of those third-party platforms.
            </p>
            <p>
              Reasonable steps are taken to protect submitted information, but no
              internet-based transmission or storage system can be guaranteed to
              be completely secure. By using this website, you understand and
              accept that standard online communication carries some inherent
              risk.
            </p>
            <p>
              This privacy policy may be updated from time to time to reflect
              website, operational or legal changes. Continued use of the site
              after such updates indicates acceptance of the revised policy.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
