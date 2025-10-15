import TestimonialCard from '../TestimonialCard'
import avatar from "@assets/stock_images/professional_busines_b65fc059.jpg"

export default function TestimonialCardExample() {
  return (
    <TestimonialCard
      quote="The Idea Firm transformed our digital presence completely. Their data-driven approach and creative strategies delivered exceptional results. Highly recommended!"
      author="Rajesh Kumar"
      role="CEO"
      company="Tech Solutions Pvt. Ltd."
      avatar={avatar}
    />
  )
}
