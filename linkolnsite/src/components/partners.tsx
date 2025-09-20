"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"

const partners = [
  { name: "Panasonic", logo: "/panasonic-logo-blue.jpg" },
  { name: "Luminous", logo: "/luminous-logo-blue.jpg" },
  { name: "Chuango", logo: "/chuango-security-logo.jpg" },
  { name: "Alexa", logo: "/amazon-alexa-logo-cyan.jpg" },
  { name: "Smart Home", logo: "/smart-home-logo-blue.jpg" },
  { name: "Russound", logo: "/russound-audio-logo.jpg" },
  { name: "ZKTeco", logo: "/zkteco-security-logo-green.jpg" },
  { name: "Centurion", logo: "/centurion-systems-logo.jpg" },
  { name: "Meritronics", logo: "/meritronics-logo-colorful.jpg" },
  { name: "Elan", logo: "/elan-home-systems-logo-black.jpg" },
  { name: "Hikvision", logo: "/hikvision-security-logo-red.jpg" },
  { name: "Tuya", logo: "/tuya-smart-logo-orange.jpg" },
  { name: "Google Home", logo: "/google-home-logo-colorful.jpg" },
  { name: "Somfy", logo: "/somfy-automation-logo-yellow-black.jpg" },
  { name: "3CX", logo: "/3cx-communications-logo-blue.jpg" },
]

export default function PartnersCarousel() {
  return (
    <section className="w-full py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Our Technology Partners
        </h2>
        <p className="text-muted-foreground">
          Integrated with the world's leading smart technology brands
        </p>
      </div>

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0, // no pause, keeps sliding
          disableOnInteraction: false,
        }}
        speed={4000} // adjust for smoothness
        className="max-w-6xl mx-auto"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.name} className="flex items-center justify-center">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={120}
              height={60}
              className="opacity-70 hover:opacity-100 transition-opacity duration-200 filter grayscale hover:grayscale-0"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
