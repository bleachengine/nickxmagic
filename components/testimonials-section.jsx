"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "NickXmagic left our entire team speechless. The close-up magic during cocktail hour was the highlight of our annual gala. Truly world-class.",
    name: "Sarah Mitchell",
    role: "Events Director, Goldman Sachs",
    stars: 5,
  },
  {
    quote:
      "I've seen magic shows all over the world, but nothing compares. He knew what I was thinking before I did. An absolutely mind-bending experience.",
    name: "James Crawford",
    role: "Private Client",
    stars: 5,
  },
  {
    quote:
      "We hired NickXmagic for our wedding and it was the best decision we made. Every single guest is still talking about it months later.",
    name: "Elena & David Park",
    role: "Wedding, The Plaza Hotel",
    stars: 5,
  },
  {
    quote:
      "The standing ovation lasted a full two minutes. NickXmagic doesn't just perform tricks -- he creates moments people will remember for the rest of their lives.",
    name: "Robert Langley",
    role: "Theatre Manager, West End",
    stars: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-border" />

      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl font-bold md:text-5xl">
              <span className="text-foreground">What They </span>
              <span className="text-primary">Say</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, testimonialIndex) => (
            <ScrollReveal
              key={testimonial.name}
              delay={testimonialIndex * 150}
            >
              <div className="group flex h-full flex-col border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30">
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.stars }).map(
                    (_unusedStar, starIndex) => (
                    <Star
                      key={`${testimonial.name}-star-${starIndex}`}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                    )
                  )}
                </div>

                {/* Quote */}
                <blockquote className="mb-6 flex-1 text-base leading-relaxed text-muted-foreground">
                  {`"${testimonial.quote}"`}
                </blockquote>

                {/* Attribution */}
                <div className="border-t border-border pt-4">
                  <p className="font-serif text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
