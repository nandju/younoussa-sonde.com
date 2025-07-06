import Header from "@/components/header"

import Footer from "@/components/footer"
import AboutSection from "@/components/about/about-section"
import HowItWorksSection from "@/components/how-it-works/how-it-works-section"
import ExplorePropertiesSection from "@/components/explore-properties/explore-properties-section"

export default function Home() {
  return (
    <div>
      <Header />
      <AboutSection />
      <HowItWorksSection />
      <ExplorePropertiesSection />
    </div>
  )
}
