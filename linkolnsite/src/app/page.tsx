import About from "@/components/about";
import Gallery from "@/components/gallery";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/service";
import Footer from "@/components/footer";
import { Contact } from "@/components/contact";
import { TestimonialsSection } from "@/components/testimonials-section";
import PartnersCarousel from "@/components/partners";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <TestimonialsSection />
         <PartnersCarousel />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
