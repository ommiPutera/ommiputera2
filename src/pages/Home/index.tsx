import styled from 'styled-components'
import HomeHelmet from './HomeHelmet'
import HeroSection from './HeroSection'
import ProfileSection from './ProfileSection'

function Home() {
  return (
    <HomeWrapper>
      <HomeHelmet />
      <HeroSection />
      <ProfileSection />
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
