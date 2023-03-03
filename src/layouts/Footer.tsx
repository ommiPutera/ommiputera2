import {Container, Text, Title} from '@mantine/core'
import clsx from 'clsx'
import styled from 'styled-components'
import {CONTAINER_SIZE} from '../defaultVariable'
import useMode from '../hooks/useMode'
import {useNavigation} from '../store/rootStore'

function SocialItem({logoUrl, to}: {logoUrl: string; to: string}) {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      <div className="social__item">
        <img src={logoUrl} alt="" />
      </div>
    </a>
  )
}

function Footer() {
  const {isOpen} = useNavigation()
  const {mode} = useMode()
  return (
    <Container size={CONTAINER_SIZE}>
      <WrapperFooter className={clsx(isOpen ? 'nav__open' : '')}>
        <Text
          size="xl"
          className="mt-32 mobile-mt-22 mobile-font-22 font-24 font-500 basic-animate-1"
        >
          Ommi Putera Karunia
        </Text>
        <Text
          size="lg"
          color={mode === 'dark' ? 'dark.3' : 'dark.6'}
          className="mt-32 mobile-font-18 font-22 font-500 basic-animate-2"
        >
          Schedule a call with me
        </Text>
        <div className="social__media mt-22">
          <SocialItem
            logoUrl="/assets/logo/github.svg"
            to="https://github.com/ommiPutera"
          />
          <SocialItem
            logoUrl="/assets/logo/instagram.svg"
            to="https://www.instagram.com/omiputera/"
          />
          <SocialItem
            logoUrl="/assets/logo/twitter.svg"
            to="https://twitter.com/Omiputera1"
          />
          <SocialItem
            logoUrl="/assets/logo/linkedin.svg"
            to="https://www.linkedin.com/in/ommiputera/"
          />
        </div>
        <Title
          color={mode === 'dark' ? 'dark.4' : 'dark.6'}
          className="mt-102 font-18 mobile-font-28 font-500 basic-animate-1"
        >
          All rights reserved © Ommi Putera Karunia 2023
        </Title>
      </WrapperFooter>
    </Container>
  )
}

export const WrapperFooter = styled.footer`
  padding: 32px 12px;
  border-top: 1px solid
    ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[8] : colors.dark[2]};

  > div {
    display: flex;
  }

  .nav__open {
    filter: blur(2px);
  }

  .social__media {
    .social__item {
      margin-right: 12px;
      background: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[0] : 'transparent'};
      padding: 5px;
      border-radius: 100%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 22px;
        height: 22px;
      }
      :hover,
      :focus,
      :active {
        cursor: pointer;
        background: ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[3] : colors.dark[2]};
      }
    }
  }

  @media (min-width: 1600px) {
    padding: 62px 0;
  }
`

export default Footer
