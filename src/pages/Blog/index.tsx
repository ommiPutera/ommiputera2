import React from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import useMode from '../../hooks/useMode'
import BlogCollection from './BlogCollection'
import HeroSection from './HeroSection'

function Blog() {
  React.useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <BlogWrapper>
      <PageHelmet />
      <HeroSection />
      <BlogCollection />
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
