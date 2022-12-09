import {ActionIcon, Container} from '@mantine/core'
import {IconMenu2, IconMoon, IconSunHigh, IconX} from '@tabler/icons'
import {Link} from 'react-router-dom'
import {RouteArray} from '.'
import {
  BUTTON_MODE_SIZE,
  CONTAINER_SIZE,
  ICON_SIZE,
} from '../../defaultVariable'
import useMode from '../../hooks/useMode'
import {useNavigation} from '../../store/rootStore'
import {
  DesktopNav,
  LeftContent,
  Logo,
  RightContent,
  WrapperHeader,
} from './styled'

function Header() {
  return (
    <WrapperHeader>
      <Container size={CONTAINER_SIZE}>
        <LeftContent className="align-center">
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

export default Header
