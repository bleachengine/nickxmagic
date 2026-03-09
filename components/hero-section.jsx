"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useBooking } from "@/components/booking-context"

export function HeroSection() {
  const { openBookingModal } = useBooking()
  const [isIntroVisible, setIsIntroVisible] = useState(false)

  useEffect(() => {
    setIsIntroVisible(true)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, oklch(0.08 0.005 270) 70%)",
        }}
      />

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute left-1/4 top-0 h-full w-px opacity-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.78 0.14 85), transparent)",
          }}
        />
        <div
          className="absolute left-1/2 top-0 h-full w-px opacity-5"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.78 0.14 85), transparent)",
          }}
        />
        <div
          className="absolute left-3/4 top-0 h-full w-px opacity-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.78 0.14 85), transparent)",
          }}
        />
      </div>

      <div className="absolute inset-0">
        {/* <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-top opacity-70 md:object-[center_8%]"
        /> */}

       
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover object-top opacity-70 md:object-[center_8%]"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 px-6 pt-24 text-center md:pt-48">
        <p
          className={`mb-4 text-xs uppercase tracking-[0.4em] text-primary transition-all duration-1000 md:text-sm ${
            isIntroVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          Illusionist & Mentalist
        </p>

        <h1
          className={`font-serif text-5xl font-bold leading-tight tracking-tight transition-all delay-300 duration-1000 md:text-7xl lg:text-8xl ${
            isIntroVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="gold-shimmer">NickXmagic</span>
        </h1>

        <p
          className={`mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground transition-all delay-500 duration-1000 md:text-lg ${
            isIntroVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          Where reality bends and the impossible becomes unforgettable.
          Experience magic that will leave you questioning everything.
        </p>

        <div
          className={`mt-10 flex flex-col items-center gap-4 transition-all delay-700 duration-1000 sm:flex-row sm:justify-center ${
            isIntroVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <button
            onClick={openBookingModal}
            className="group relative overflow-hidden border border-primary bg-primary px-8 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
          >
            <span className="relative z-10">Book a Show</span>
          </button>

          <Link
            href="/events"
            className="border border-border px-8 py-3 text-sm uppercase tracking-widest text-muted-foreground transition-all hover:border-primary hover:text-primary"
          >
            View Events
          </Link>
        </div>
      </div>

    </section>
  )
}
