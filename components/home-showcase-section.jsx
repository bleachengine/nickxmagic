"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useBooking } from "@/components/booking-context"
import { Globe, Sparkles, Star, Target, WandSparkles } from "lucide-react"


const impactPoints = [
  "Carefully curated and customized for audience profile, event type and demand",
  "Clean, intelligent and professional content with mentalism, hypnosis and jaw-dropping illusion",
  "Structured to hold attention from first minute to final reveal with multifold X-factor impact",
  "Whether it is a boardroom, a destination wedding or a global stage or the grand celebration the experience remains world-class.",
]

const globalPresence = ["India - North & South India", "United States", "Thailand", "Bahamas"]

const serviceSnapshot = [
  "Corporate Events and Conferences",
  "Destination Weddings and Luxury Marriages",
  "Birthday Parties and Family Events",
  "International and Cruise Performances",
]

const audienceStories = [
  {
    title: "Corporate Magic Show Experience",
    story:
      "At our leadership conference in Gurgaon, we booked NickXMagic for a mentalism and magic performance. Within minutes, the entire hall was silent and focused. Even after dinner, people were still discussing the predictions. It was the most talked-about magic show of our event.",
  },
  {
    title: "Wedding Magic Performance Experience",
    story:
      "We booked NickXMagic for our destination wedding in Jaipur. The magic show was elegant, family-friendly and beautifully paced. Guests from different countries told us it was the highlight of the celebrations.",
  },
  {
    title: "Birthday Magic Gig Experience",
    story:
      "We hired NickXMagic for our son's birthday in Delhi. The magic gig was energetic, safe and extremely engaging. Parents were enjoying the magic performance as much as the kids.",
  },
]

const showcaseGalleryCards = [
  {
    textLine: "Vibe Artist",
    src: "images/vibe-artist.jpg",
  },
  {
    textLine: "Kid's Friend",
    src: "images/kids-friend.jpg",
  },
  {
    textLine: "CORPORATE SPECIALIST",
    src: "images/corporate-special.jpg",
  },
  {
    textLine: "The Cruise Magician",
    src: "images/cruise-magician.jpg",
  },
]

export function HomeShowcaseSection() {
  const { openBookingModal } = useBooking()

  return (
    <section className="relative py-20 md:py-12">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-5xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              World-Class Magician - Best Mentalist - Hypnotist - Ultra Performer - Illusionist
            </p>
            <h2 className="font-serif text-2xl font-bold leading-tight md:text-3xl">
              <span className="text-foreground">Turning Moments into </span>
              <span className="text-primary">Magic</span>
            </h2>
          </div>
        </ScrollReveal>

        

        <div className="mb-12 grid items-center justify-center gap-8 lg:grid-cols-[320px_520px]">
          <ScrollReveal>
            <div className="relative mx-auto w-full max-w-[300px] overflow-hidden border border-border bg-card/40 sm:max-w-[320px] lg:mx-0">
              <Image
                src="images/hero-second.jpg"
                alt="NickXMagic performance placeholder"
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 300px, 82vw"
                className="aspect-[4/5] w-full object-cover border border-primary"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">NickXMagic</p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-foreground md:text-2xl">
                  International Performer
                </h3>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <div className="grid gap-6">
              <div className="border border-border bg-card/60 p-6">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Global Entertainer</p>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  From corporate boardrooms in Delhi-NCR and India to luxury events in Dubai and
                  Singapore, NickXMagic creates unforgettable psychological and illusion-based
                  experiences for elite audiences across the world.
                </p>
              </div>
              <div className="border border-border bg-card/60 p-6">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Signature Promise</p>
                <p className="font-serif text-lg leading-relaxed text-foreground md:text-xl">
                  Intelligent customized magic shows designed for modern audiences.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

      <div className="flex flex-col gap-5" >
           <p className="mx-auto mt-5 max-w-4xl text-sm text-center leading-relaxed text-muted-foreground md:text-base">
              Nick aka Nickthecruisemagician is based in Delhi NCR, India and performs across 350 locations abroad, including the USA, Thailand, Mexico, and Caribbean islands.
            </p>

        <div className="mx-auto mb-16 grid max-w-5xl gap-4 px-2 sm:grid-cols-2 lg:grid-cols-4">
          {showcaseGalleryCards.map((showcaseCard, showcaseIndex) => (
            <ScrollReveal key={showcaseCard.textLine} delay={showcaseIndex * 70}>
              <article className="group border border-border bg-card/60 p-3">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={showcaseCard.src}
                    alt={showcaseCard.textLine}
                    width={560}
                    height={420}
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 84vw"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-background/70 transition-colors duration-500 group-hover:bg-background/45" />
                </div>
                <p className="mt-3 text-[12px] text-center font-medium uppercase tracking-wide text-foreground">
                  {showcaseCard.textLine}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>

        <div className="mx-auto mb-16 grid max-w-5xl gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <article className="h-full border border-border bg-card/60 p-6">
              <div className="mb-4 flex items-center gap-3">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  What Makes NickXMagic Different
                </h3>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Most performers entertain, but NickXMagic influences, engages and creates lasting
                psychological impact.
              </p>
              <div className="space-y-3">
                {impactPoints.map((impactPoint) => (
                  <p
                    key={impactPoint}
                    className="border-l border-primary pl-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    {impactPoint}
                  </p>
                ))}
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <article className="h-full border border-border bg-card/60 p-6">
              <div className="mb-4 flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-2xl font-semibold text-foreground">Global Presence</h3>
              </div>
              <div className="mb-6 grid gap-2">
                {globalPresence.map((countryItem) => (
                  <p key={countryItem} className="text-sm text-muted-foreground">
                    {countryItem}
                  </p>
                ))}
              </div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Services Snapshot</p>
              <div className="flex flex-wrap gap-2">
                {serviceSnapshot.map((serviceItem) => (
                  <span
                    key={serviceItem}
                    className="border border-border bg-background/60 px-3 py-1.5 text-xs uppercase tracking-wide text-foreground"
                  >
                    {serviceItem}
                  </span>
                ))}
              </div>
            </article>
          </ScrollReveal>
        </div>

        <div className="mx-auto mb-16 max-w-5xl rounded-sm border border-border bg-card/40 p-7 md:p-8">
          <ScrollReveal>
            <div className="mb-6 flex items-center gap-3">
              <Star className="h-5 w-5 text-primary" />
              <h3 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
                Audience Experience Stories
              </h3>
            </div>
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-3">
            {audienceStories.map((audienceStory, storyIndex) => (
              <ScrollReveal key={audienceStory.title} delay={storyIndex * 90}>
                <article className="h-full border border-border bg-background/50 p-5">
                  <h4 className="font-serif text-xl text-foreground">{audienceStory.title}</h4>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {audienceStory.story}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="mx-auto max-w-4xl border border-border bg-card/60 p-7 text-center md:p-10">
            <div className="mb-4 flex items-center justify-center gap-3 text-primary">
              <Sparkles className="h-5 w-5" />
              <WandSparkles className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Let the Magic Begin
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Plan your event with Nick, formerly known as Nickthecruisemagician.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={openBookingModal}
                className="border border-primary bg-primary px-8 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                Book NickXMagic Now
              </button>
              <a
                href="/events"
                className="border border-border px-8 py-3 text-sm uppercase tracking-widest text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                Plan Your Event
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
