import styled from 'styled-components'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import useMode from '../../hooks/useMode'
import {Helmet} from 'react-helmet'
import ProjectsSection from './ProjectsSection'
import EmailSection from './EmailSection'
import Blogs from './Blogs'

function Home() {
  return (
    <HomeWrapper>
      <PageHelmet />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <Blogs />
      <EmailSection />
    </HomeWrapper>
  )
}

function PageHelmet() {
  const {mode} = useMode()
  return (
    <Helmet>
      <title>Ommi Putera</title>
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
    padding-top: 132px;
  }

  @media (min-width: 1100px) {
    > div {
      padding-top: 208px;
    }
  }
`

export default Home
