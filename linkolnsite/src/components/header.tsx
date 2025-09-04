"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-sm">L</span>
            </div>
            <span className="font-serif font-bold text-xl text-foreground">Linkoln Technology</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-secondary transition-colors">
              About
            </a>
            <a href="#transport" className="text-foreground hover:text-secondary transition-colors">
              Electical Service
            </a>
            <a href="#smart-home" className="text-foreground hover:text-secondary transition-colors">
              Transport
            </a>
            <a href="#contact" className="text-foreground hover:text-secondary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-foreground hover:text-secondary transition-colors">
                About
              </a>
              <a href="#transport" className="text-foreground hover:text-secondary transition-colors">
               Electrical Service
              </a>
              <a href="#smart-home" className="text-foreground hover:text-secondary transition-colors">
                Transport
              </a>
              <a href="#contact" className="text-foreground hover:text-secondary transition-colors">
                Contact
              </a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-4">Book Now</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
