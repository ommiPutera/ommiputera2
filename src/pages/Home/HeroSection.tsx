import {Text, Title} from '@mantine/core'
import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'
import {Button} from '../../components/Button'

function HeroSection() {
  return (
    <Wrapper>
      <LeftContent className="mobile-mt-102">
        <Title className="font-38 mobile-font-28 font-600 basic-animate">
          Software Engineer available for freelance and collaborations. Let's
          bring your ideas to life!
        </Title>
        <Text
          size="lg"
          className="mt-32 mobile-mt-22 mobile-font-18 font-20 font-500 basic-animate-1"
        >
          👋 Hello there! I'm a highly skilled Software Engineer with two years
          of experience creating and maintaining top-notch, reusable codebases.
          From conceptualization to launch, I specialize in bringing your ideas
          to life using industry best practices. Let's collaborate and create
          something amazing!
        </Text>
        <Button
          variant="default"
          size="lg"
          mobileSize="md"
          position="left mobile-center"
          className="mt-102 mobile-mt-32 basic-animate-2"
        >
          Some of my projects
        </Button>
        <Button
          variant="outline"
          size="lg"
          mobileSize="md"
          position="left mobile-center"
          className="mt-12 mobile-mt-22 basic-animate-3"
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
        <Button
          variant="default"
          size="lg"
          mobileSize="md"
          position="right mobile-center"
          className="mt-32 mobile-mt-32 basic-animate-3"
        >
          Send me email?
        </Button>
        <LinkScroll
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-10}
          duration={300}
        >
          <Button
            variant="outline"
            size="lg"
            mobileSize="md"
            position="right mobile-center"
            className="mt-12 mobile-mt-32 basic-animate-3"
          >
            Scroll down.. 👇
          </Button>
        </LinkScroll>
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
    width: 60%;
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
    width: 240px;
    height: 240px;
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
    width: 40%;
    text-align: right;
    align-items: flex-end;

    .profile__image {
      margin-right: -22px;
    }
  }
`

export default HeroSection
