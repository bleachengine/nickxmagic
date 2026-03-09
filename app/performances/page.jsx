import { SiteShell } from "@/components/site-shell"
import { PerformancesSection } from "@/components/performances-section"

export const metadata = {
  title: "Performances | NickXMagic International Shows",
  description:
    "Explore NickXMagic performance formats for corporate events, destination weddings, birthdays and international shows across India, USA, Thailand, Mexico and Caribbean regions.",
}

export default function PerformancesPage() {
  return (
    <SiteShell>
      <div className="pt-20 md:pt-24">
        <PerformancesSection />
      </div>
    </SiteShell>
  )
}
