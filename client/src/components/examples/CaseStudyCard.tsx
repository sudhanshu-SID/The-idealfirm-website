import CaseStudyCard from '../CaseStudyCard'
import analyticsImage from "@assets/stock_images/digital_marketing_an_71546053.jpg"

export default function CaseStudyCardExample() {
  return (
    <CaseStudyCard
      title="E-Commerce Growth Campaign"
      category="Google Ads & SEO"
      description="Helped a local retail brand achieve 3x revenue growth through integrated digital marketing"
      metrics={[
        { label: "Revenue Growth", value: "+300%" },
        { label: "ROAS", value: "5.2x" }
      ]}
      image={analyticsImage}
    />
  )
}
