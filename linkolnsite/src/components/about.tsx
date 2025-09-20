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
        <section id="about" className="py-12 lg:py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Content */}
                    <div className="space-y-6">
                        <div>
                            <Badge variant="secondary" className="mb-3">
                                About Linkoln Technology
                            </Badge>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4">
                                    The company has been formed by a group of professionals having vivid experience and wide exposure in Electrical, Extra-Low Voltage and Smart Home/Office Automation.
                                </p>
                                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                                    People involved here are young qualified business graduates and qualified engineers from renowned universities across the globe. With over 10 years' experience in Electrical, Extra-low Voltage and Smart Home/Office Automation, Linkoln Technology utilizes the latest technology to help our customers protect what's most important to them.
                                </p>
                                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                                    We provide the best possible service tailored to both corporate organizations and individual needs. From initial site survey to bespoke design, cable implementation and execution, we are with you every step of the way to ensure you get the right system for your needs.
                                </p>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    Residential, commercial or industrial, we are experienced in all aspects of the Electrical, ELV and Smart Home/Office automation industry. We are available 24/7 whether you require an out-of-hours visit or advice over the phone.
                                </p>
                            </div>
                        </div>
                       
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 lg:gap-4 pt-2">
                            {stats.map((stat, index) => (
                                <Card key={index} className="text-center p-3 lg:p-4 hover:shadow-md transition-shadow duration-300 bg-background/80">
                                    <CardContent className="p-0">
                                        <stat.icon className="h-6 w-6 lg:h-7 lg:w-7 text-accent mx-auto mb-2" />
                                        <div className="text-xl lg:text-2xl font-bold text-foreground font-work-sans">{stat.value}</div>
                                        <div className="text-xs lg:text-sm text-muted-foreground">{stat.label}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative lg:sticky lg:top-8">
                        <div className="aspect-[4/5] lg:aspect-square rounded-xl lg:rounded-2xl overflow-hidden">
                            <img
                                src="/professional-electrician-working-on-smart-home-tec.png"
                                alt="Professional electrician working on smart home installation"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-accent p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-xl">
                            <div className="text-accent-foreground font-bold text-sm lg:text-base">Certified & Insured</div>
                            <div className="text-accent-foreground/80 text-xs lg:text-sm">Licensed Professionals</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}