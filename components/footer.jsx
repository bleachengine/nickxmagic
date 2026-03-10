"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Facebook } from "lucide-react"
import { useBooking } from "@/components/booking-context"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About Nick" },
  { href: "/gallery", label: "Gallery" },
  { href: "/performances", label: "Performances" },
  { href: "/payments", label: "Payments" },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
]

export function Footer() {
  const { openBookingModal } = useBooking()

  return (
    <footer className="border-t border-border py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-y-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:justify-items-center">
          <div className="order-2 flex flex-col items-start text-left md:order-1 md:items-start md:justify-self-center">
            <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-primary sm:mb-3 sm:text-[10px] sm:tracking-[0.24em]">
              Quick Links
            </p>
            <div className="flex w-full flex-col items-start gap-y-2 text-left md:grid md:max-w-[320px] md:grid-cols-2 md:gap-x-8 md:gap-y-2">
              {quickLinks.map((quickLink) => (
                <Link
                  key={quickLink.href}
                  href={quickLink.href}
                  className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary sm:text-[11px] sm:tracking-[0.18em]"
                >
                  {quickLink.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="order-1 flex items-center justify-center md:order-2 md:col-span-1 md:justify-self-center">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="logos/logonxm.webp"
                width={144}
                height={144}
                alt="NickXmagic logo"
                className="h-auto w-[104px] sm:w-[128px] md:w-[144px]"
              />
            </Link>
          </div>

          <div className="order-3 flex flex-col items-start text-left md:order-3 md:items-start md:justify-self-center">
            <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-primary sm:mb-3 sm:text-[10px] sm:tracking-[0.24em]">
              More
            </p>
            <div className="flex flex-col items-start gap-2.5 text-left">
              <Link
                href="/terms-of-use"
                className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary sm:text-[11px] sm:tracking-[0.18em]"
              >
                Terms of Use
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary sm:text-[11px] sm:tracking-[0.18em]"
              >
                Privacy Policy
              </Link>
              <button
                onClick={openBookingModal}
                className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary sm:text-[11px] sm:tracking-[0.18em]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="mt-1 flex items-center justify-center gap-4 sm:mt-8 md:mt-8">
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.label}
              href={socialLink.href}
              aria-label={socialLink.label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <socialLink.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl border-t border-border px-4 pt-5 sm:px-6 sm:pt-6">
        <div className="flex flex-col items-center gap-2.5 text-center md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} NickXmagic. All rights reserved.`}
          </p>
          <p className="text-xs text-muted-foreground">
            This website is built and managed by{" "}
            <a
              href="https://www.mverse360.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-foreground"
            >
              Mverse360
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
