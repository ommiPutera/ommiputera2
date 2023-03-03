import {Container, Title} from '@mantine/core'
import clsx from 'clsx'
import styled from 'styled-components'
import {CONTAINER_SIZE} from '../defaultVariable'
import useMode from '../hooks/useMode'
import {useNavigation} from '../store/rootStore'

function Footer() {
  const {isOpen} = useNavigation()
  const {mode} = useMode()
  return (
    <WrapperFooter className={clsx(isOpen ? 'nav__open' : '')}>
      <Container size={CONTAINER_SIZE}>
        <Title
          color={mode === 'dark' ? 'dark.4' : 'dark.6'}
          className="font-18 mobile-font-28 font-500 basic-animate-1"
        >
          All rights reserved © Ommi Putera Karunia 2023
        </Title>
      </Container>
    </WrapperFooter>
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

  @media (min-width: 1600px) {
    padding: 32px 0;
  }
`

export default Footer
