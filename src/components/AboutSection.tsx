import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./ui/ImageWithFallback";

export function AboutSection() {
  const stats = [
    { value: "1991", label: "Established" },
    { value: "70+", label: "Years R&D Experience" },
    { value: "UK", label: "Based" },
    { value: "Independent", label: "Ownership" },
  ];

  const certifications = [
    "ISO 9001:2015",
    "ISO 14001:2015",
    "REACH Compliant",
    "CLP/GHS Compliant",
    "UN Approved Packaging",
    "UK Reg: 02591575",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl text-gray-900">
                About Midland Chemicals Ltd
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Midland Chemicals Ltd is a privately owned, independent UK
                manufacturer of chemicals established in 1991, based in
                Atherstone, Warwickshire, UK.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our reputation for producing high quality products and a high
                level of technical support has led to us supplying to our
                customers throughout the UK, Europe and worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our highly knowledgeable research and development team, with a
                combined experience of over 70 years in the industry, is always
                available to discuss the formulation and specification of new
                products to your requirements.
              </p>
            </div>

            {/* Stats */}
            <div
              className="grid gap-2 md:gap-6 w-full"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(60px, 100px))",
              }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="text-3xl text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-xl text-gray-900">
                Certifications & Compliance
              </h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge key={cert} variant="outline" className="px-3 py-1">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Management */}
            <div className="space-y-4">
              <h3 className="text-xl text-gray-900">Leadership</h3>
              <div className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xl">SP</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    Sunil Pathak (M.Sc.)
                  </h4>
                  <p className="text-gray-600">Managing Director</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=450&fit=crop"
                    alt="Chemical manufacturing facility in Atherstone"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=300&h=300&fit=crop"
                      alt="Quality control laboratory"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop"
                      alt="R&D team at work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Policy Statements */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="text-xl text-gray-900">Quality Policy</h3>
              <p className="text-gray-600">
                At Midland Chemicals, quality is of the utmost importance. We
                work to a quality system in line with ISO 9001:2015 to maintain
                and improve performance in all areas of operation.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Reliable suppliers for consistent quality</p>
                <p>• Standardized manufacturing processes</p>
                <p>• Annual review and audit of quality systems</p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="text-xl text-gray-900">Environmental Policy</h3>
              <p className="text-gray-600">
                Product performance is interlinked with a longstanding concern
                for health, safety and the environment, guaranteeing customers'
                peace of mind.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Environmental impact evaluation</p>
                <p>• ISO 14001:2015 compliance</p>
                <p>• Waste reduction and recycling</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* REACH Statement */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl text-gray-900 mb-4 text-center">
            REACH & CLP Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                REACH Compliance
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Midland Chemicals Ltd is fully committed to REACH and maintains
                status as a "down-stream user". We constantly update our
                operations to remain fully compliant with European chemicals
                regulations.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                CLP (GHS) Implementation
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are completely up to date with the new classification,
                labelling and packaging system. All our MSDS and labels are CLP
                compliant format, updated since September 2015.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
