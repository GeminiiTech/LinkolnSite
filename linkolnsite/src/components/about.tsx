import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, MapPin } from "lucide-react"

const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: MapPin, value: "50+", label: "Projects Completed" },
]

export default function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <Badge variant="secondary" className="mb-4">
                            About Linkoln Technology
                        </Badge>
                        {/* <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-work-sans">
                            About Us
                        </h2> */}
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            The company has been formed by a group of professionals having
                            vivid experience and wide exposure in Electrical, Extra-Low
                            Voltage and Smart Home/ Office Automation. People involved here
                            are young qualified business graduates and qualified engineers from the
                            renowned universities across the globe.With over 10 years' experience in
                            Electrical, Extra-low Voltage and Smart Home/ Office Automation, Linkoln
                            Technology utilizes the latest technology to help our customers protect
                            what's most important to them, while providing the best possible service
                            tailored to both corporate organizations and individual needs.From initial
                            site survey to bespoke design, cable Implementation and Execution, we are
                            with you every step of the way to make sure you get the right system for
                            you. Residential, commercial or industrial, we are experienced in all different
                            aspects of the Electrical, ELV and Smart Home/ Office automation industry,
                            all of which require specific and varied considerations. We are on hand 24/7
                            whether you require an out of hours visit or just some advice over the phone,
                            you're never left without
                        </p>
                       
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow duration-300">
                                    <CardContent className="p-0">
                                        <stat.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                                        <div className="text-2xl font-bold text-foreground font-work-sans">{stat.value}</div>
                                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden">
                            <img
                                src="/professional-electrician-working-on-smart-home-tec.png"
                                alt="Professional electrician working on smart home installation"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-2xl shadow-xl">
                            <div className="text-accent-foreground font-bold text-lg">Certified & Insured</div>
                            <div className="text-accent-foreground/80 text-sm">Licensed Professionals</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
