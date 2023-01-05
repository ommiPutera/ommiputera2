import {Text, Title} from '@mantine/core'
import styled from 'styled-components'
import {Button} from '../../components/Button'

function HeroSection() {
  return (
    <Wrapper>
      <LeftContent className="mobile__mt-32">
        <Title className="font-38 mobile__font-28 font-600 basic-animate">
          Software Engineer and also a Design Enthusiast based in Jakarta.
          Available for freelance and collaborations.
        </Title>
        <Text
          size="lg"
          className="mt-32 mobile__mt-22 mobile__font-18 font-20 font-500 basic-animate-1"
        >
          Hi 👋, I'm a Software Engineer - Front-end with 2 years of proven
          experience in helping to create and maintain a better code base for
          re-usability and best practices. Experience in developing projects
          from concept to launch. Eager to tackle more complex problems, and
          continues to find ways to maximize user efficiency
        </Text>
        <Button
          variant="default"
          size="lg"
          mobileSize="md"
          className="mt-102 mobile__mt-32 basic-animate-2"
        >
          Get started to my open-sources
        </Button>
        <Button
          variant="outline"
          size="lg"
          mobileSize="md"
          className="basic-animate-3"
        >
          Learn more about Ommi Putera
        </Button>
      </LeftContent>
      <RightContent className="mt-32 mobile__mt-102">
        <img
          className="profileImg basic-animate-2"
          src="/assets/image/profile.jpeg"
          alt=""
        />
        <Text
          size="lg"
          className="mt-32 mobile__mt-22 mobile__font-16 font-20 font-500 basic-animate-1"
        >
          Jakarta, Indonesia. <div className="line" /> Ommi Putera karunia
          <br />
          omiputrakarunia@gmail.com <div className="line" /> +6289508182045
        </Text>
        <Button
          variant="default"
          size="lg"
          mobileSize="md"
          className="mt-32 mobile__mt-32 basic-animate-3"
        >
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
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 1400px) {
    flex-direction: row;
  }
`

const LeftContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 1400px) {
    padding-right: 10px;
    width: 55%;
    text-align: left;
    align-items: flex-start;
  }
`

const RightContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

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

  @media (min-width: 1400px) {
    width: 45%;
    text-align: right;
    align-items: flex-end;
  }
`

export default HeroSection
