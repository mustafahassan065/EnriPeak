import { MessageCircle } from "lucide-react";

// TODO: replace with your real WhatsApp number (country code, digits only)
const WHATSAPP_NUMBER = "923000000000";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20EnriPeak%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand-cyan text-ink shadow-[0_10px_40px_-8px_rgba(0,255,255,.6)] transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-brand-cyan" style={{ animation: "ping-ring 2.4s ease-out infinite" }} />
      <MessageCircle className="relative" size={26} />
    </a>
  );
}