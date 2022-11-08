import {Container} from '@mantine/core'
import {IconArrowBack} from '@tabler/icons'
import clsx from 'clsx'
import {Link, Outlet} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import {ICON_SIZE, CONTAINER_SIZE} from '../../defaultVariable'
import {ROUTES} from '../../routes'
import {useNavigation} from '../../store/rootStore'
import Footer from './Footer'
import Header from './Header'

function DefaultLayout() {
  const {isOpen} = useNavigation()
  return (
    <WrapperLayout>
      <Header />
      <DropdownNav />
      <Container size={CONTAINER_SIZE}>
        <div className={clsx('children ', isOpen ? 'nav__open' : '')}>
          <Outlet />
        </div>
      </Container>
      <Footer />
    </WrapperLayout>
  )
}

function DropdownNav() {
  const {isOpen, setIsOpen} = useNavigation()
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <WrapperDropdownNav className={`${isOpen ? 'open' : 'closed'}`}>
      {getRouteArray(handleClick, true)}
    </WrapperDropdownNav>
  )
}

function getIcon(type: string) {
  switch (type) {
    case 'x':
      return <IconArrowBack className="close__icon" size={ICON_SIZE} />
    default:
  }
}

function getRouteArray(handleClick?: () => void, withCloseBtn?: boolean) {
  return (
    <ul>
      {ROUTES.map(({path, label}) => (
        <Link key={path} to={path || '/'} onClick={handleClick}>
          <li>
            {label}
            <div />
          </li>
        </Link>
      ))}
      {withCloseBtn && (
        <li onClick={handleClick}>
          <div className="close__btn">{getIcon('x')} Back to content</div>
        </li>
      )}
    </ul>
  )
}

const growDown = keyframes`
    0% {
        transform: rotateX(16deg)
    }
    70% {
        transform: rotateX(8deg) 
    }
    100% {
        transform: rotateX(0deg) 
    }
  
`

const WrapperLayout = styled.div`
  .children {
    min-height: 100vh;
  }
  .nav__open {
    filter: blur(2px);
  }
`

const LeftContent = styled.div`
  width: 50%;
  text-align: left;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 34px;
`

const RightContent = styled.div`
  width: 50%;
  text-align: right;
  display: flex;
  justify-content: end;
  align-items: center;
`

const WrapperDropdownNav = styled.nav`
  width: 100%;
  position: absolute;
  z-index: 9999;

  &.open {
    display: block;
  }
  &.closed {
    display: none;
  }

  ul {
    width: 100%;
    max-height: 100vh;
    overflow: scroll;
    animation: ${growDown} 200ms ease;
    transform-origin: top center;

    li {
      padding: 24px 16px;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      border-bottom: 1px solid
        ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[8] : colors.dark[2]};

      background-color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[9] : colors.dark[0]};
      &:active {
        background-color: ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[8] : colors.dark[2]};
      }
    }
    li > .close__btn {
      border: 1.5px solid
        ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[2] : colors.dark[8]};
      color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[2] : colors.dark[8]};
      border-radius: 36px;
      margin: 0 36px;
      padding: 14px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }
`

export {LeftContent, RightContent, DefaultLayout, getRouteArray}
