import About from "@/components/about";
import Contact from "@/components/contact";
import Gallery from "@/components/gallery";
import {Header} from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/service";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero/>
        <Services/>
        <About/>
        <Gallery/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  )
}