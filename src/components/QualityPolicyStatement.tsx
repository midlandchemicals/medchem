import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

import React from "react";

interface QualityPolicyProps {
  children: React.ReactNode;
}

export function QualityPolicyStatement({ children }: QualityPolicyProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl h-[65vh] flex flex-col">
        <ScrollArea className="flex-1 pr-4">
          <h2 className="text-2xl font-bold text-primary">
            Quality Policy Statement
          </h2>
          <div className="space-y-6 text-sm overflow-scroll hide-scrollbar max-h-120 leading-relaxed pb-4">
            {/* REACH Overview */}
            <div className="bg-white text-gray-800 p-8 max-w-4xl mx-auto rounded-lg shadow space-y-6 leading-relaxed text-base">
              <p>
                At <strong>Midland Chemicals</strong>, quality is of the utmost
                importance.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Scope:
                </h3>
                <p>
                  This Company Policy statement applies to all aspects of
                  Midland Chemicals’ business including the manufacturing
                  processes, design and application of our products and the
                  purchasing of raw materials.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  To ensure this is achieved, Midland Chemicals shall:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Work to a quality system in line with{" "}
                    <strong>ISO 9001:2015</strong> to maintain and improve
                    performance in all areas of the operation.
                  </li>
                  <li>Use reliable suppliers, to ensure consistent quality.</li>
                  <li>
                    Manufacture in a prescribed and standardized way, to meet
                    and exceed customer requirements.
                  </li>
                  <li>
                    Annually review and audit the quality system to maintain the
                    highest levels of quality management.
                  </li>
                  <li>
                    Work with our stakeholders to identify and evaluate areas
                    that may require special attention.
                  </li>
                  <li>
                    Ensure our Quality Management System works in conjunction
                    with our Environmental Management System.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Communication:
                </h3>
                <p>
                  The display of this policy statement in the factory reception
                  is to inform visitors and remind staff of the Company’s
                  commitment to quality assurance.
                </p>
              </div>

              <div className="pt-6 border-t text-sm text-gray-700">
                <p>For and on behalf of Midland Chemicals</p>
                <p className="mt-2 font-semibold">Sunil Pathak (M.Sc.)</p>
                <p>Managing Director</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
