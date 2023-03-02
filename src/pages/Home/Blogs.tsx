import {Title} from '@mantine/core'
import React from 'react'
import styled from 'styled-components'
import useMode from '../../hooks/useMode'

function Blogs() {
  const {mode} = useMode()
  return (
    <Wrapper>
      <Title className="font-38 mobile-font-28 font-600 basic-animate-1">
        Blog recommendations
      </Title>
      <Title
        color={mode === 'dark' ? 'dark.4' : 'dark.7'}
        className="font-38 mobile-font-28 font-600 basic-animate-1"
      >
        Prepared especially for you.
      </Title>
      <Contents>
        <Blog />
        <Blog />
        <Blog />
      </Contents>
    </Wrapper>
  )
}

function Blog() {
  return <div>Blog 1</div>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Contents = styled.div`
  margin-top: 62px;
  gap: 62px;

  @media (min-width: 1000px) {
    margin-top: 102px;

    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 82px;
  }
`

export default Blogs
