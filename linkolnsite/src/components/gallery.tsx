"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Modern Smart Home Integration",
    category: "Smart Home",
    image: "/modern-smart-home-with-automated-lighting-and-cont.png",
    description: "Complete home automation system with voice control and mobile app integration",
  },
  {
    title: "Commercial CCTV System",
    category: "Security",
    image: "/professional-cctv-security-camera-installation-in-.png",
    description: "Multi-camera security system with 24/7 monitoring capabilities",
  },
  {
    title: "Residential Electrical Wiring",
    category: "Rentals",
    image: "/clean-electrical-panel-and-wiring-installation-in-.png",
    description: "Complete electrical rewiring for a 3-bedroom family home",
  },
  {
    title: "Office Intercom System",
    category: "Intercom",
    image: "/modern-video-intercom-system-installation-in-offic.png",
    description: "Video intercom system with access control for corporate office",
  },
  {
    title: "DStv Multi-Room Setup",
    category: "Entertainment",
    image: "/satellite-dish-installation-and-multi-room-tv-setu.png",
    description: "Multi-room DStv installation with HD channels throughout the house",
  },
  {
    title: "Industrial Electrical Upgrade",
    category: "Commercial",
    image: "/industrial-electrical-installation-with-modern-con.png",
    description: "Electrical system upgrade for manufacturing facility",
  },
]

const categories = ["All", "Smart Home", "Security", "Wiring", "Intercom", "Entertainment", "Commercial"]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-work-sans">Our Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and see the quality of our electrical installations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "hover:bg-accent/10"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-4">
                    <h3 className="font-bold text-lg mb-2 font-work-sans">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Badge variant="secondary" className="mb-2">
                  {project.category}
                </Badge>
                <h3 className="font-bold text-lg text-card-foreground font-work-sans">{project.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
