import type { Metadata } from "next";
import { Mail, Clock, MapPin, Phone, CalendarCheck } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa6";
import ContactForm from "@/components/forms/ContactForm";
import DiscoveryButton from "@/components/DiscoveryButton";

export const metadata: Metadata = {
  title: "Contact | EnriPeak",
  description: "Tell us about your project. Web development and AI solutions by EnriPeak.",
};

// ✏️ apni real details yahan likho (jo nahi chahiye woh line delete kar do)
const DETAILS = [
  { icon: Mail, label: "Email", value: "info@enripeak.com", href: "mailto:info@enripeak.com" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+92 300 0000000", href: "https://wa.me/923000000000" },
  { icon: MapPin, label: "Location", value: "Your City, Pakistan · Serving clients worldwide" },
  { icon: Clock, label: "Working hours", value: "Mon – Sat, 10:00 AM – 7:00 PM (PKT)" },
];

// ✏️ apne profile links
const SOCIALS = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/company/enripeak" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/enripeak" },
  { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/enripeak" },
  { icon: FaTiktok, label: "TikTok", href: "https://www.tiktok.com/@enripeak" },
];

export default function ContactPage() {
  return (
    <main className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-36">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        {/* ---------- left: details ---------- */}
        <div>
          <h1 className="font-heading text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight">
            Let's build your <em className="font-serif font-normal italic text-gradient">Peak.</em>
          </h1>
          <p className="mt-5 max-w-md text-white/65">
            Share a few details and we'll get back to you with next steps, ideas and a clear plan. Usually within 24 hours.
          </p>

          <ul className="mt-10 space-y-5">
            {DETAILS.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-brand-cyan/10 text-brand-cyan">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-semibold transition hover:text-brand-cyan">{value}</a>
                  ) : (
                    <p className="font-semibold">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <CalendarCheck className="text-[#FFBF00]" size={22} />
              <p className="text-sm text-white/70">Prefer to talk? Book a free call.</p>
            </div>
            <DiscoveryButton className="btn-amber shrink-0 px-4 py-2.5 text-xs sm:text-sm">Book a Call</DiscoveryButton>
          </div>

          <div className="mt-10">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">Follow us</p>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-white/70 transition duration-300 hover:-translate-y-1 hover:border-brand-cyan/60 hover:bg-brand-cyan/10 hover:text-brand-cyan"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- right: form ---------- */}
        <ContactForm />
      </div>
    </main>
  );
}