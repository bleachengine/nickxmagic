"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Wand2, Eye, Sparkles, Brain, Laugh, ShipWheel } from "lucide-react"

const performanceHighlights = [
  "1400+ Live Performances",
  "8+ Countries Performed",
  "600+ Shows",
  "100+ Cities",
]

const performanceSpecialties = [
  {
    icon: Wand2,
    title: "Close-Up Magic",
    description:
      "Intimate sleight of hand performed inches from your eyes. Cards, coins, and everyday objects become instruments of wonder.",
  },
  {
    icon: Eye,
    title: "Mentalism",
    description:
      "Mind reading, predictions, and psychological illusions that blur the line between performance and the supernatural.",
  },
  {
    icon: Sparkles,
    title: "Stage Illusions",
    description:
      "Grand-scale spectacles designed to captivate audiences of hundreds. Disappearances, levitations, and impossible transformations.",
  },
]

const profileCards = [
  {
    icon: Wand2,
    title: "NickXMagic",
    role: "World-Class Magician",
    description:
      "Magic is timeless. NickXMagic blends classical technique with international stage experience to create elegant, intelligent and unforgettable performances.",
    closer: "This is magic you feel, not just watch.",
  },
  {
    icon: Eye,
    title: "NickXMentalism",
    role: "International Mentalist",
    description:
      "Built on psychology, observation and human behavior, NickXMentalism delivers sophisticated mentalism experiences that feel personal, mysterious and memorable.",
    closer: "This is not about reading minds. This is about understanding them.",
  },
  {
    icon: Brain,
    title: "NickXHypnosis",
    role: "Professional Hypnotist",
    description:
      "Professional stage hypnosis designed around focus, imagination and cooperation. Every show is clean, ethical and built with audience safety and dignity first.",
    closer: "This is not about losing control. This is about discovering it.",
  },
  {
    icon: Laugh,
    title: "NickXComedyMagic",
    role: "Comedy Magician",
    description:
      "Inspired by theatre and vaudeville, this format combines sharp timing, playful interaction and strong illusion to create laughter and wonder together.",
    closer: "Magic that makes people laugh, relax and enjoy every moment.",
  },
  {
    icon: ShipWheel,
    title: "NickXCruise & Bar Magic",
    role: "Cruise Magician",
    description:
      "Rooted in close-up magic, this format is crafted for small groups and intimate spaces. NickTheCruiseMagician creates elegant miracles right in your hands.",
    closer: "Here, magic happens inches away from you.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-8">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              The Magician
            </p>
            <h2 className="font-serif text-3xl font-bold md:text-5xl">
              <span className="text-foreground">Behind the </span>
              <span className="text-primary">Illusion</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto mb-20 flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-28">
          <ScrollReveal className="w-full lg:w-auto lg:flex-none">
            <div className="relative mx-auto w-full max-w-sm lg:mx-0">
              <div className="animate-magic-glow overflow-hidden border border-border">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="NickXmagic self"
                  width={900}
                  height={1200}
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              <div className="absolute -left-2 -top-2 h-8 w-8 border-l border-t border-primary" />
              <div className="absolute -bottom-2 -right-2 h-8 w-8 border-b border-r border-primary" />
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex-1" delay={200}>
            <div className="max-w-lg">
               <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                NickXMagic is the professional identity of Nick, internationally known as NickTheCruiseMagician, with over 1400 live performances across cruise liners, corporate stages and luxury events in more than 8 countries. 
              </p>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Inspired by legends such as David Copperfield, Derren Brown and David Blaine, 
                Nick represents a new generation of psychological entertainers who combine intellect, illusion and performance art. Nick is recognized as one of the few Indian performers who seamlessly bridges
                corporate mentalism, illusion and celebrity-level entertainment.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                For more than fifteen years, NickXmagic crafts bespoke experiences
                that transform any occasion into something truly extraordinary.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {performanceHighlights.map((highlightItem) => (
                  <div
                    key={highlightItem}
                    className="border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    <p className="text-sm font-medium uppercase tracking-wide text-foreground">
                      {`${highlightItem}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mb-24 grid gap-8 md:grid-cols-3">
          {performanceSpecialties.map((specialtyItem, specialtyIndex) => (
            <ScrollReveal key={specialtyItem.title} delay={specialtyIndex * 150}>
              <div className="group border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:bg-secondary/50">
                <specialtyItem.icon className="mb-6 h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                  {specialtyItem.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {specialtyItem.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              Extended Profiles
            </p>
            <h2 className="font-serif text-3xl font-bold md:text-5xl">
              <span className="text-foreground">NickX </span>
              <span className="text-primary">Performance Arts</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              A deeper view of Nick's performance formats, from classical magic to
              mentalism, hypnosis, comedy and cruise close-up experiences.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {profileCards.map((profileCard, cardIndex) => (
            <ScrollReveal key={profileCard.title} delay={cardIndex * 90}>
              <article className="h-full border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-400 hover:border-primary/45 hover:bg-secondary/45">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/30 bg-primary/10">
                    <profileCard.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {profileCard.title}
                    </h3>
                    <p className="text-[11px] uppercase tracking-widest text-primary/90">
                      {profileCard.role}
                    </p>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {profileCard.description}
                </p>
                <p className="border-l border-primary/50 pl-3 text-sm font-medium leading-relaxed text-foreground/90">
                  {profileCard.closer}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

