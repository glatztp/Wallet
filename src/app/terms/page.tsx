"use client";
import { useState } from "react";
import { Accordion } from "@/components/accordion";
import { Navbar } from "@/components/navbar";

export default function TermsOfUse() {
  const [showToast, setShowToast] = useState(false);

  const handleAcceptTerms = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); 
  };

  return (
    <div className="bg-[#2B2B2B]">
      <Navbar />
      <div className="min-h-screen flex justify-center items-center px-16 pb-20">
        <div className="bg-[#333333] p-8 rounded-lg w-full max-w-4xl overflow-hidden">
          <div className="text-white text-2xl mb-4 font-semibold">
            Terms of Use
          </div>

          <div className="space-y-5">
            <Accordion title="1. Introduction">
              <p>
                Welcome to Wallet! These Terms of Use govern your use of our
                services. By accessing or using our platform, you agree to
                comply with these terms. If you do not agree with any part of
                these terms, please refrain from using our services.
              </p>
            </Accordion>

            <Accordion title="2. Acceptance of Terms">
              <p>
                By using our website and services, you acknowledge that you have
                read, understood, and agree to be bound by these Terms of Use.
                We may modify or update these terms at any time, and the latest
                version will be posted on this page.
              </p>
            </Accordion>

            <Accordion title="3. User Account">
              <p>
                To use certain features, you may be required to create an
                account. You agree to provide accurate and complete information
                when creating your account, and to maintain the confidentiality
                of your login credentials. You are responsible for all activity
                that occurs under your account.
              </p>
            </Accordion>

            <Accordion title="4. Privacy Policy">
              <p>
                Your privacy is important to us. Please refer to our Privacy
                Policy for detailed information on how we collect, use, and
                protect your personal data. By using our services, you consent
                to the collection and use of your information as described in
                our Privacy Policy.
              </p>
            </Accordion>

            <Accordion title="5. Usage Restrictions">
              <p>
                You agree not to use our services for any unlawful purpose or to
                engage in any activity that may harm our platform or other
                users. Prohibited activities include, but are not limited to,
                hacking, fraud, or distributing harmful software.
              </p>
            </Accordion>

            <Accordion title="6. Termination of Account">
              <p>
                We reserve the right to suspend or terminate your account at our
                discretion, without prior notice, if you violate these Terms of
                Use. Upon termination, your access to the platform will be
                revoked, and you must immediately stop using our services.
              </p>
            </Accordion>

            <Accordion title="7. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, we disclaim any
                liability for damages arising from the use of our platform. We
                are not responsible for any indirect, incidental, special, or
                consequential damages related to your use of our services.
              </p>
            </Accordion>

            <Accordion title="8. Indemnification">
              <p>
                You agree to indemnify and hold harmless Wallet, its affiliates,
                officers, employees, and partners from any claims, damages, or
                expenses arising from your use of the platform, your violation
                of these Terms of Use, or your infringement of any rights of
                another person.
              </p>
            </Accordion>

            <Accordion title="9. Governing Law">
              <p>
                These Terms of Use will be governed by and construed in
                accordance with the laws of the jurisdiction where Wallet
                operates, without regard to its conflict of law principles. Any
                disputes arising from these terms will be resolved in the courts
                located in the jurisdiction of our headquarters.
              </p>
            </Accordion>

            <Accordion title="10. Contact Us">
              <p>
                If you have any questions regarding these Terms of Use or any
                other policies, please contact us at support@wallet.com. We are
                happy to assist you.
              </p>
            </Accordion>

            <div className="flex mt-4 items-center justify-center">
              <button
                onClick={handleAcceptTerms}
                className="bg-[#BFAFF2] text-gray py-2 px-8 rounded-lg hover:bg-[#b29cfb] w-50"
              >
                Accept Terms of Use
              </button>
            </div>

            {showToast && (
              <div className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg">
                Terms accepted successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
