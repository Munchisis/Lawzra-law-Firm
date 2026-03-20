import { assets } from "../assets/assets";

const PrivacyPolicy = () => {
  const lastUpdated = "March 12, 2026";

  return (
    <>
      <div
        className="bg-cover bg-center h-64 flex flex-col items-center justify-center mb-10 bg-slate-800"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${assets.privacyPolicy})`,
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-6 py-20 text-slate-700 dark:text-slate-200 leading-relaxed">
        <header className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 italic">
            Effective Date: {lastUpdated}
          </p>
        </header>

        <section className="space-y-12">
          {/* 1. Introduction & Scope */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              1. Introduction & Scope
            </h2>
            <p className="mb-4">
              <strong>Lawzra LP</strong> ("the Firm", "we", "us", "our") is
              committed to protecting the privacy and security of your personal
              data. This Privacy Policy describes how we collect, use, disclose,
              and safeguard your information when you visit our website, utilize
              our legal services, or interact with us.
            </p>
            <p>
              This policy is drafted in strict accordance with the{" "}
              <strong>Nigeria Data Protection Act (NDPA) 2023</strong> and the{" "}
              <strong>Nigeria Data Protection Regulation (NDPR)</strong>. By
              using our services, you consent to the data practices described in
              this policy.
            </p>
          </div>

          {/* 2. Detailed Data Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              2. Categories of Personal Data Collected
            </h2>
            <p className="mb-4 text-sm font-semibold text-rose-600 dark:text-rose-400">
              We may collect, store, and use the following categories of
              personal information:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
              <li className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <strong className="block mb-1">Identity & Profile</strong>
                Names, date of birth, gender, marital status, and
                government-issued identification numbers.
              </li>
              <li className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <strong className="block mb-1">Contact Information</strong>
                Email addresses, telephone numbers, and billing/residential
                addresses.
              </li>
              <li className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <strong className="block mb-1">Financial Data</strong>
                Bank account details, payment card information, and tax
                identification numbers (TIN).
              </li>
              <li className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <strong className="block mb-1">Technical & Usage</strong>
                IP addresses, browser fingerprints, geolocation data, and
                website interaction logs.
              </li>
            </ul>
          </div>

          {/* 3. Lawful Basis for Processing */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              3. Lawful Basis for Processing
            </h2>
            <p className="mb-4">
              As a data controller, we process your personal data under the
              following legal grounds:
            </p>
            <div className="space-y-4 text-sm">
              <p>
                <strong>Consent:</strong> Where you have provided clear
                affirmative consent for us to process your data for a specific
                purpose (e.g., Marketing).
              </p>
              <p>
                <strong>Contractual Necessity:</strong> Processing is required
                to fulfill our legal obligations under an engagement letter or
                contract.
              </p>
              <p>
                <strong>Legal Obligation:</strong> Processing is necessary for
                us to comply with the law (e.g., Anti-Money Laundering (AML) and
                Know Your Customer (KYC) regulations).
              </p>
              <p>
                <strong>Legitimate Interests:</strong> Necessary for our
                business interests, such as network security and service
                improvement, provided these do not override your fundamental
                rights.
              </p>
            </div>
          </div>

          {/* 4. Disclosure of Data */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              4. Disclosure to Third Parties
            </h2>
            <p className="mb-4">
              We do not sell your data. We may, however, share your information
              with:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> IT hosting partners, payment
                processors, and analytics providers.
              </li>
              <li>
                <strong>Professional Advisors:</strong> Auditors, insurers, or
                co-counsel in multi-jurisdictional matters.
              </li>
              <li>
                <strong>Regulatory Authorities:</strong> Law enforcement or
                government bodies where required by Nigerian law.
              </li>
            </ul>
          </div>

          {/* 5. International Data Transfers */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              5. Cross-Border Data Transfers
            </h2>
            <p>
              Some of our external third parties (like cloud storage providers)
              are based outside Nigeria. We ensure that any international
              transfer of your personal data is conducted in compliance with the
              <strong> NDPA 2023</strong>, utilizing Standard Contractual
              Clauses or ensuring the destination country has adequate data
              protection laws.
            </p>
          </div>

          {/* 6. Data Security & Breaches */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              6. Data Security & Breach Management
            </h2>
            <p className="mb-4">
              We have implemented SSL encryption, multi-factor authentication
              (MFA), and secure internal protocols to protect your data.
            </p>
            <p>
              In the event of a suspected data breach, we have a response plan
              in place and will notify the{" "}
              <strong>Nigeria Data Protection Commission (NDPC)</strong> and
              affected individuals within 72 hours, where legally required.
            </p>
          </div>

          {/* 7. Automated Decision-Making */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              7. Automated Decision-Making
            </h2>
            <p>
              We do not use automated decision-making or profiling that produces
              legal effects concerning you or significantly affects you. All
              legal evaluations and client intakes involve human intervention.
            </p>
          </div>

          {/* 8. Your Legal Rights */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
              8. Your Rights as a Data Subject
            </h2>
            <p className="mb-4 text-sm italic">
              You are entitled to the following rights under Nigerian law:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm">
              <p>• Right to be informed of data collection.</p>
              <p>• Right to access your personal records.</p>
              <p>• Right to object to direct marketing.</p>
              <p>• Right to data portability.</p>
              <p>• Right to restrict processing.</p>
              <p>• Right to request erasure ("Right to be Forgotten").</p>
            </div>
          </div>

          {/* 9. Contact Our DPO */}
          <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-2xl border-l-8 border-rose-500">
            <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">
              Contact Our Data Protection Officer (DPO)
            </h2>
            <p className="text-sm mb-4">
              If you have questions about this policy or wish to exercise your
              rights, please contact our DPO:
            </p>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Email:</strong>
                <a
                  href="mailto:dpo@lawzra.com"
                  className="text-rose-500 hover:underline"
                >
                  privacy@lawzra.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>
                <a href="tel:+2348037333930" className="hover:underline">
                  +234 803 733 3930
                </a>
              </p>
              <p>
                <strong>Office:</strong> No 23 Obalande, Lekki Phase 1, Lagos
                State, Nigeria.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
