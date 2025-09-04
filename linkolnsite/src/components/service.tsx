import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Shield, Zap, Tv, Phone, Settings, ArrowRight, Car, Sun } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Electrical Wiring",
    description:
      "Complete electrical wiring solutions for residential and commercial buildings with safety compliance.",
    features: ["New installations", "Rewiring", "Safety inspections", "Repairs and upgrades"],
    popular: true,
  },
  {
    icon: Home,
    title: "Smart Home Integration",
    description: "Transform your home with intelligent automation systems for lighting, climate, and security.",
    features: ["Home automation","Alexa/Google Home", "Smart lighting", "Access Control and Biometric System" ],
    popular: true,
  },
  {
    icon: Shield,
    title: "CCTV Installation",
    description: "Professional security camera systems with remote monitoring and high-definition recording.",
    features: ["Auto Tracking PTZ dome Cameras", "IP & HD CCTV camera", "Night vision", "Remote monitoring "],
    popular: false,
  },
  {
    icon: Tv,
    title: "DStv Installation",
    description: "Expert satellite TV installation and setup for crystal clear entertainment experience.",
    features: ["Satellite alignment", "Multi-room setup", "Signal optimization", "Maintenance"],
    popular: false,
  },
  {
    icon: Sun,
    title: "Solar Energy Systems and Inverter Integration",
    description: "We provide high-quality systems engineered for efficiency,durability, and seamless energy conversion.",
    features: ["Video intercoms", "Access control", "Multi-unit systems", "Mobile integration"],
    popular: false,
  },
  {
    icon: Car,
    title: "Car Rental Services",
    description: "We provide a convenient and flexible solution for individuals and businesses that need temporary access to a vehichle within and outside the state of Lagos Nigeria",
    features: ["Car Rental", "Security Cars", "Escort Services", "Vip Movement"],
    popular: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-work-sans">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive electrical solutions tailored to meet your modern technology needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border hover:border-accent/50"
            >
              <CardHeader className="text-center pb-4">
                {service.popular && (
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">
                    Most Popular
                  </Badge>
                )}
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground font-work-sans">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <div className="text-accent font-semibold group-hover:text-accent-foreground transition-colors duration-300">
                  Learn More →
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
