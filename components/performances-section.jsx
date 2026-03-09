"use client"

import Image from "next/image"
import { Globe, Briefcase, Gem, Cake, Plane, Brain, Star, Trophy } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useBooking } from "@/components/booking-context"

const globalLocations = [
  "India",
  "USA",
  "Thailand",
  "Mexico",
  "Bahamas",
  "Honduras",
  "Caribbean Islands",
  "International Cruise Liners",
]

const performanceTracks = [
  {
    icon: Briefcase,
    title: "Corporate Events and Hosting",
    subtitle: "Corporate Mentalist and Magician for Business Stages",
    description:
      "A preferred choice for conferences, leadership programs, annual meets and high-value brand events. Each set is designed to keep decision-makers engaged without breaking professional flow.",
    focusTitle: "Performance Focus",
    focusItems: [
      "Psychological illusion",
      "Mind reading and influence",
      "Intelligent humor",
      "High audience engagement",
    ],
    idealTitle: "Ideal For",
    idealItems: ["CXOs", "Leadership teams", "Corporate conferences", "Product launches"],
  },
  {
    icon: Gem,
    title: "Destination Weddings and Luxury Marriages",
    subtitle: "Magician for Wedding Celebrations",
    description:
      "Refined performances crafted for destination weddings and premium family functions across India and international venues.",
    focusTitle: "Show Style",
    focusItems: [
      "Elegant and family-friendly",
      "Designed for mixed-age audiences",
      "Structured for premium wedding flow",
    ],
    idealTitle: "Ideal For",
    idealItems: ["Resort weddings", "Destination marriages", "Luxury family celebrations"],
  },
  {
    icon: Cake,
    title: "Birthday Parties and Family Events",
    subtitle: "Interactive Birthday Magician in Delhi NCR and North India",
    description:
      "Interactive, safe and high-energy shows that keep both kids and adults fully involved from start to finish.",
    focusTitle: "Show Format",
    focusItems: [
      "45 to 60 minute curated duration",
      "Child-safe and family-friendly",
      "Laughter-driven audience interaction",
    ],
    idealTitle: "Ideal For",
    idealItems: ["Kids birthday parties", "Family celebrations", "Private events"],
  },
  {
    icon: Plane,
    title: "International Performances",
    subtitle: "Global Magician and Mentalist for Premium Events",
    description:
      "Available for premium international shows across India, United States, Europe, Dubai, Thailand, Malaysia and Singapore with cruise-ready adaptability.",
    focusTitle: "Designed For",
    focusItems: [
      "Corporate conferences",
      "Luxury brand events",
      "International weddings",
      "Cruise performances",
    ],
    idealTitle: "Global Advantage",
    idealItems: [
      "Cultural sensitivity",
      "International performance quality",
      "Premium event adaptability",
    ],
  },
]

const philosophyItems = [
  "Psychology over tricks",
  "Experience over spectacle",
  "Impact over applause",
]

const qualityPrinciples = [
  "Respect the intelligence of every audience",
  "Maintain ethical, clean and professional standards",
  "Deliver memorable content with intelligent engagement",
]

const recognitionTags = [
  "World-Class Magician",
  "Best Mentalist from India",
  "International Performer",
  "Celebrity Entertainer",
  "Corporate Mind Artist",
]

const recognitionTraits = [
  "Corporate authority",
  "Psychological performance",
  "International professionalism",
]

