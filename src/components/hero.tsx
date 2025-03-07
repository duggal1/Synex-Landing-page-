import { HeroSection } from "@/components/blocks/hero-section-dark"

function Hero() {
  return (
    <HeroSection
      title=" 🎉 Trusted by 10,000+ Businesses"
      subtitle={{
        regular: "  AI-Powered  ",
        gradient: " Invoice Automation ",
      }}
      description=" Synex makes invoice management effortless. Set up in seconds, automate your entire workflow, and focus on growing your business."
      ctaText="Get Started"
      ctaHref="/signup"
    
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />

  )
}
export { Hero}
