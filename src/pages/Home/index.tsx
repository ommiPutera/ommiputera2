import styled from 'styled-components'
import HomeHelmet from './HomeHelmet'
import HeroSection from './HeroSection'

function Home() {
  return (
    <HomeWrapper>
      <HomeHelmet />
      <HeroSection />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  display: block;

  > div {
    margin-bottom: 82px;
  }
`

export default Home