export function PerformancesSection() {
  const { openBookingModal } = useBooking()

  return (
    <section className="relative py-14 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-primary sm:text-xs sm:tracking-[0.35em]">
              Performances
            </p>
            <h1 className="font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              <span className="text-foreground">Global Stages.</span>{" "}
              <span className="text-primary">One Signature Experience.</span>
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="group relative mb-16 overflow-hidden border border-border">
            <Image
              src="/images/performer.webp"
              alt="NickXMagic performing in front of a world map"
              width={1920}
              height={1080}
              priority
              sizes="100vw"
              className="h-[40vh] w-full object-cover transition-transform duration-1000 group-hover:scale-105 sm:h-[52vh] md:h-[68vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
            <div className="relative inset-x-0 bottom-0 bg-background/90 p-4 sm:p-6 md:absolute md:bg-transparent md:p-10">
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.3em]">
                Global Presence
              </p>
              <p className="max-w-4xl text-sm leading-relaxed text-foreground sm:text-base md:text-lg">
                NickXMagic performs international magic shows and premium magic gigs across India,
                USA, Thailand, Mexico, Bahamas, Honduras, Caribbean islands and international
                cruise liners.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
                {globalLocations.map((location) => (
                  <span
                    key={location}
                    className="border border-border bg-background/60 px-2.5 py-1 text-[10px] uppercase tracking-wide text-foreground sm:px-3 sm:text-xs"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mb-16 grid gap-5 lg:grid-cols-2">
          {performanceTracks.map((track, index) => {
            const IconComponent = track.icon

            return (
              <ScrollReveal key={track.title} delay={index * 80}>
                <article className="h-full border border-border bg-card/60 p-4 sm:p-6">
                  <div className="mb-4 flex items-start gap-3">
                    <IconComponent className="h-5 w-5 text-primary" />
                    <h2 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">{track.title}</h2>
                  </div>
                  <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.25em]">
                    {track.subtitle}
                  </p>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {track.description}
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">{track.focusTitle}</p>
                      <div className="space-y-2">
                        {track.focusItems.map((item) => (
                          <p key={item} className="border-l border-primary pl-3 text-sm text-muted-foreground">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">{track.idealTitle}</p>
                      <div className="space-y-2">
                        {track.idealItems.map((item) => (
                          <p key={item} className="border-l border-primary pl-3 text-sm text-muted-foreground">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="mb-16 grid gap-5 lg:grid-cols-3">
          <ScrollReveal>
            <article className="h-full border border-border bg-card/60 p-4 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <Brain className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">Philosophy and Style</h3>
              </div>
              <div className="space-y-3">
                {philosophyItems.map((item) => (
                  <p key={item} className="border-l border-primary pl-3 text-sm text-muted-foreground">
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-5 space-y-3">
                {qualityPrinciples.map((item) => (
                  <p key={item} className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </p>
                ))}
              </div>
              <p className="mt-5 font-serif text-lg text-foreground">This is beyond magic.</p>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <article className="h-full border border-border bg-card/60 p-4 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">International Experience</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Repeated performances across India, United States, Thailand, Bahamas and
                international cruise lines have shaped a globally adaptable performance standard.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Cultural sensitivity</p>
                <p className="text-sm text-muted-foreground">International performance quality</p>
                <p className="text-sm text-muted-foreground">Premium event adaptability</p>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <article className="h-full border border-border bg-card/60 p-4 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <Trophy className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">Recognition</h3>
              </div>
              <div className="mb-5 flex flex-wrap gap-2">
                {recognitionTags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border bg-background/60 px-2.5 py-1 text-[10px] uppercase tracking-wide text-foreground sm:px-3 sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                {recognitionTraits.map((trait) => (
                  <p key={trait} className="text-sm text-muted-foreground">
                    {trait}
                  </p>
                ))}
              </div>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mx-auto max-w-3xl border border-border bg-card/60 p-5 text-center sm:p-7 md:p-9">
            <div className="mb-4 flex items-center justify-center gap-2 text-primary">
              <Star className="h-5 w-5" />
              <p className="text-[11px] uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.3em]">
                Book a Performance
              </p>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">
              Bring a World-Class Performance to Your Event
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Corporate, wedding, private and international formats are available with curated
              performance flow for your audience profile.
            </p>
            <button
              onClick={openBookingModal}
              className="mt-8 border border-primary bg-primary px-8 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
            >
              Book Now
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
