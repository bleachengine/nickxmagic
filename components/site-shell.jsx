"use client"

import { BookingProvider } from "@/components/booking-context"
import { BookingModal } from "@/components/booking-modal"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export function SiteShell({ children }) {
  return (
    <BookingProvider>
      <Navigation />
      <main className="relative min-h-screen bg-background">{children}</main>
      <Footer />
      <BookingModal />
    </BookingProvider>
  )
}
