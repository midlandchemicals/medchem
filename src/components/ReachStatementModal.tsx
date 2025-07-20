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

interface ReachStatementModalProps {
  children: React.ReactNode;
}

export function ReachStatementModal({ children }: ReachStatementModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            REACH & CLP Compliance Statement
          </DialogTitle>
          <DialogDescription>
            Midland Chemicals Ltd's commitment to REACH and CLP (GHS) compliance
            for chemical manufacturing and distribution.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-6 text-sm overflow-scroll hide-scrollbar max-h-120 leading-relaxed pb-4">
            {/* REACH Overview */}
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="font-medium">
                  REACH IS THE EUROPEAN UNION (EU) REGULATION ON THE
                  REGISTRATION EVALUATION AND AUTHORISATION OF CHEMICALS. ITS
                  MAIN OBJECTIVE IS TO PROTECT HUMAN HEALTH AND THE ENVIRONMENT.
                </p>
              </div>

              <p>
                THE REGISTRATION PROCESS REQUIRES MANUFACTURERS AND IMPORTERS TO
                GENERATE SPECIFIC TEST DATA AND INFORMATION FOR ALL CHEMICALS
                PRODUCED OR IMPORTED INTO THE EU IN QUANTITIES THAT EXCEED 1
                TONNE PER ANNUM. REGISTRANTS MUST ALSO IDENTIFY APPROPRIATE RISK
                MANAGEMENT MEASURES AND COMMUNICATE THEM TO USERS.
              </p>

              <p>
                UNDER REACH, MANUFACTURERS AND ANY DISTRIBUTORS ARE UNDER
                OBLIGATION TO COMMUNICATE INFORMATION UP AND DOWN ANY SUPPLY
                CHAIN TO THEIR CUSTOMERS' SUPPLIERS AND PRINCIPALS.
              </p>
            </div>

            <Separator />

            {/* Midland Chemicals REACH Implementation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                MIDLAND CHEMICALS IMPLEMENTATION OF REACH
              </h3>

              <div className="space-y-4">
                <p>
                  MIDLAND CHEMICALS LTD PREPARED ITSELF FOR THE IMPLEMENTATION
                  OF THE NEW LEGISLATION BY AUDITING TO ENSURE THERE ARE NO
                  REACTIVE FORMULATIONS OR PRODUCTS THAT ARE SUBJECT TO REACH AS
                  REQUIRED BY ECHA (EUROPEAN CHEMICALS AGENCY) WITHIN OUR RANGE,
                  TO MAINTAIN STATUS AS A "DOWN-STREAM USER".
                </p>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <p>
                    WE ARE UPDATED THROUGH OUR PROFESSIONAL MEMBERSHIPS ON ANY
                    INFORMATION THAT EFFECTS OUR FORMULATIONS WHICH WILL ALLOW
                    US TO DEVELOP AND MODIFY PRODUCTS SO AS TO REMAIN REACH
                    DOWN-STREAM USERS DURING OUR MANUFACTURE.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <p className="font-medium text-blue-800">
                    WE ARE FULLY COMMITTED TO REACH AND ARE CONSTANTLY UPDATING
                    OUR OPERATIONS IN ORDER TO REMAIN FULLY COMPLIANT.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* CLP (GHS) Implementation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                MIDLAND CHEMICALS IMPLEMENTATION OF CLP (GHS)
              </h3>

              <div className="space-y-4">
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <p className="font-medium">
                    CLP (GHS) IS THE NEW CLASSIFICATION LABELLING AND PACKAGING
                    OF SUBSTANCES AND MIXTURES SYSTEM ADOPTED WITHIN THE EU OF
                    THE UNITED NATIONS (UN) GLOBALLY HARMONISED SYSTEM (GHS).
                  </p>
                </div>

                <p>
                  MIDLAND CHEMICALS IS COMPLETELY UP TO DATE WITH THIS NEW
                  LABELLING SYSTEM AND HAS BY STAGES INTRODUCING IT TO ALL OF
                  ITS PRODUCTS.
                </p>

                <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    Implementation Timeline
                  </h4>
                  <p>
                    WE BEGAN IN SEPTEMBER 2015 BY UPDATING ALL OF OUR MSDS AND
                    LABELS TO THE NEW CLP COMPLIANT FORMAT.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Key Compliance Points */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                Key Compliance Highlights
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    REACH Compliance
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Maintain "down-stream user" status</li>
                    <li>Regular auditing of formulations</li>
                    <li>ECHA compliance monitoring</li>
                    <li>Supply chain communication</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    CLP (GHS) Compliance
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Updated classification system</li>
                    <li>New labelling requirements</li>
                    <li>MSDS format updates</li>
                    <li>UN Globally Harmonised System</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* Contact Information */}
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">
                Regulatory Compliance Contact
              </h4>
              <div className="text-sm space-y-1">
                <p>For questions regarding REACH or CLP compliance:</p>
                <p>
                  <strong>Midland Chemicals Ltd</strong>
                  <br />
                  Atherstone, Warwickshire, United Kingdom
                  <br />
                  Company Registration: 02591575
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:sales@midlandchem.com"
                    className="text-primary hover:underline"
                  >
                    sales@midlandchem.com
                  </a>
                  <br />
                  Phone: 01827 722911
                </p>
              </div>
            </div>

            {/* Professional Memberships Note */}
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Note:</strong> Midland Chemicals Ltd maintains active
                professional memberships to stay updated on all regulatory
                changes affecting our formulations and manufacturing processes.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
