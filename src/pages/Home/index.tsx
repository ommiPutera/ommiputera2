import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import useMode from '../../hooks/useMode'
import HeroSection from './HeroSection'
import ProfileSection from './ProfileSection'

function Home() {
  return (
    <Wrapper>
      <HomeHelmet />
      <HeroSection />
      <ProfileSection />
    </Wrapper>
  )
}

function HomeHelmet() {
  const {mode} = useMode()
  return (
    <Helmet>
      <title>Ommi Putera - Software Engineer</title>
      <meta
        name="theme-color"
        content={mode === 'light' ? '#fff' : '#18181b'}
      />
    </Helmet>
  )
}

const Wrapper = styled.div`
  display: block;

  > div {
    margin-bottom: 82px;
  }
`

export default Home
