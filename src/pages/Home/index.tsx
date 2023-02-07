import styled from 'styled-components'
import HomeHelmet from './HomeHelmet'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'

function Home() {
  return (
    <HomeWrapper>
      <HomeHelmet />
      <HeroSection />
      <ServicesSection />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  display: block;
  min-height: 100vh;

  > div {
    margin-bottom: 142px;
  }
`

export default Home
