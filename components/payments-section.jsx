"use client"

import Image from "next/image"
import { QrCode, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const supportedApps = [
  { name: "PhonePe", src: "/logos/phonepe-logo.svg", mobileScale: 0.95, desktopScale: 1.2 },
  { name: "Paytm", src: "/logos/paytm-logo.svg", mobileScale: 0.9, desktopScale: 1.05 },
  { name: "Google Pay", src: "/logos/google_pay.avif", mobileScale: 0.9, desktopScale: 1 },
  { name: "BHIM", src: "/logos/bhim-app.avif", mobileScale: 0.9, desktopScale: 1 },
  { name: "Mobikwik", src: "/logos/mobikwik-logo.avif", mobileScale: 0.95, desktopScale: 1.15 },
]

export function PaymentsSection() {
  return (
    <section className="relative py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-primary sm:text-xs sm:tracking-[0.3em]">
              Payments
            </p>
            <h1 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="text-foreground">Make a Secure </span>
              <span className="text-primary">Payment</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Choose the QR payment option below and complete your booking payment
              securely through your preferred UPI app.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <article className="border border-border bg-card/60 p-5 sm:p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <QrCode className="h-5 w-5 text-primary" />
                <div>
                  <h2 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
                    QR Code Payment
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Scan and pay using any UPI app.
                  </p>
                </div>
              </div>

              <div className="mx-auto flex max-w-[260px] flex-col items-center border border-border bg-background/70 p-4 sm:max-w-xs sm:p-5">
                <div className="flex aspect-square w-full items-center justify-center border border-dashed border-primary/40 bg-card/80">
                  <div className="text-center">
                    <QrCode className="mx-auto h-12 w-12 text-primary" />
                    <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      QR Placeholder
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-primary">
                  Accepted Payment Apps
                </p>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
                  {supportedApps.map((appItem) => (
                    <div
                      key={appItem.name}
                      className="flex h-14 items-center justify-center overflow-hidden border border-border bg-background/60 p-2 sm:h-16 sm:p-3"
                    >
                      <div className="flex h-7 w-[68px] items-center justify-center sm:h-8 sm:w-[88px]">
                        <Image
                          src={appItem.src}
                          alt={appItem.name}
                          width={88}
                          height={28}
                          className="h-auto max-w-full object-contain sm:hidden"
                          style={{ transform: `scale(${appItem.mobileScale})` }}
                        />
                        <Image
                          src={appItem.src}
                          alt={appItem.name}
                          width={88}
                          height={28}
                          className="hidden h-auto max-w-full object-contain sm:block"
                          style={{ transform: `scale(${appItem.desktopScale})` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="border border-border bg-card/60 p-5 sm:p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <div>
                  <h2 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
                    Payment Notes
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Simple instructions before you complete your transfer.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                  Scan the QR code from your preferred UPI app and complete the payment securely.
                </div>
                <div className="border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                  Share your payment confirmation on call or email if requested during booking.
                </div>
                <div className="border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                  If you need assistance before paying, contact the team directly from the booking form or footer.
                </div>
              </div>
            </article>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
