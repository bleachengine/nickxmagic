"use client"

import { createContext, useContext, useMemo, useState } from "react"

const BookingContext = createContext(null)

export function BookingProvider({ children }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const openBookingModal = () => setIsBookingOpen(true)
  const closeBookingModal = () => setIsBookingOpen(false)

  const bookingContextValue = useMemo(
    () => ({ isBookingOpen, openBookingModal, closeBookingModal }),
    [isBookingOpen]
  )

  return (
    <BookingContext.Provider value={bookingContextValue}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const bookingContext = useContext(BookingContext)

  if (!bookingContext) {
    throw new Error("useBooking must be used inside BookingProvider")
  }

  return bookingContext
}
