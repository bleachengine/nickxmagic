import { SiteShell } from "@/components/site-shell"
import { MagicSparkles } from "@/components/magic-sparkles"
import { HeroSection } from "@/components/hero-section"
import { LogoStripSection } from "@/components/logo-strip-section"
import { HomeShowcaseSection } from "@/components/home-showcase-section"

export const metadata = {
  title: "NickXMagic | World-Class Magician | International Performer",
  description:
    "NickXMagic is a world-class magician and one of the best mentalist performing across India, USA, Thailand and 5 other Caribbean countries for corporate events, luxury weddings and international audiences.",
}

export default function HomePage() {
  return (
    <SiteShell>
      <MagicSparkles />
      <HeroSection />
      <LogoStripSection />
      <HomeShowcaseSection />
    </SiteShell>
  )
}
