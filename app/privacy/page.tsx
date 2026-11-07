import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | EnriPeak",
  description: "How EnriPeak collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-32 text-black sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-black"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <h1 className="text-3xl font-extrabold sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: November 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-gray-800 sm:text-base">
            {/* 1 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">1. Who We Are</h2>
              <p>
                EnriPeak is a digital solutions studio offering web development and AI-driven
                services. This policy explains how we collect and use information when you visit
                our website or work with us.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">2. Information We Collect</h2>
              <p>
                We may collect the following information:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Contact details</strong> you provide voluntarily (name, email address,
                  phone number) when you fill out a form or book a call.
                </li>
                <li>
                  <strong>Business information</strong> shared during discussions or project
                  onboarding.
                </li>
                <li>
                  <strong>Usage data</strong> such as browser type, pages visited, and referring
                  URL — collected via cookies or analytics tools to improve our website.
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">3. How We Use Your Information</h2>
              <p>
                We use the information to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Respond to enquiries and provide requested services.</li>
                <li>Manage projects, contracts and payments.</li>
                <li>Improve our website, services and communication.</li>
                <li>Comply with legal obligations where required.</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">4. Sharing Your Information</h2>
              <p>
                We do not sell or rent your personal information. We may share data with trusted
                service providers (such as hosting, email or analytics providers) strictly for the
                purpose of running our business, and only under appropriate confidentiality
                obligations.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">5. Cookies</h2>
              <p>
                Our website may use cookies and similar technologies to improve your experience.
                You can disable cookies in your browser settings if you prefer, though some parts
                of the site may not function as intended.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">6. Data Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect your data
                against unauthorised access, loss or misuse. No method of transmission or storage
                is 100% secure, so we cannot guarantee absolute security.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">7. Data Retention</h2>
              <p>
                We retain personal and project information only as long as needed for the purpose
                it was collected (e.g., active projects, legal requirements, or ongoing support)
                and delete or anonymise it when it is no longer required.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">8. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, or delete
                the personal data we hold about you, or to object to certain processing. To make a
                request, contact us using the details below.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for
                the privacy practices or content of those sites.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">10. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated date.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your data, please
                email{" "}
                <a
                  href="mailto:hello@enripeak.com"
                  className="font-semibold text-black underline underline-offset-2 hover:text-gray-600"
                >
                  info@enripeak.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}