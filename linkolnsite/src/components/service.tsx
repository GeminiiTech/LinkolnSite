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
    description: "We provide high-quality systems engineered for efficiency, durability, and seamless energy conversion.",
    features: ["Solar panel installation", "Battery systems", "Grid integration", "Energy monitoring"],
    popular: false,
  },
  {
    icon: Car,
    title: "Car Rental Services",
    description: "We provide a convenient and flexible solution for individuals and businesses that need temporary access to a vehicle within and outside the state of Lagos Nigeria",
    features: ["Car Rental", "Security Cars", "Escort Services", "VIP Movement"],
    popular: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3 font-work-sans">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive electrical solutions tailored to meet your modern technology needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent/50 h-full"
            >
              <CardHeader className="pb-3 lg:pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 lg:p-2.5 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="h-5 w-5 lg:h-6 lg:w-6 text-accent" />
                  </div>
                  {service.popular && (
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg lg:text-xl font-bold text-card-foreground font-work-sans leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-sm lg:text-base text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {service.description}
                </CardDescription>
                
                <div className="space-y-1.5">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="h-3.5 w-3.5 text-accent mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-border/50">
                  <button className="text-sm font-medium text-accent hover:text-accent-foreground transition-colors duration-200 flex items-center group/btn">
                    Learn More 
                    <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}