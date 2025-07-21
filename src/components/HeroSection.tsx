import { Button } from "./ui/button";
import { ArrowRight, Shield, Award, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-50 to-indigo-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                UK Chemical Manufacturing Excellence
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Privately owned, independent UK manufacturer of high-quality
                chemicals established in 1991. Based in Atherstone,
                Warwickshire, supplying UK & worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group px-8 py-4 cursor-pointer text-lg h-auto"
                onClick={() => navigate("/products")}
              >
                View Our Products
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
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
                size="lg"
                className="px-8 cursor-pointer py-4 text-lg h-auto"
              >
                Contact Sales Team
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-10 w-10 text-green-600" />
                <div>
                  <div className="text-base text-gray-500">ISO Certified</div>
                  <div className="text-sm text-gray-400">Quality Assured</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-10 w-10 text-blue-600" />
                <div>
                  <div className="text-base text-gray-500">34+ Years</div>
                  <div className="text-sm text-gray-400">Experience</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-10 w-10 text-purple-600" />
                <div>
                  <div className="text-base text-gray-500">UK & Worldwide</div>
                  <div className="text-sm text-gray-400">Supply</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=450&fit=crop"
                alt="Chemical manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl text-primary">70+</div>
              <div className="text-base text-gray-500">
                Years R&D Experience
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl text-primary">UK</div>
              <div className="text-base text-gray-500">Based</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
