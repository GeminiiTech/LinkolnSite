import { Zap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ]

  const services = [
    "Electrical Wiring",
    "Smart Home Integration",
    "CCTV Installation",
    "DStv Installation",
    "Car Rentals",
    "Escort Services",
    "Vip Movement",
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-accent p-2 rounded-lg">
                <Zap className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold font-work-sans">Linkoln Technology</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Professional electrical services for modern homes and businesses. We bring cutting-edge technology
              solutions to power your future.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-work-sans">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-work-sans">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-work-sans">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>22 Rosenje Street,</p>
                  <p>Gbagada Lagos</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>+234 8139633617</p>
                  <p>+234 8115659582</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>Linkolntech@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Linkoln Technology. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
