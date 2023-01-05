import {ActionIcon, Container} from '@mantine/core'
import {IconMenu2, IconMoon, IconSunHigh, IconX} from '@tabler/icons'
import {Link, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {RouteArray} from '.'
import {BUTTON_MODE_SIZE, HEADER_SIZE, ICON_SIZE} from '../../defaultVariable'
import useMode from '../../hooks/useMode'
import {useNavigation} from '../../store/rootStore'
import Info from './Info'
import {LeftContent, CenterContent, RightContent, growDown} from './styled'

function Header() {
  const {pathname} = useLocation()
  return (
    <>
      <Info />
      <WrapperHeader>
        <Container size={HEADER_SIZE}>
          <LeftContent className="align-center">
            <Logo>
              <Link to="/" className={pathname === '/' ? 'match' : ''}>
                <div>ommiputera.com</div>
              </Link>
            </Logo>
          </LeftContent>
          <CenterContent>
            <DesktopNav className="desktop__nav">
              <RouteArray />
            </DesktopNav>
          </CenterContent>
          <RightContent>
            <NavButton />
            <ModeButton />
          </RightContent>
        </Container>
      </WrapperHeader>
    </>
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

function getIconMode(mode: string) {
  switch (mode) {
    case 'dark':
      return <IconSunHigh className="sun__icon" size={ICON_SIZE} />
    case 'light':
      return <IconMoon className="moon__icon" size={ICON_SIZE} />
    default:
  }
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

  .btn {
    &:hover,
    &:active {
      background-color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[8] : colors.dark[1]};
    }
  }

  .theme__btn {
    margin-left: 12px;
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

  .desktop__nav {
    display: none;
  }

  @media (min-width: 1400px) {
    padding: 32px 0;

    .nav__btn {
      display: none;
    }
    .desktop__nav {
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
    font-weight: 500;
    font-size: 22px;
    color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[4] : colors.dark[5]};
    line-height: 19px;

    :hover,
    &.match {
      color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[0] : colors.dark[9]};
    }
  }
`
const DesktopNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin-left: 18px;

    li {
      margin: 10px 18px 0 18px;
      font-size: 16px;
      font-weight: 500;
      text-decoration: none;
      color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[4] : colors.dark[5]};
      div {
        width: 0;
        height: 3px;
        margin-top: 2px;
        border-radius: 20px;
      }

      :hover,
      &.match {
        color: ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[0] : colors.dark[9]};
        div {
          transition: 0.2s ease-out;
          width: 100%;
          background: ${({theme: {colors, mode}}) =>
            mode === 'dark' ? colors.dark[0] : colors.dark[9]};
        }
      }
    }
  }
`

export default Header
