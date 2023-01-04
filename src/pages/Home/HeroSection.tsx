import {Text, Title} from '@mantine/core'
import styled from 'styled-components'
import {Button} from '../../components/Button'

function HeroSection() {
  return (
    <Wrapper>
      <LeftContent className="mt-102">
        <Title className="font-36">
          Software Engineer and also a Design Enthusiast based in Jakarta.
          Available for freelance and collaborations.
        </Title>
        <Text size="lg" className="mt-32 font-500">
          Hi 👋, I'm a Software Engineer - Front-end with 2 years of proven
          experience in helping to create and maintain a better code base for
          re-usability and best practices. Experience in developing projects
          from concept to launch. Eager to tackle more complex problems, and
          continues to find ways to maximize user efficiency
        </Text>
        <Button variant="default" size="lg" className="mt-102">
          Get started to my open-sources
        </Button>
        <Button variant="outline" size="lg">
          Learn more about Ommi Putera
        </Button>
      </LeftContent>
      <RightContent className="mt-102">
        <img className="profileImg" src="/assets/image/profile.jpeg" alt="" />
        <Text size="lg" className="mt-32 font-500">
          Jakarta, Indonesia. <div className="line" /> Ommi Putera karunia
          <br />
          omiputrakarunia@gmail.com <div className="line" /> +62 89508182045
        </Text>
        <Button variant="default" size="lg" className="mt-32">
          Send me email?
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
  padding-right: 20px;
`

const RightContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;

  .profileImg {
    width: 180px;
    height: 180px;
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

export default HeroSection
