import {Text, Title} from '@mantine/core'
import styled from 'styled-components'
import {Button} from '../../components/Button'

function HeroSection() {
  return (
    <Wrapper>
      <LeftContent className="mobile-mt-102">
        <Title className="font-38 mobile-font-28 font-600 basic-animate">
          Software Engineer and also a Design Enthusiast based in Jakarta.
          Available for freelance and collaborations.
        </Title>
        <Text
          size="lg"
          className="mt-32 mobile-mt-22 mobile-font-18 font-20 font-500 basic-animate-1"
        >
          Hi👋 I'm a Software Engineer - Front-end with 2 years of proven
          experience in helping to create and maintain a better code base for
          re-usability and best practices. Experience in developing projects
          from concept to launch.
        </Text>
        <Button
          variant="default"
          size="lg"
          mobileSize="md"
          className="mt-102 mobile-mt-32 basic-animate-2"
        >
          Some of my projects
        </Button>
        <Button
          variant="outline"
          size="lg"
          mobileSize="md"
          className="basic-animate-3"
        >
          Everything about me
        </Button>
      </LeftContent>
      <RightContent className="mobile-mt-102">
        <img
          className="profile__image basic-animate-2"
          src="/assets/image/profile.jpeg"
          alt=""
        />
        <Text
          size="lg"
          className="mt-32 mobile-mt-22 mobile-font-16 font-20 font-500 basic-animate-1"
        >
          Jakarta, Indonesia. <div className="line__" /> Ommi Putera karunia
          <br />
          omiputrakarunia@gmail.com <div className="line__" /> +6289508182045
        </Text>
        <Button
          variant="default"
          size="lg"
          mobileSize="md"
          className="mt-32 mobile-mt-32 basic-animate-3"
        >
          Send me email?
        </Button>
      </RightContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`

const LeftContent = styled.div`
  order: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 1000px) {
    order: 1;
    width: 50%;
    text-align: left;
    align-items: flex-start;
  }
`

const RightContent = styled.div`
  order: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  .profile__image {
    width: 230px;
    height: 230px;
    border-radius: 50%;
  }

  .line__ {
    display: inline-block;
    height: 25px;
    margin: 0 6px -6.5px 6px;
    width: 1px;
    background: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[2] : colors.dark[8]};
  }

  @media (min-width: 1000px) {
    order: 2;
    width: 50%;
    text-align: right;
    align-items: flex-end;
  }
`

export default HeroSection
