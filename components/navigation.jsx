"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, WandSparkles } from "lucide-react"
import { useBooking } from "@/components/booking-context"
import Image from "next/image"

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Nick" },
  { href: "/performances", label: "Performances" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
]

export function Navigation() {
  const currentPath = usePathname()
  const { openBookingModal } = useBooking()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${hasScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl tracking-wide text-primary">
          {/* NickXmagic <WandSparkles className="h-6 w-6 inline" /> */}
           <Image src="/logonxm.webp" width={80}  height={80}  alt="NickXmagic logo" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {pageLinks.map((pageLink) => (
            <Link
              key={pageLink.href}
              href={pageLink.href}
              className={`text-sm uppercase tracking-widest transition-colors duration-300 hover:text-primary ${currentPath === pageLink.href
                  ? "text-primary"
                  : "text-muted-foreground"
                }`}
            >
              {pageLink.label}
            </Link>
          ))}

          <button
            onClick={openBookingModal}
            className="border border-primary px-5 py-2 text-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Book Now
          </button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-foreground md:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-4 bg-background/95 px-6 pb-6 backdrop-blur-md">
          {pageLinks.map((pageLink) => (
            <Link
              key={pageLink.href}
              href={pageLink.href}
              onClick={closeMobileMenu}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-primary ${currentPath === pageLink.href
                  ? "text-primary"
                  : "text-muted-foreground"
                }`}
            >
              {pageLink.label}
            </Link>
          ))}

          <button
            onClick={() => {
              closeMobileMenu()
              openBookingModal()
            }}
            className="border border-primary px-5 py-2 text-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  )
}
