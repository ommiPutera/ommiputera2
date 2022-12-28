import {Title} from '@mantine/core'
import styled from 'styled-components'

function HeroSection() {
  return (
    <Wrapper>
      <LeftContent></LeftContent>
      <RightContent>
        <Title className="text-align-left" order={1}>
          Helping people make the world a better place through quality software.
        </Title>
      </RightContent>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const LeftContent = styled.div`
  width: 50%;
  text-align: left;
  display: flex;
  justify-content: start;
`
const RightContent = styled.div`
  width: 50%;
  text-align: right;
  display: flex;
  justify-content: end;
`

export default HeroSection
