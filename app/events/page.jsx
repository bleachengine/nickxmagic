import { SiteShell } from "@/components/site-shell"
import { EventSection } from "@/components/event-section"

export const metadata = {
  title:
    "Services | Corporate Magician, Mentalist, Wedding and International Performer",
  description:
    "Explore professional magic and mentalism services by NickXMagic for corporate events, weddings, birthdays and international shows across India, USA, Dubai and Singapore.",
}

export default function EventsPage() {
  return (
    <SiteShell>
      <div className="pt-20 md:pt-24">
        <EventSection />
      </div>
    </SiteShell>
  )
}
