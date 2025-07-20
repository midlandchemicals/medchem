import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Plane,
  Tractor,
  Car,
  Construction,
  GraduationCap,
  Heart,
  Factory,
  Zap,
  ShoppingCart,
} from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";

export function ProductsSection() {
  const industryCategories = [
    {
      id: 1,
      title: "Aerospace",
      description:
        "Specialized chemicals for the aerospace industry including cleaning and maintenance solutions.",
      icon: Plane,
      image:
        "https://plus.unsplash.com/premium_photo-1661501377764-3a603bc122c8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: [
        "Aircraft Cleaners",
        "Degreasers",
        "Paint Strippers",
        "Maintenance Chemicals",
      ],
      applications: [
        "Aircraft Maintenance",
        "Component Cleaning",
        "Surface Preparation",
      ],
    },
    {
      id: 2,
      title: "Agricultural",
      description:
        "Agricultural chemicals and formulations for crop protection and enhancement.",
      icon: Tractor,
      image:
        "https://images.unsplash.com/photo-1743362814840-bc41dd1b3a2d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: [
        "Fertilizer Additives",
        "Crop Protection",
        "Soil Conditioners",
        "Agricultural Cleaners",
      ],
      applications: [
        "Crop Enhancement",
        "Equipment Maintenance",
        "Soil Treatment",
      ],
    },
    {
      id: 3,
      title: "Automotive",
      description:
        "High-performance chemicals for automotive manufacturing and maintenance.",
      icon: Car,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: [
        "Car Care Products",
        "Engine Cleaners",
        "Paint Strippers",
        "Lubricants",
      ],
      applications: ["Vehicle Maintenance", "Manufacturing", "Refinishing"],
    },
    {
      id: 4,
      title: "Construction",
      description:
        "Construction chemicals for building, maintenance, and infrastructure projects.",
      icon: Construction,
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: [
        "Concrete Additives",
        "Sealers",
        "Cleaners",
        "Surface Treatments",
      ],
      applications: ["Building Construction", "Infrastructure", "Maintenance"],
    },
    {
      id: 5,
      title: "Education",
      description:
        "Safe and reliable chemicals for educational institutions and research facilities.",
      icon: GraduationCap,
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: [
        "Laboratory Chemicals",
        "Cleaning Solutions",
        "Disinfectants",
        "Teaching Aids",
      ],
      applications: ["Laboratory Work", "Facility Cleaning", "Research"],
    },
    {
      id: 6,
      title: "Healthcare",
      description:
        "Medical-grade chemicals and sanitizers including hand sanitizer manufacturing.",
      icon: Heart,
      image:
        "https://images.unsplash.com/photo-1578496479763-c21c718af028?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: [
        "Hand Sanitizers",
        "Disinfectants",
        "Medical Cleaners",
        "Sterilization Solutions",
      ],
      applications: [
        "Healthcare Facilities",
        "Medical Equipment",
        "Infection Control",
      ],
    },
    {
      id: 7,
      title: "Industrial Cleaning",
      description:
        "Professional-grade industrial cleaning chemicals and degreasers.",
      icon: Factory,
      image:
        "https://plus.unsplash.com/premium_photo-1663088651379-95c21dfbf72c?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: [
        "Industrial Degreasers",
        "Heavy-Duty Cleaners",
        "Solvent Cleaners",
        "Maintenance Products",
      ],
      applications: [
        "Equipment Cleaning",
        "Facility Maintenance",
        "Industrial Processing",
      ],
    },
    {
      id: 8,
      title: "Power Generation",
      description:
        "Chemicals for power generation facilities and energy infrastructure.",
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: [
        "Cooling System Chemicals",
        "Boiler Treatments",
        "Cleaners",
        "Corrosion Inhibitors",
      ],
      applications: [
        "Power Plants",
        "Energy Infrastructure",
        "Equipment Maintenance",
      ],
    },
    {
      id: 9,
      title: "Retail",
      description:
        "Consumer and retail chemicals for various commercial applications.",
      icon: ShoppingCart,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      products: [
        "Retail Cleaners",
        "Consumer Products",
        "Specialty Formulations",
        "Custom Solutions",
      ],
      applications: [
        "Retail Environments",
        "Consumer Use",
        "Commercial Cleaning",
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From general cleaning chemicals such as disinfectants to specialty
            chemicals such as paint strippers, our knowledge and experience
            enable us to develop products to suit very specific customer
            requirements.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="group hover:shadow-lg flex flex-col justify-between transition-shadow duration-300"
              >
                <CardHeader className="flex flex-col gap-y-4">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col  gap-y-5 flex-1">
                  <p className="text-gray-600 min-h-16">
                    {category.description}
                  </p>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medium text-gray-900">
                      Product Examples:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {category.products.slice(0, 3).map((product) => (
                        <Badge
                          key={product}
                          variant="secondary"
                          className="text-xs px-3 py-1"
                        >
                          {product}
                        </Badge>
                      ))}
                      {category.products.length > 3 && (
                        <Badge variant="outline" className="text-xs px-3 py-1">
                          +{category.products.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medium text-gray-900">
                      Applications:
                    </h4>
                    <div className="text-sm text-gray-600">
                      {category.applications.join(" • ")}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full cursor-pointer py-3 text-base"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl text-gray-900 mb-4">
            Custom Chemical Solutions
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our highly knowledgeable research and development team, with a
            combined experience of over 70 years in the industry, is always
            available to discuss the formulation and specification of new
            products to your requirements.
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById("contact-form");
              if (element) {
                const topOffset =
                  element.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({
                  top: topOffset,
                  behavior: "smooth",
                });
              }
            }}
            size="lg"
            className="px-8 py-4 cursor-pointer text-lg h-auto"
          >
            Contact Our R&D Team
          </Button>
        </div>
      </div>
    </section>
  );
}
