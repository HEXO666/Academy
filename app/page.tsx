import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ActivitiesSection } from "@/components/activities-section"
import { NewsSection } from "@/components/news-section"
import { PartnersSection } from "@/components/partners-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <NewsSection />
      <PartnersSection />
      <ContactSection />
    </div>
  )
}
