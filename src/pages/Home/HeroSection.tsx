import {Text, Title} from '@mantine/core'
import {Link as LinkScroll} from 'react-scroll'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import useMode from '../../hooks/useMode'

function HeroSection() {
  const {mode} = useMode()
  return (
    <Wrapper>
      <LeftContent className="mobile-mt-102">
        <Title className="font-38 mobile-font-28 font-500 basic-animate">
          🎯 Helping brands and products to stand out in the digital era.
        </Title>
        <Text
          size="lg"
          className="mt-32 mobile-mt-22 mobile-font-18 font-28 font-500 basic-animate-1"
          color={mode === 'dark' ? 'dark.4' : 'dark.6'}
        >
          Software Engineer available for freelance and collaborations.
        </Text>
        <ScrollTo to="projects">
          <Button
            variant="default"
            size="lg"
            mobileSize="md"
            position="left mobile-center"
            className="mt-88 mobile-mt-32 basic-animate-2"
          >
            Some of my projects
          </Button>
        </ScrollTo>
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
        <ScrollTo to="emails" isSmooth={false}>
          <Button
            variant="default"
            size="lg"
            mobileSize="md"
            position="right mobile-center"
            className="mt-88 mobile-mt-32 basic-animate-3"
          >
            Send me email?
          </Button>
        </ScrollTo>
        <ScrollTo to="services">
          <Button
            variant="outline"
            size="lg"
            mobileSize="md"
            position="right mobile-center"
            className="mt-12 mobile-mt-32 basic-animate-3"
          >
            Scroll down.. 👇
          </Button>
        </ScrollTo>
      </RightContent>
    </Wrapper>
  )
}

function ScrollTo({
  children,
  to,
  isSmooth = true,
}: {
  children: React.ReactNode
  to: string
  isSmooth?: boolean
}) {
  return (
    <LinkScroll
      activeClass="active"
      to={to}
      smooth={isSmooth}
      offset={-30}
      duration={500}
    >
      {children}
    </LinkScroll>
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
    padding-top: 20px !important;
    padding-bottom: 80px !important;
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
