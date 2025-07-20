import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import React from "react";

interface PrivacyPolicyModalProps {
  children: React.ReactNode;
}

export function PrivacyPolicyModal({ children }: PrivacyPolicyModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Privacy Policy - Midland Chemicals Ltd
          </DialogTitle>
          <DialogDescription className="">
            This privacy notice informs you about what personal information we
            collect and how we use, protect, and share that information in
            compliance with GDPR regulations.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full  pr-4">
          <div className="space-y-6 overflow-scroll hide-scrollbar max-h-120 w-full  text-sm leading-relaxed">
            {/* Introduction */}
            <div className="space-y-4">
              <p>
                The purpose of this notice is to inform you about what personal
                information we collect whether this is through our website or
                other interaction with Midland Chemicals Ltd. We will also
                define how we use the information, whether the information is
                disclosed and the ways in which we protect your privacy.
              </p>
              <p>
                We want you to feel secure when interacting with Midland
                Chemicals Ltd and are committed to respecting your privacy and
                complying with data privacy regulations, such as the General
                Data Protection Regulation (GDPR) (Regulation (EU) 2016/679).
              </p>
            </div>

            <Separator />

            {/* Contents */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                Contents of this Notice:
              </h3>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Your Data and the Midland Chemicals Ltd Website</li>
                <li>Midland Chemicals Ltd's Use of Social Media</li>
                <li>Midland Chemicals Ltd's Business Development Process</li>
                <li>General Privacy Questions</li>
              </ol>
            </div>

            <Separator />

            {/* Section 1 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                1. Your Data and Midland Chemicals Ltd Website
              </h3>
              <p>
                Whenever you visit this website, you consent to the collection,
                use and disclosure of that information in accordance with this
                privacy notice. Non Midland Chemicals Ltd websites linked to or
                from our website are not covered by this privacy notice and we
                do not accept any responsibility or liability for those
                websites.
              </p>

              <h4 className="font-semibold">
                How does Midland Chemicals Ltd collect my personal data through
                the website?
              </h4>
              <p>
                There are two ways which Midland Chemicals Ltd website collects
                your information:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Cookies and Log Files</li>
                <li>Forms</li>
              </ul>

              <h4 className="font-semibold">
                How do we use Cookies and Log Files?
              </h4>
              <p>
                These technologies enable us to identify what areas of the
                website you have visited and how you got there. We use the
                aggregated information from website visitors, for example
                aggregated information on the pages visited, to help us improve
                the design, performance and delivery of the website to provide a
                better user experience.
              </p>
              <p>
                Midland Chemicals Ltd stores personal cookie information for 24
                months.
              </p>

              <p>We use many different cookies on our website:</p>

              <div className="ml-4 space-y-3">
                <div>
                  <h5 className="font-medium">1. Session Cookies</h5>
                  <p>
                    We use session cookies to ensure that you are recognised
                    when you move from page to page within the website and that
                    any information you have entered is remembered.
                  </p>
                </div>

                <div>
                  <h5 className="font-medium">2. Persistent Cookies</h5>
                  <p>
                    We use persistent cookies for website analytics and to
                    improve website performance.
                  </p>
                </div>

                <div>
                  <h5 className="font-medium">3. Third Party Cookies</h5>
                  <p>
                    We may use suppliers who also set cookies on our website on
                    our behalf to deliver the services that they are providing.
                  </p>
                  <p>
                    For example, Google Analytics collect anonymised data - more
                    information can be found at:{" "}
                    <a
                      href="http://www.google.co.uk/intl/en/analytics/privacyoverview.html"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Analytics Privacy Overview
                    </a>{" "}
                    and{" "}
                    <a
                      href="http://code.google.com/apis/analytics/docs/concepts/gaconceptscookies.html"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Analytics Cookies
                    </a>
                  </p>
                </div>
              </div>

              <h4 className="font-semibold">How to Control Cookies</h4>
              <p>
                Most browsers are set to automatically accept cookies. If you do
                not wish your progress through the website to be tracked then
                all recent versions of popular web browsers have the option to
                not accept cookies. However, by choosing not to accept cookies,
                some aspects of the website performance and user experience may
                be affected.
              </p>

              <h4 className="font-semibold">
                How is my data collected through website forms?
              </h4>
              <p>
                We use forms on the website to enable you to easily contact
                Midland Chemicals Ltd about services, solutions and products
                that we can provide you with.
              </p>
              <p>
                The information collected via forms enables us to understand
                what website users are interested in, which we use to improve
                the services, solutions, products, resources and events we
                provide you.
              </p>
            </div>

            <Separator />

            {/* Section 2 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                2. Midland Chemicals Ltd's Use of Social Media
              </h3>
              <p>
                Midland Chemicals Ltd uses a wide range of social media channels
                and the processing of data within the channels is in line with
                the privacy policies and user agreements of each individual
                channel, as well as the relevant data protection regulations.
              </p>
            </div>

            <Separator />

            {/* Section 3 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                3. Midland Chemicals Ltd's Business Development Process
              </h3>

              <h4 className="font-semibold">
                Working with our Suppliers, Customers and Prospective Customers
              </h4>
              <p>
                To help deliver customers our wide range of products, services
                and solutions, Midland Chemicals Ltd maintains a customer
                relationship management (CRM) system. Any personal information
                stored in these systems is managed in line with contractual
                agreements, our information security policy and processed on the
                legal basis of legitimate interest.
              </p>

              <h4 className="font-semibold">Marketing</h4>
              <p>
                We want to contact you with information about our products,
                services or solutions, as well as industry or regulatory
                information that you find relevant and useful. To manage this
                effectively we use consent as the lawful means for processing
                your personal data for marketing purposes. When requesting
                information from us, such as downloading technical information
                or through interaction with one of our employees at an
                exhibition or conference, we will collect your consent to do so
                and manage this through our secure systems.
              </p>
              <p>
                You are entitled to know what information we hold about you and
                for this to be corrected if it is inaccurate.
              </p>
            </div>

            <Separator />

            {/* Section 4 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                4. General Privacy Questions
              </h3>

              <h4 className="font-semibold">
                Can I access my personal information that Midland Chemicals Ltd
                is storing?
              </h4>
              <p>
                You are entitled to know whether we hold information about you
                and, if we do, to have access to that information and require it
                to be corrected if it is inaccurate. In the next section you can
                find the details of how to contact us about your personal data.
              </p>

              <h4 className="font-semibold">
                How do I contact Midland Chemicals Ltd if I have a personal data
                question?
              </h4>
              <p>
                You can do this by addressing requests to:{" "}
                <a
                  href="mailto:dataprotectionofficer@midlandchem.com"
                  className="text-primary hover:underline"
                >
                  dataprotectionofficer@midlandchem.com
                </a>
              </p>

              <h4 className="font-semibold">
                How does Midland Chemicals Ltd store my data?
              </h4>
              <p>
                We take appropriate steps to maintain the security of your data,
                these are set out in our information security policy.
              </p>

              <h4 className="font-semibold">
                What is the legal basis for the processing of my data?
              </h4>
              <p>
                We want to enable you to have a clear understanding of the data
                we hold about you, how it is used and the approach we take to
                processing your data. Below details two approaches Midland
                Chemicals Ltd uses to process data:
              </p>

              <div className="ml-4 space-y-3">
                <div>
                  <h5 className="font-medium">Opt-in Consent:</h5>
                  <p>
                    To keep you updated with information on our products,
                    solutions, services, research and news we collect your
                    consent at the point at which we collect your information.
                    Your consent and the date consent is provided is stored on
                    our secure systems to help us maintain an accurate record of
                    how we collected and the reason for storing your
                    information.
                  </p>
                  <p>
                    You have the right to withdraw your consent to the use of
                    your data at any time. To contact Midland Chemicals Ltd for
                    this purpose, please email{" "}
                    <a
                      href="mailto:gdpr@midlandchem.com"
                      className="text-primary hover:underline"
                    >
                      gdpr@midlandchem.com
                    </a>
                  </p>
                </div>

                <div>
                  <h5 className="font-medium">Legitimate Interest:</h5>
                  <p>
                    There are a small number of instances where we process data
                    under the lawful basis known as 'legitimate interest'. When
                    we adopt this approach, we carry out a legitimate interest
                    test in accordance with the GDPR regulations to enable us to
                    understand if it is an appropriate method.
                  </p>
                </div>
              </div>

              <h4 className="font-semibold">
                What type/category of data does Midland Chemicals Ltd store?
              </h4>
              <p>
                As defined through this privacy notice, Midland Chemicals Ltd
                collects and manages 'personal data', meaning any information
                relating to an identifiable person who can be directly or
                indirectly identified by reference to an identifier.
              </p>
              <p>
                Midland Chemicals Ltd also collects a limited amount of
                sensitive personal data also known as 'special categories of
                personal data' and will collect your consent when doing so.
              </p>

              <h4 className="font-semibold">
                Will Midland Chemicals Ltd share my information?
              </h4>
              <p>
                Midland Chemicals Ltd does not sell individuals' information. We
                will share it only with our authorised data processors, who must
                always act on our instructions as the data controller under
                relevant data protection laws including GDPR.
              </p>
            </div>

            <Separator />

            {/* Changes to Privacy Notice */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Changes to this Privacy Notice
              </h3>
              <p>
                We may change this notice from time to time and any changes will
                be posted to this page.
              </p>
            </div>

            {/* Company Info */}
            <div className="bg-gray-50 p-4 rounded-lg mt-6">
              <h4 className="font-semibold mb-2">Contact Information</h4>
              <div className="text-sm space-y-1">
                <p>
                  <strong>Midland Chemicals Ltd</strong>
                </p>
                <p>Atherstone, Warwickshire, United Kingdom</p>
                <p>Company Registration: 02591575</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:sales@midlandchem.com"
                    className="text-primary hover:underline"
                  >
                    sales@midlandchem.com
                  </a>
                </p>
                <p>Phone: 01827 722911</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
