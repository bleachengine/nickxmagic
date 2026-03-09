import Image from "next/image"

const clientLogos = [
  { src: "/logos/arvato-bertelsmann.webp", alt: "Arvato Bertelsmann", scale: 3.15, invertOnDark: true },
  { src: "/logos/Axe_logo.webp", alt: "Axe", scale: 0.9, invertOnDark: true },
  { src: "/logos/Bikanervala_Logo.webp", alt: "Bikanervala", scale: 1.25 },
  { src: "/logos/carnivallines.webp", alt: "Carnival Lines", scale: 1.2 },
  { src: "/logos/Central_Bank_of_India.webp", alt: "Central Bank of India", scale: 3.75, invertOnDark: true },
  { src: "/logos/Hyatt-Regency.webp", alt: "Hyatt Regency", scale: 2.55, invertOnDark: true },
  { src: "/logos/iit-delhi.webp", alt: "IIT Delhi", scale: 1.2, invertOnDark: true },
  { src: "/logos/jw-marriott.webp", alt: "JW Marriott", scale: 3.15, invertOnDark: true },
  { src: "/logos/Microsoft_logo.webp", alt: "Microsoft", scale: 1.1, invertOnDark: true },
  { src: "/logos/punchliner_solid_logo_4c_thmb.webp", alt: "Punchliners", scale: 1.4 },
  { src: "/logos/Radisson_Hotel.webp", alt: "Radisson Hotel", scale: 1.3 },
  { src: "/logos/shangri-la.webp", alt: "Shangri-La", scale: 3.25, invertOnDark: true },
  { src: "/logos/StarPlus_logo_29.webp", alt: "Star Plus", scale: 1.90 },
  { src: "/logos/summer-fields-school.webp", alt: "Summer Fields School", scale: 1.55 },
  { src: "/logos/the_lalit.webp", alt: "The Lalit", scale: 1.25, invertOnDark: true },
  { src: "/logos/The_Walt_Disney.webp", alt: "The Walt Disney Company", scale: 1.4 },
  // { src: "/logos/united-group.webp", alt: "United Group", scale: 1.2 },
]

const loopedClientLogos = [...clientLogos, ...clientLogos]

const defaultLogoFilter =
  "grayscale(1) contrast(1.25) brightness(1.2) drop-shadow(0 0 6px rgba(255,255,255,0.44))"
const invertedLogoFilter =
  "grayscale(1) contrast(1.15) brightness(1.2) invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.25))"

export function LogoStripSection() {
  return (
    <section className="relative border-y border-border/60 py-10 md:py-12">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/30" />

      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-[11px] uppercase tracking-[0.35em] text-muted-foreground md:mb-8">
          Magical Perfomances Delivered
        </p>

        <div className="logo-strip-mask relative overflow-hidden">
          <div className="animate-logo-marquee flex w-max items-center gap-10 md:gap-14">
            {loopedClientLogos.map((logo, logoIndex) => (
              <div
                key={`${logo.src}-${logoIndex}`}
                className="flex h-16 min-w-[156px] items-center justify-center  border-border/50 bg-card/40 px-5 backdrop-blur-sm md:h-20 md:min-w-[190px] md:px-6"
              >
                <div className="flex h-9 w-full items-center justify-center px-2 md:h-11 md:px-3">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={220}
                    height={80}
                    className="h-full w-full object-contain"
                    style={{
                      transform: `scale(${logo.scale || 1})`,
                      filter: logo.invertOnDark ? invertedLogoFilter : defaultLogoFilter,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
