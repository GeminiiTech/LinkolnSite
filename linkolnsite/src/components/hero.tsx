"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Clock, Car, Home } from "lucide-react"

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
                <div className="absolute inset-0 bg-primary/75"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center max-w-6xl">
                <div className="animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 lg:mb-6 font-work-sans leading-tight">
                        Powering Your
                        <span className="text-accent block">Smart Future</span>
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed">
                        Professional electrical services for modern homes and businesses. From smart home integration to CCTV
                        installation, we bring cutting-edge technology to your doorstep.
                    </p>

                    <div className="flex sm:flex-row gap-3 lg:gap-4 justify-center mb-8 lg:mb-10">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 animate-glow hover:scale-105 transition-all duration-200 font-medium"
                        >
                            View Services
                            <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                        </Button>
                    </div>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-2 lg:gap-3 max-w-4xl mx-auto">
                        <div className="flex items-center bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 lg:px-4 py-2 border border-primary-foreground/20">
                            <Zap className="h-4 w-4 lg:h-5 lg:w-5 text-accent mr-2 flex-shrink-0" />
                            <span className="text-primary-foreground font-medium text-sm lg:text-base whitespace-nowrap">Electrical Services</span>
                        </div>
                        <div className="flex items-center bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 lg:px-4 py-2 border border-primary-foreground/20">
                            <Car className="h-4 w-4 lg:h-5 lg:w-5 text-accent mr-2 flex-shrink-0" />
                            <span className="text-primary-foreground font-medium text-sm lg:text-base whitespace-nowrap">Car Rentals</span>
                        </div>
                        <div className="flex items-center bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 lg:px-4 py-2 border border-primary-foreground/20">
                            <Home className="h-4 w-4 lg:h-5 lg:w-5 text-accent mr-2 flex-shrink-0" />
                            <span className="text-primary-foreground font-medium text-sm lg:text-base whitespace-nowrap">Smart Home</span>
                        </div>
                        <div className="flex items-center bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 lg:px-4 py-2 border border-primary-foreground/20">
                            <Shield className="h-4 w-4 lg:h-5 lg:w-5 text-accent mr-2 flex-shrink-0" />
                            <span className="text-primary-foreground font-medium text-sm lg:text-base whitespace-nowrap">CCTV Security</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-primary-foreground/60 rounded-full flex justify-center">
                    <div className="w-1 h-2 lg:h-3 bg-accent rounded-full mt-1 lg:mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}