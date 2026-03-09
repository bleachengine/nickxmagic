import Link from "next/link"
import { Instagram, Youtube, Facebook } from "lucide-react"

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/shows", label: "Shows" },
  { href: "/gallery", label: "Gallery" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        <Link href="/" className="font-serif text-xl tracking-wide text-primary">
          NickXmagic
        </Link>

        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((footerLink) => (
            <Link
              key={footerLink.href}
              href={footerLink.href}
              className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              {footerLink.label}
            </Link>
          ))}
        </nav>

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
