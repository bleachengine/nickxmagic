"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useBooking } from "@/components/booking-context"

const serviceCards = [
  {
    title: "Corporate Events",
    description:
      "Elevate your corporate event with sophisticated magic that breaks the ice, sparks conversation, and creates lasting impressions.",
    image: "/images/corporate.jpg",
  },
  {
    title: "Private Parties",
    description:
      "From intimate dinner parties to grand celebrations, bespoke magic experiences tailored to your special occasion.",
    image: "/images/private.jpg",
  },
  {
    title: "Stage Shows",
    description:
      "Full-scale theatrical productions featuring grand illusions, mentalism, and audience participation that fills every seat.",
    image: "/images/stage.jpg",
  },
]

const performancePillars = [
  "Professional ethics",
  "Clean and intelligent content",
  "Audience-specific customization",
  "45 to 60 minute curated performances and 90 minute Magic marathon shows",
]

const serviceFormats = [
  {
    title: "Corporate & Business Events",
    description:
      "Elevate conferences, product launches, trade shows, award nights and gala dinners with sophisticated magic that engages clients and teams.",
  },
  {
    title: "Weddings & Pre-Wedding Functions",
    description:
      "Create magical memories at wedding receptions, cocktail parties, sangeet, mehndi, bachelor and bachelorette parties, and destination weddings.",
  },
  {
    title: "Educational & Institutional Events",
    description:
      "Entertain and inspire at school events, college festivals, annual days, graduation parties and educational programs with age-appropriate magic.",
  },
  {
    title: "Hospitality & Luxury Events",
    description:
      "Enhance guest experiences at hotels, resorts, restaurants, lounges, cruise ships and luxury brand events with refined magic entertainment.",
  },
  {
    title: "Public & Ticketed Shows",
    description:
      "Captivate audiences at theatre shows, live ticketed performances, festivals, carnivals, malls and public events.",
  },
  {
    title: "Digital & Virtual Experiences",
    description:
      "Bring magic anywhere with virtual magic shows, online corporate events and hybrid performances.",
  },
  {
    title: "Private & Social Celebrations",
    description:
      "Add excitement to grand birthday parties, anniversaries, engagement parties, house parties and family gatherings with interactive magic.",
  },
  {
    title: "Christmas & Santa Magic",
    description:
      "Bring festive wonder to Christmas parties, winter festivals and family gatherings with joyful Santa-themed magical entertainment.",
  },
]

export function EventSection() {
  const { openBookingModal } = useBooking()

  return (
    <section className="relative py-24 md:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              Events
            </p>
            <h2 className="font-serif text-3xl font-bold md:text-5xl">
              <span className="text-foreground">Magic for Every </span>
              <span className="text-primary">Occasion</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Magician Nick offers a complete range of professional performance
              services designed for corporate, luxury and international audiences.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12 border border-border bg-card/60 p-6 md:p-8">
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              From intimate gatherings to grand celebrations, our professional
              magic performances create unforgettable moments of wonder. We
              deliver engaging, interactive magic experiences tailored to your
              audience, perfect for corporate events, weddings, private parties
              and public shows.
            </p>

            <div className="grid gap-3 md:grid-cols-2">
              {performancePillars.map((pillarItem) => (
                <div
                  key={pillarItem}
                  className="border-l border-primary pl-4 text-sm leading-relaxed text-foreground"
                >
                  {`• ${pillarItem}`}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              Hire NickXmagic
            </p>
            <h2 className="font-serif text-3xl font-bold md:text-5xl">
              <span className="text-foreground">Types of </span>
              <span className="text-primary">Events</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {serviceCards.map((serviceCard, serviceCardIndex) => (
            <ScrollReveal key={serviceCard.title} delay={serviceCardIndex * 150}>
              <div className="group relative overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={serviceCard.image}
                    alt={serviceCard.title}
                    width={1200}
                    height={900}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/70 transition-opacity duration-400 group-hover:bg-background/50" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                    {serviceCard.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {serviceCard.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 mb-10 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              Our Services
            </p>
          </div>
        </ScrollReveal>

        <div className="mb-16 grid gap-4 md:grid-cols-2">
          {serviceFormats.map((serviceFormat, serviceFormatIndex) => (
            <ScrollReveal
              key={serviceFormat.title}
              delay={serviceFormatIndex * 70}
            >
              <div className="h-full border border-border bg-card/60 p-5 transition-all duration-400 hover:border-primary/40 hover:bg-secondary/30">
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                  {serviceFormat.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {serviceFormat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mx-auto mt-16 max-w-2xl border border-border bg-card/60 p-6 text-center md:p-7">
            <h3 className="font-serif text-xl font-semibold text-foreground md:text-2xl">
              Ready to Create a Moment of Wonder?
            </h3>
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
