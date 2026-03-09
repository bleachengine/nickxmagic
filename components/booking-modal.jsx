"use client"

import { useState } from "react"
import { X, Send, Mail, Phone, Instagram } from "lucide-react"
import { useBooking } from "@/components/booking-context"

const initialFormValues = {
  name: "",
  email: "",
  eventType: "",
  date: "",
  message: "",
}

export function BookingModal() {
  const { isBookingOpen, closeBookingModal } = useBooking()
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleFieldChange = (fieldName, fieldValue) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldName]: fieldValue,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    closeBookingModal()
    setFormValues(initialFormValues)
  }

  if (!isBookingOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm md:p-6">
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-border bg-background p-6 md:p-8">
        <button
          onClick={closeBookingModal}
          className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Close booking form"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl font-bold md:text-5xl">
            <span className="text-foreground">Book Your </span>
            <span className="text-primary">Experience</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Ready to make your next event unforgettable? Fill out the form below
            and NickXmagic will be in touch within 24 hours.
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formValues.name}
                    onChange={(event) =>
                      handleFieldChange("name", event.target.value)
                    }
                    className="w-full border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formValues.email}
                    onChange={(event) =>
                      handleFieldChange("email", event.target.value)
                    }
                    className="w-full border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex-1">
                  <label
                    htmlFor="eventType"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    value={formValues.eventType}
                    onChange={(event) =>
                      handleFieldChange("eventType", event.target.value)
                    }
                    className="w-full border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none"
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
                    <option value="private" className="bg-card">
                      Private Party
                    </option>
                    <option value="theatre" className="bg-card">
                      Theatre / Stage Show
                    </option>
                    <option value="other" className="bg-card">
                      Other
                    </option>
                  </select>
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="date"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Event Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={formValues.date}
                    onChange={(event) =>
                      handleFieldChange("date", event.target.value)
                    }
                    className="w-full border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Tell Us About Your Event
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formValues.message}
                  onChange={(event) =>
                    handleFieldChange("message", event.target.value)
                  }
                  className="w-full resize-none border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  placeholder="Tell us about your event, the number of guests, and any special requests..."
                />
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center gap-2 border border-primary bg-primary px-8 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                <span>Send Inquiry</span>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          <div className="lg:w-80">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
                  Direct Contact
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:book@nickxmagic.com"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">book@nickxmagic.com</span>
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">+1 (234) 567-890</span>
                  </a>
                  <a
                    href="https://instagram.com/nickxmagic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Instagram className="h-4 w-4 text-primary" />
                    <span className="text-sm">@nickxmagic</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
                  Response Time
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  All inquiries receive a personal response within 24 hours. For
                  urgent bookings, please call directly.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
                  Availability
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Currently booking events for 2026 and 2027. Early booking is
                  recommended for peak season dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
