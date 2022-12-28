import styled from 'styled-components'
import HeroSection from './HeroSection'
import ProfileSection from './ProfileSection'

function Home() {
  return (
    <Wrapper>
      <HeroSection />
      <ProfileSection />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;

  > div {
    margin-bottom: 82px;
  }
`

export default Home
