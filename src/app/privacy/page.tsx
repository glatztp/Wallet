import { Accordion } from "@/components/accordion";
import { Navbar } from "@/components/navbar";

export default function Privacy() {
  return (
    <div className="bg-[#2B2B2B]">
      <Navbar />
      <div className="min-h-[88.2vh] flex justify-center items-center px-56">
        <div className="bg-[#333333] p-8 rounded-lg w-auto min-w-lg max-h-[vh] overflow-y-auto">
          <div className="text-white text-2xl mb-4 font-semibold">Privacy Policy</div>

          <div className="space-y-5">
            <Accordion title="Data Collection">
              <p>
                We collect personal information such as your name, email address, and other contact details when you register for our service. We may also collect information about your usage of our services to improve user experience.
              </p>
            </Accordion>
            <Accordion title="How We Use Your Data">
              <p>
                The information we collect is used to provide, improve, and personalize our services. We may use your data for marketing, sending you updates, or offering promotions and new features.
              </p>
            </Accordion>
            <Accordion title="Data Sharing">
              <p>
                We do not share your personal information with third parties without your consent, except where required by law or for providing our services. We may share data with trusted partners to help us analyze and improve our platform.
              </p>
            </Accordion>
            <Accordion title="Cookies">
              <p>
                We use cookies and similar technologies to enhance your experience on our website, analyze trends, and gather information about site traffic. You can manage your cookie preferences through your browser settings.
              </p>
            </Accordion>
            <Accordion title="Security">
              <p>
                We implement various security measures to protect your personal information from unauthorized access or disclosure. However, no data transmission over the internet or electronic storage is 100% secure.
              </p>
            </Accordion>
            <Accordion title="Changes to This Privacy Policy">
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically.
              </p>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
