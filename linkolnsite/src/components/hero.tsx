"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Clock, Car } from "lucide-react"

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/modern-smart-home-with-electrical-installations-an.png')`,
                }}
            >
                <div className="absolute inset-0 bg-primary/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 font-work-sans">
                        Powering Your
                        <span className="text-accent block">Smart Future</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Professional electrical services for modern homes and businesses. From smart home integration to CCTV
                        installation, we bring cutting-edge technology to your doorstep.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="text-lg px-8 py-4 animate-glow hover:scale-105 transition-transform duration-200"
                        >
                            View Services
                        </Button>
                    </div>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                            <Zap className="h-5 w-5 text-accent mr-2" />
                            <span className="text-primary-foreground font-medium">Electrical Services</span>
                        </div>
                        <div className="flex items-center bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                            <Car className="h-5 w-5 text-accent mr-2" />
                            <span className="text-primary-foreground font-medium">Car Rentals</span>
                        </div>
                        <div className="flex items-center bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                            <Zap className="h-5 w-5 text-accent mr-2" />
                            <span className="text-primary-foreground font-medium">Smart Home Integration</span>
                        </div>

                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}
