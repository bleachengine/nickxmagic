"use client"

import { useState } from "react"
import { X, Send, Mail, Phone } from "lucide-react"
import { useBooking } from "@/components/booking-context"

const initialFormValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  eventType: "",
  eventDate: "",
}

export function BookingModal() {
  const { isBookingOpen, closeBookingModal } = useBooking()
  const [formValues, setFormValues] = useState(initialFormValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState("")

  const handleFieldChange = (fieldName, fieldValue) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldName]: fieldValue,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmissionMessage("")

    try {
      const response = await fetch("https://formspree.io/f/xjgaygva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: formValues.fullName,
          email: formValues.email,
          phoneNumber: formValues.phoneNumber,
          eventType: formValues.eventType,
          eventDate: formValues.eventDate,
        }),
      })

      if (!response.ok) {
        throw new Error("Form submission failed")
      }

      setSubmissionMessage("Response submitted. Thank you for your response.")
      closeBookingModal()
      setFormValues(initialFormValues)
    } catch {
      setSubmissionMessage("Unable to send inquiry right now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isBookingOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-3 backdrop-blur-sm md:p-5">
      <div className="relative max-h-[84vh] w-full max-w-[900px] overflow-y-auto border border-border bg-background p-4 sm:p-5 md:p-4">
        <button
          onClick={closeBookingModal}
          className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Close booking form"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-5 text-center sm:mb-6">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl md:text-[25px]">
            <span className="text-foreground">Book Your </span>
            <span className="text-primary">Experience</span>
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-sm">
            Ready to make your next event unforgettable? Fill out the form below.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,480px)_220px] lg:items-center lg:justify-center lg:gap-14">
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-[480px] flex-col gap-3 lg:mx-0">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formValues.fullName}
                  onChange={(event) =>
                    handleFieldChange("fullName", event.target.value)
                  }
                  className="w-full border border-border bg-card px-4 py-2 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formValues.email}
                    onChange={(event) =>
                      handleFieldChange("email", event.target.value)
                    }
                    className="w-full border border-border bg-card px-4 py-2 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    value={formValues.phoneNumber}
                    onChange={(event) =>
                      handleFieldChange("phoneNumber", event.target.value)
                    }
                    className="w-full border border-border bg-card px-4 py-2 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    placeholder="9876543210"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="eventType"
                    className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formValues.eventType}
                    onChange={(event) =>
                      handleFieldChange("eventType", event.target.value)
                    }
                    className="w-full border border-border bg-card px-4 py-2 text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="" className="bg-card text-muted-foreground">
                      Select an event type
                    </option>
                    <option value="corporate" className="bg-card">
                      Corporate Event
                    </option>
                    <option value="wedding" className="bg-card">
                      Wedding
                    </option>
                    <option value="birthday" className="bg-card">
                      Birthday
                    </option>
                    <option value="destination-wedding" className="bg-card">
                      Destination Wedding
                    </option>
                    <option value="private-party" className="bg-card">
                      Private Party
                    </option>
                    <option value="stage-show" className="bg-card">
                      Stage Show
                    </option>
                    <option value="other" className="bg-card">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="eventDate"
                    className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    Event Date
                  </label>
                  <input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    required
                    value={formValues.eventDate}
                    onChange={(event) =>
                      handleFieldChange("eventDate", event.target.value)
                    }
                    className="w-full border border-border bg-card px-4 py-2 text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-2 border border-primary bg-primary px-8 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                <span>{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {submissionMessage ? (
                <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
                  {submissionMessage}
                </p>
              ) : null}

              <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
                All inquiries receive a personal response within 24 hours.
                <br />
                For urgent bookings, please call directly.
              </p>
            </form>
          </div>

          <div className="lg:w-[220px] lg:self-center">
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
                  Direct Contact
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:magic.nickvats@gmail.com"
                    className="flex items-center gap-3 break-all text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">magic.nickvats@gmail.com</span>
                  </a>
                  <a
                    href="tel:+919999596739"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">+91 9999596739</span>
                  </a>
                  <a
                    href="tel:+919015240483"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">+91 9015240483</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
