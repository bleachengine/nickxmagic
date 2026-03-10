import { SiteShell } from "@/components/site-shell"
import { PaymentsSection } from "@/components/payments-section"

export const metadata = {
  title: "Payments | NickXMagic",
  description:
    "Securely complete your booking payment for NickXMagic using the QR payment option.",
}

export default function PaymentsPage() {
  return (
    <SiteShell>
      <div className="pt-20 md:pt-24">
        <PaymentsSection />
      </div>
    </SiteShell>
  )
}
