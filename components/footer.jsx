import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Facebook, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center md:flex-row md:items-center md:justify-between md:text-center">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logonxm.webp"
            width={84}
            height={84}
            alt="NickXmagic logo"
          />
        </Link>

        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-[10px] uppercase tracking-[0.24em] text-primary">
            Contact Us
          </p>
          <a
            href="tel:+919999596739"
            className="flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>+91 9999596739</span>
          </a>
          <a
            href="tel:+919015240483"
            className="flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>+91 9015240483</span>
          </a>
          <a
            href="mailto:magic.nickvats@gmail.com"
            className="flex items-center gap-2 break-all text-[13px] text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4 text-primary" />
            <span>magic.nickvats@gmail.com</span>
          </a>
        </div>

        <div className="flex gap-4">
          {[
            { icon: Instagram, label: "Instagram", href: "#" },
            { icon: Youtube, label: "YouTube", href: "#" },
            { icon: Facebook, label: "Facebook", href: "#" },
          ].map((socialLink) => (
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

      <div className="mx-auto mt-8 max-w-7xl border-t border-border px-6 pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          {`\u00A9 ${new Date().getFullYear()} NickXmagic. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}
