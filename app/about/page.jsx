import { SiteShell } from "@/components/site-shell"
import { AboutSection } from "@/components/about-section"

export const metadata = {
  title: "About NickXMagic | World-Class Magician & Best Mentalist",
  description:
    "Learn about NickXMagic, an international magician and best mentalist with 1400+ performances across India, USA, Thailand, Mexico, Bahamas and Nassau, Caribbean island and much more..",
}

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="pt-20 md:pt-24">
        <AboutSection />
      </div>
    </SiteShell>
  )
}
