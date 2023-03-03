import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import useMode from '../../hooks/useMode'
import BigProject from './BigProject'
import Blogs from './Blogs'
import EmailSection from './EmailSection'
import HeroSection from './HeroSection'
import ProjectsSection from './ProjectsSection'
import ServicesSection from './ServicesSection'

function Home() {
  return (
    <HomeWrapper>
      <PageHelmet />
      <HeroSection />
      <ServicesSection />
      <BigProject />
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
      padding-top: 108px;
      padding-bottom: 108px;
    }
  }
`

export default Home
