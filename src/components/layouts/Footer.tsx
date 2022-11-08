import clsx from 'clsx'
import React from 'react'
import styled from 'styled-components'
import {useNavigation} from '../../store/rootStore'
import {LeftContent, RightContent} from '.'
import {Container} from '@mantine/core'
import {CONTAINER_SIZE} from '../../defaultVariable'

function Footer() {
  const {isOpen} = useNavigation()
  return (
    <WrapperFooter className={clsx(isOpen ? 'nav__open' : '')}>
      <Container size={CONTAINER_SIZE}>
        <LeftContent>
          <span>Logo</span>
        </LeftContent>
        <RightContent>
          <span>Logo</span>
        </RightContent>
      </Container>
    </WrapperFooter>
  )
}

const WrapperFooter = styled.footer`
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
