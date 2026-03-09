"use client"

import Image from "next/image"
import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { X } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "NickXmagic performing on stage with dramatic lighting", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Close-up card magic performance", span: "" },
  { src: "/images/gallery-3.jpg", alt: "Audience amazed during mentalism act", span: "" },
  { src: "/images/gallery-4.jpg", alt: "Fire illusion performance", span: "" },
  { src: "/images/gallery-5.jpg", alt: "Private event magic show", span: "md:col-span-2" },
  { src: "/images/gallery-6.jpg", alt: "NickXmagic with celebrity guests backstage", span: "" },
]

export function GallerySection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null)

  return (
    <section id="gallery" className="relative py-24 md:py-8">

      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              Portfolio
            </p>
            <h2 className="font-serif text-3xl font-bold md:text-5xl">
              <span className="text-foreground">Moments of </span>
              <span className="text-primary">Wonder</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {galleryImages.map((galleryImage, imageIndex) => (
            <ScrollReveal
              key={galleryImage.src}
              delay={imageIndex * 100}
              className={galleryImage.span}
            >
              <button
                onClick={() => setActiveLightboxIndex(imageIndex)}
                className="group relative block h-full w-full overflow-hidden border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`View: ${galleryImage.alt}`}
              >
                <Image
                  src={galleryImage.src}
                  alt={galleryImage.alt}
                  width={1400}
                  height={1000}
                  priority={imageIndex < 2}
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="h-full min-h-48 w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-background/0 transition-all duration-500 group-hover:bg-background/30" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-xs uppercase tracking-widest text-primary">
                    View
                  </p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-6 backdrop-blur-sm"
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <Image
            src={galleryImages[activeLightboxIndex].src}
            alt={galleryImages[activeLightboxIndex].alt}
            width={1800}
            height={1200}
            priority
            sizes="100vw"
            className="max-h-[80vh] max-w-full animate-fade-in-up object-contain"
          />
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {galleryImages.map((imageEntry, imageIndex) => (
              <button
                key={imageEntry.src}
                onClick={() => setActiveLightboxIndex(imageIndex)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  imageIndex === activeLightboxIndex
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`View image ${imageIndex + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
