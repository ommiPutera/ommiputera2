import {Text, Title} from '@mantine/core'
import styled from 'styled-components'
import {Button} from '../../components/Button'

function HeroSection() {
  return (
    <Wrapper>
      <LeftContent className="mt-82">
        <img className="profileImg" src="/assets/image/profile.jpeg" alt="" />
        <Text size="lg" className="mt-32">
          Ommi Putera karunia <div className="line" /> Jakarta, Indonesia.
          <br />
          +62 89508182045 <div className="line" /> omiputrakarunia@gmail.com
        </Text>
        <Button variant="default" size="lg" className="mt-32">
          Send me email?
        </Button>
      </LeftContent>
      <RightContent className="mt-62">
        <Title className="font-34">
          Software Engineer and also a Design Enthusiast based in Jakarta.
          Available for freelance and collaborations.
        </Title>
        <Text size="xl" className="mt-32">
          Hi 👋, I'm a Software Engineer - Front-end with 2 years of proven
          experience at a fintech company in helping to create and maintain a
          better code base for re-usability and best practices. Experience in
          developing projects from concept to launch. Eager to tackle more
          complex problems, and continues to find ways to maximize user
          efficiency
        </Text>
        <Button variant="default" size="lg" className="mt-102">
          Get started to my open-sources
        </Button>
        <Button variant="outline" size="lg">
          Learn more about Ommi Putera
        </Button>
      </RightContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
`

const LeftContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  padding-right: 40px;

  .profileImg {
    width: 170px;
    height: 170px;
    border-radius: 50%;
  }

  .line {
    display: inline-block;
    height: 25px;
    margin: 0 6px -6.5px 6px;
    width: 1px;
    background: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[2] : colors.dark[8]};
  }
`

const RightContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-end;
`

export default HeroSection
