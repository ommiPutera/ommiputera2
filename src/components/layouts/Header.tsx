import useMode from '../../hooks/useMode'
import {ActionIcon, Container} from '@mantine/core'
import {IconMoon, IconSunHigh, IconMenu2, IconX} from '@tabler/icons'
import styled from 'styled-components'
import {useNavigation} from '../../store/rootStore'
import {LeftContent, RightContent, RouteArray} from '.'
import {Link} from 'react-router-dom'
import {
  BUTTON_MODE_SIZE,
  CONTAINER_SIZE,
  ICON_SIZE,
} from '../../defaultVariable'

function Header() {
  return (
    <WrapperHeader>
      <Container size={CONTAINER_SIZE}>
        <LeftContent>
          <Logo>
            <Link to="/">&#x1F981; Ommi Putera</Link>
          </Logo>
          <DesktopNav className="desktop__nav">
            <RouteArray />
          </DesktopNav>
        </LeftContent>
        <RightContent>
          <NavButton />
          <ModeButton />
        </RightContent>
      </Container>
    </WrapperHeader>
  )
}

const Logo = styled.nav`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  cursor: pointer;

  a {
    font-weight: 700;
    font-size: 18px;
    font-family: 'Space Grotesk', sans-serif;
  }
`

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

const DesktopNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin-left: 48px;

    li {
      margin: 5px 18px 0 18px;
      font-size: 14px;
      font-weight: 700;
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
        color: ${({theme: {colors}}) => colors.danger[9]};
        div {
          transition: 0.2s ease-out;
          width: 100%;
          background-image: linear-gradient(
            to right,
            ${({theme: {colors, mode}}) =>
              mode === 'dark' ? colors.danger[9] : colors.danger[9]},
            ${({theme: {colors, mode}}) =>
              mode === 'dark' ? colors.warning[6] : colors.warning[6]}
          );
        }
      }
    }
  }
`

const WrapperHeader = styled.header`
  padding: 32px 12px;
  border-bottom: 1px solid
    ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[8] : colors.dark[1]};

  > div {
    display: flex;
  }

  .btn {
    background-color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[7] : colors.dark[0]};
    &:hover,
    &:active {
      background-color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[8] : colors.dark[2]};
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

  @media (min-width: 1600px) {
    padding: 32px 0;

    .nav__btn {
      display: none;
    }
    .desktop__nav {
      display: block;
    }
  }
`

export default Header
