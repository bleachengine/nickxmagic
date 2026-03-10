"use client"

import { QrCode, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const supportedApps = ["PhonePe", "Paytm", "Google Pay", "BHIM", "Mobikwik"]

export function PaymentsSection() {
  return (
    <section className="relative py-16 md:py-10">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              Payments
            </p>
            <h1 className="font-serif text-3xl font-bold md:text-5xl">
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
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <article className="border border-border bg-card/60 p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <QrCode className="h-5 w-5 text-primary" />
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    QR Code Payment
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Scan and pay using any UPI app.
                  </p>
                </div>
              </div>

              <div className="mx-auto flex max-w-xs flex-col items-center border border-border bg-background/70 p-5">
                <div className="flex aspect-square w-full items-center justify-center border border-dashed border-primary/40 bg-card/80">
                  <div className="text-center">
                    <QrCode className="mx-auto h-12 w-12 text-primary" />
                    <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      QR Placeholder
                    </p>
                  </div>
                </div>
              
              </div>

              <div className="mt-8">
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-primary">
                  Accepted Payment Apps
                </p>
                <div className="flex flex-wrap gap-2">
                  {supportedApps.map((appName) => (
                    <span
                      key={appName}
                      className="border border-border bg-background/60 px-3 py-1.5 text-xs uppercase tracking-wide text-foreground"
                    >
                      {appName}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <article className="border border-border bg-card/60 p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
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
