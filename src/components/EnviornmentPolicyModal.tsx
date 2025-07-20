import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

import React from "react";

interface EnvironmentalPolicyProps {
  children: React.ReactNode;
}

export function EnvironmentalPolicyStatement({
  children,
}: EnvironmentalPolicyProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl h-[65vh] flex flex-col">
        <ScrollArea className="flex-1 pr-4">
          <h2 className="text-2xl font-bold text-primary">
            Environmental Policy Statement
          </h2>
          <div className="space-y-6 text-sm overflow-scroll hide-scrollbar max-h-120 leading-relaxed pb-4">
            {/* REACH Overview */}
            <div className="bg-white text-gray-800 p-8 max-w-4xl mx-auto rounded-lg shadow space-y-6 leading-relaxed text-base">
              <p>
                At <strong>Midland Chemicals</strong>, product performance is
                interlinked with a longstanding concern for health, safety and
                the environment, guaranteeing customer’s peace of mind.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Scope:
                </h3>
                <p>
                  This Company Policy statement applies to all aspects of
                  Midland Chemicals’ business including the manufacturing
                  processes, design and application of our products, technical
                  services, the purchasing of raw materials and disposal of
                  wastes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  To ensure this is achieved, Midland Chemicals shall, where
                  possible:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Work with our stakeholders to identify and evaluate the
                    environmental impacts of products.
                  </li>
                  <li>
                    Use environmentally sound operating practices and
                    technologies.
                  </li>
                  <li>
                    Our specially qualified staff set and review annually,
                    objectives and targets in line with
                    <strong> ISO 14001:2015</strong> to maintain and improve
                    performance in those areas that have a significant
                    environmental impact, in particular ensuring safe and
                    efficient storage, handling and transportation of all
                    materials.
                  </li>
                  <li>
                    Manage all processes to maintain emissions to below legal
                    limits.
                  </li>
                  <li>
                    Optimize the use of fuel, energy, water and raw materials.
                  </li>
                  <li>
                    Reduce waste by process improvement, re-use and re-cycling.
                  </li>
                  <li>
                    Ensure safe and efficient storage, handling and disposal of
                    all wastes.
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
                  commitment to environmental responsibility.
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
