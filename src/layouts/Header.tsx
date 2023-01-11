import {ActionIcon, Container} from '@mantine/core'
import {IconMenu2, IconX} from '@tabler/icons'
import {Link, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {RouteArray} from '.'
import {BUTTON_MODE_SIZE, HEADER_SIZE, ICON_SIZE} from '../defaultVariable'
import useMode from '../hooks/useMode'
import {useNavigation} from '../store/rootStore'
import {getIconMode} from '../utils/getIcon'
import {
  CenterContent,
  growDown,
  LeftContent,
  RightContent,
} from './sharedStyled'

function Header() {
  return (
    <WrapperHeader>
      <Container size={HEADER_SIZE} className="container">
        <LeftContent className="align-center">
          <OmmiLogo />
        </LeftContent>
        <CenterContent>
          <DesktopNavigation className="desktop__navigation">
            <RouteArray />
          </DesktopNavigation>
        </CenterContent>
        <RightContent>
          <ModeButton />
          <NavButton />
        </RightContent>
      </Container>
    </WrapperHeader>
  )
}

function OmmiLogo() {
  const {pathname} = useLocation()
  return (
    <Logo>
      <Link to="/" className={pathname === '/' ? 'match__home' : ''}>
        <div>ommiputera.com</div>
      </Link>
    </Logo>
  )
}

function ModeButton() {
  const {onHandleMode, mode} = useMode()
  return (
    <ActionIcon
      className="theme__btn btn"
      size={BUTTON_MODE_SIZE}
      radius="xl"
      onClick={onHandleMode}
    >
      {getIconMode(mode)}
    </ActionIcon>
  )
}

function NavButton() {
  const {isOpen, setIsOpen} = useNavigation()
  return (
    <ActionIcon
      className="nav__btn btn"
      size={BUTTON_MODE_SIZE}
      radius="xl"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <IconX className="menu__icon" size={ICON_SIZE} />
      ) : (
        <IconMenu2 className="menu__icon" size={ICON_SIZE} />
      )}
    </ActionIcon>
  )
}

const WrapperHeader = styled.header`
  padding: 12px 0;

  > div {
    display: flex;
  }

  > .container {
    padding: 0 20px;
  }

  .btn {
    &:hover,
    &:active {
      background-color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[8] : colors.dark[1]};
    }
  }

  .theme__btn {
    margin-right: 12px;
    .sun__icon {
      color: ${({theme: {colors}}) => colors.dark[3]};
    }
    .moon__icon {
      color: ${({theme: {colors}}) => colors.dark[8]};
    }
    :active {
      .sun__icon,
      .moon__icon {
        animation: ${growDown} 300ms ease-in-out;
      }
    }
  }
  .nav__btn {
    .menu__icon {
      color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[2] : colors.dark[8]};
    }
  }

  .desktop__navigation {
    display: none;
  }

  @media (min-width: 1400px) {
    padding: 12px 0;
    margin-bottom: 102px;

    > .container {
      padding: 0;
    }

    .nav__btn {
      display: none;
    }
    .desktop__navigation {
      display: block;
    }
  }
`
const Logo = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  height: 100%;

  a {
    font-weight: 600;
    font-size: 20px;
    color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[4] : colors.dark[5]};

    :hover,
    &.match__home {
      color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[0] : colors.dark[9]};
    }

    @media (min-width: 1400px) {
      font-size: 23px;
    }
  }
`
const DesktopNavigation = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      margin: 10px 18px 0 18px;
      font-size: 15px;
      font-weight: 600;
      letter-spacing: -0.1px;
      text-decoration: none;
      color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[4] : colors.dark[5]};
      div {
        width: 0;
        height: 2.5px;
        margin: 0 auto;
        border-radius: 20px;
      }

      :hover {
        color: ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[0] : colors.dark[9]};
      }
      &.match__path {
        color: ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[0] : colors.dark[9]};
        div {
          transition: 0.2s linear;
          width: 100%;
          background: ${({theme: {colors, mode}}) =>
            mode === 'dark' ? colors.dark[0] : colors.dark[9]};
        }
      }
    }
  }
`

export default Header
