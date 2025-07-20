import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Settings,
  Package,
  FlaskConical,
  Truck,
  CheckCircle2,
  FileText,
  Tag,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Settings,
      title: "Toll Manufacturing",
      description:
        "Comprehensive blending services for solvents, emulsions, and aqueous formulations.",
      features: [
        "Wide range of chemical types",
        "Acidic, neutral and alkaline formulations",
        "Both viscous and non-viscous products",
        "Your formulation or ours",
        "Full confidentiality guaranteed",
      ],
    },
    {
      icon: Package,
      title: "Private/White Label Service",
      description:
        "Complete private labeling solutions with your corporate identity.",
      features: [
        "UN approved packaging for UK & export",
        "Wide range of pack sizes available",
        "Bespoke packaging options",
        "In-house label printing service",
        "Maintain your corporate identity",
      ],
    },
    {
      icon: FlaskConical,
      title: "Custom Formulations",
      description:
        "Bespoke chemical solutions developed to your exact specifications.",
      features: [
        "Using existing raw materials",
        "Specially sourced materials",
        "Free-issue raw materials accepted",
        "Your specification & requirements",
        "R&D team with 70+ years experience",
      ],
    },
    {
      icon: Truck,
      title: "Bulk Supply & Contract Filling",
      description:
        "Flexible supply options including bulk products for contract filling.",
      features: [
        "Bulk product supply",
        "Contract filling services",
        "Flexible delivery options",
        "UK and worldwide shipping",
        "Just-in-time delivery",
      ],
    },
    {
      icon: FileText,
      title: "Technical Documentation",
      description:
        "Complete documentation and compliance support for all products.",
      features: [
        "Up to date CLP compliant data sheets",
        "Safety Data Sheets (SDS)",
        "Certificates of Analysis",
        "REACH compliance documentation",
        "Technical support materials",
      ],
    },
    {
      icon: Tag,
      title: "Labeling & Compliance",
      description:
        "Professional labeling services ensuring full regulatory compliance.",
      features: [
        "CLP/GHS compliant labeling",
        "REACH compliance",
        "Custom label design",
        "Multi-language options",
        "Regulatory updates included",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900">
            Our Manufacturing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Midland Chemicals has the capacity and capability to blend a wide
            range of chemical types. We are flexible enough to blend to your
            formulation(s) with full confidentiality at all times.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 min-h-20 text-center">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => {
                      const element = document.getElementById("contact-form");
                      if (element) {
                        const topOffset =
                          element.getBoundingClientRect().top +
                          window.scrollY -
                          100;
                        window.scrollTo({
                          top: topOffset,
                          behavior: "smooth",
                        });
                      }
                    }}
                    variant="outline"
                    className="w-full cursor-pointer py-3 text-base"
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl text-gray-900 mb-4">
            Need Hand Sanitizer Manufacturing?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            As a UK manufacturer of hand sanitizer, we can help meet your
            sanitization needs with high-quality, compliant products. Contact us
            for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg h-auto">
              Email: sales@midlandchem.com
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg h-auto"
            >
              Call: 01827 722911
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
