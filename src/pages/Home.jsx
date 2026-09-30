import BusinessBanner from '../components/BusinessBanner'
import FreelancersSection from '../components/FreelancersSection'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import WorksSection from '../components/WorksSection'

function Home() {
  return (
    <>
      <Hero />
      <WorksSection />
      <FreelancersSection />
      <HowItWorks />
      <BusinessBanner />
    </>
  )
}

export default Home
