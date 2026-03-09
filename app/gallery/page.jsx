import { SiteShell } from "@/components/site-shell"
import { GallerySection } from "@/components/gallery-section"

export const metadata = {
  title: "Gallery | NickXmagic",
}

export default function GalleryPage() {
  return (
    <SiteShell>
      <div className="pt-20 md:pt-24">
        <GallerySection />
      </div>
    </SiteShell>
  )
}
