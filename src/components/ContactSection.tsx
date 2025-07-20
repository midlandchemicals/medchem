import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "UK Headquarters",
      details: [
        "Midland Chemicals Ltd",
        "Atherstone, Warwickshire",
        "United Kingdom",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Main: 01827 722911",
        "Available during business hours",
        "UK & International calls welcome",
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "Sales: sales@midlandchem.com",
        "General enquiries welcome",
        "Technical support available",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "UK Time (GMT/BST)",
        "Response within 24 hours",
      ],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900">
            Contact Midland Chemicals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your chemical manufacturing requirements? Our
            experienced team based in Atherstone, Warwickshire is here to help
            with custom solutions for UK and worldwide customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-3 text-lg">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <span>{info.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <Mail className="h-10 w-10 mx-auto mb-3" />
                  <h3 className="font-medium mb-2 text-lg">Email Us Now</h3>
                  <p className="text-sm opacity-90 mb-4">
                    sales@midlandchem.com
                  </p>
                  <Button variant="secondary" className="w-full py-3 text-base">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-green-600 text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="h-10 w-10 mx-auto mb-3" />
                  <h3 className="font-medium mb-2 text-lg">Call Us Now</h3>
                  <p className="text-sm opacity-90 mb-4">01827 722911</p>
                  <Button variant="secondary" className="w-full py-3 text-base">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get a Quote</CardTitle>
                <p className="text-gray-600">
                  Tell us about your chemical manufacturing requirements and
                  we'll get back to you within 24 hours with a detailed
                  proposal.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                      className="py-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="py-3"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="py-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+44 1234 567890"
                      className="py-3"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      placeholder="Your Company Name"
                      required
                      className="py-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select>
                      <SelectTrigger className="py-3">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="europe">Europe</SelectItem>
                        <SelectItem value="worldwide">Worldwide</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select>
                    <SelectTrigger className="py-3">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aerospace">Aerospace</SelectItem>
                      <SelectItem value="agricultural">Agricultural</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="industrial">
                        Industrial Cleaning
                      </SelectItem>
                      <SelectItem value="power">Power Generation</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Required *</Label>
                  <Select>
                    <SelectTrigger className="py-3">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="toll">Toll Manufacturing</SelectItem>
                      <SelectItem value="private">
                        Private/White Label
                      </SelectItem>
                      <SelectItem value="custom">Custom Formulation</SelectItem>
                      <SelectItem value="bulk">Bulk Supply</SelectItem>
                      <SelectItem value="sanitizer">Hand Sanitizer</SelectItem>
                      <SelectItem value="consultation">
                        Technical Consultation
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Requirements Details *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your chemical requirements, quantities needed, specifications, target markets, or any specific questions about our toll manufacturing or private label services..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row ">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 py-4 cursor-pointer text-lg h-auto"
                  >
                    Send Enquiry
                  </Button>
                </div>

                <p className="text-xs text-gray-500">
                  * Required fields. We respect your privacy and will only use
                  your information to respond to your enquiry. Company
                  Registration: 02591575
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
