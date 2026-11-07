import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions | EnriPeak",
  description: "Read the terms and conditions for working with EnriPeak.",
};

export default function TermsPage() {
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

          <h1 className="text-3xl font-extrabold sm:text-4xl">Terms & Conditions</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: November 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-gray-800 sm:text-base">
            {/* 1 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">1. Services</h2>
              <p>
                EnriPeak provides web development and AI-driven digital solutions. All work is
                carried out according to the scope agreed in writing (proposal, statement of
                work, or email confirmation).
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">2. Milestones & Payments</h2>
              <p>
                Projects are split into clearly defined milestones (e.g., discovery, design,
                development, testing, launch). Payment is typically requested at the start of
                each milestone or per the agreed schedule. We do not begin the next stage until
                the previous one is approved and paid.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">3. Refund Policy</h2>
              <p>
                If a client is unhappy with the progress of a project and no meaningful work has
                been delivered toward the current milestone, we will review the situation honestly
                and, where appropriate, refund the amount paid for that milestone. Refunds are
                not issued for work that has already been completed, reviewed, and approved by
                the client.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">4. Client Responsibilities</h2>
              <p>
                Clients agree to provide timely feedback, content, access, and approvals required
                for the project to progress. Delays caused by missing client input may affect the
                timeline.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">5. Code Ownership</h2>
              <p>
                Upon full and final payment, ownership of the custom code written for the project
                is transferred to the client. Third-party libraries, frameworks, and open-source
                tools remain under their respective licenses. We may also retain a copy of the code
                for reference and portfolio purposes unless agreed otherwise.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">6. Confidentiality</h2>
              <p>
                Both parties agree to keep sensitive business information shared during the
                project confidential and to use it only for the purpose of delivering the work.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">7. Portfolio Rights</h2>
              <p>
                Unless explicitly agreed otherwise, EnriPeak may showcase the completed project
                (screenshots, description, results) in its portfolio and marketing materials.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">8. Changes & Revisions</h2>
              <p>
                Reasonable revisions within the original scope are included. Additional features,
                scope changes, or major redesigns may require a new estimate and timeline.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">9. Limitation of Liability</h2>
              <p>
                EnriPeak is not liable for indirect or consequential losses arising from the use
                of delivered software. Our total liability for any claim is limited to the amount
                paid for the specific project.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">10. Governing Law</h2>
              <p>
                These terms are governed by the laws applicable at the location of EnriPeak&apos;s
                registered operations, unless a separate written agreement states otherwise.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="mb-3 text-xl font-bold text-black">Questions?</h2>
              <p>
                If you have questions about these terms, please contact us at{" "}
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