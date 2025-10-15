import ServiceCard from '../ServiceCard'
import { Target } from 'lucide-react'

export default function ServiceCardExample() {
  return (
    <ServiceCard
      icon={Target}
      title="Google Ads Service"
      description="Drive qualified traffic and maximize ROI with expert Google Ads management"
      benefits={[
        "Strategic campaign planning",
        "Keyword research & optimization",
        "Performance tracking & reporting"
      ]}
      href="/services/google-ads-guwahati"
    />
  )
}
