import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import useMode from '../../hooks/useMode'
import BlogSection from './BlogSection'
import HeroSection from './HeroSection'

function Blog() {
  return (
    <BlogWrapper>
      <PageHelmet />
      <HeroSection />
      <BlogSection />
    </BlogWrapper>
  )
}

function PageHelmet() {
  const {mode} = useMode()
  return (
    <Helmet>
      <title>Blog Ommi Putera</title>
      <meta
        name="theme-color"
        content={mode === 'light' ? '#fff' : '#18181b'}
      />
    </Helmet>
  )
}

const BlogWrapper = styled.div`
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

export default Blog
