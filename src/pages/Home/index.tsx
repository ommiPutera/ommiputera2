import styled from 'styled-components'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import useMode from '../../hooks/useMode'
import {Helmet} from 'react-helmet'
import ProjectsSection from './ProjectsSection'
import EmailSection from './EmailSection'

function Home() {
  return (
    <HomeWrapper>
      <PageHelmet />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <EmailSection />
    </HomeWrapper>
  )
}

function PageHelmet() {
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

const HomeWrapper = styled.div`
  display: block;
  min-height: 100vh;

  > div {
    margin-bottom: 132px;
  }

  @media (min-width: 1100px) {
    > div {
      margin-bottom: 212px;
    }
  }
`

export default Home
