import {Container} from '@mantine/core'
import clsx from 'clsx'
import {useMediaQuery} from '@mantine/hooks'
import {Link, Outlet, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {CONTAINER_SIZE} from '../defaultVariable'
import useMode from '../hooks/useMode'
import {ROUTES} from '../routes'
import {useNavigation} from '../store/rootStore'
import {getIcon} from '../utils/getIcon'
import Footer from './Footer'
import Header from './Header'
import {growDown} from './sharedStyled'

interface IRouteArray {
  handleClick?: () => void
  withCloseBtn?: boolean
}

function DefaultLayout() {
  return (
    <WrapperLayout>
      <BackgroundLayout />
      <Header />
      <MobileNavigation />
      <Container size={CONTAINER_SIZE} className="container">
        <Pages />
      </Container>
      <Footer />
    </WrapperLayout>
  )
}

function Pages() {
  const {isOpen} = useNavigation()
  return (
    <div className={clsx('children__ ', Boolean(isOpen) ? 'nav__open' : '')}>
      <Outlet />
    </div>
  )
}

function BackgroundLayout() {
  const {mode} = useMode()
  if (!Boolean(mode)) return <></>
  if (Boolean(mode === 'dark')) {
    return (
      <img
        className="background__"
        src="/assets/image/darkHeroBg.jpg"
        width="100%"
        alt=""
        style={{opacity: '18%', background: '#161513'}}
      />
    )
  } else if (Boolean(mode === 'light')) {
    return (
      <img
        className="background__"
        src="/assets/image/lightHeroBg.jpg"
        width="100%"
        alt=""
        style={{opacity: '32%'}}
      />
    )
  } else {
    return <></>
  }
}

function MobileNavigation() {
  const {isOpen, setIsOpen} = useNavigation()
  const isDesktop = useMediaQuery('(min-width: 1100px)')
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  if (isDesktop && isOpen) {
    return <RouteArray handleClick={handleClick} withCloseBtn={true} />
  }
  return (
    <WrapperMobileNavigation
      className={`${
        isOpen ? 'open__mobile__navigation' : 'close__mobile__navigation'
      }`}
    >
      <RouteArray handleClick={handleClick} withCloseBtn={true} />
    </WrapperMobileNavigation>
  )
}

function RouteArray({handleClick, withCloseBtn}: IRouteArray) {
  const {pathname} = useLocation()
  return (
    <ul>
      {ROUTES.map(({path, label, handlePreload}) => (
        <Link
          key={path}
          to={path || '/'}
          onClick={handleClick}
          onMouseOver={handlePreload}
        >
          <li className={Boolean(pathname === path) ? 'match__path' : ''}>
            {label}
            <div />
          </li>
        </Link>
      ))}
      {withCloseBtn && (
        <Link to={pathname}>
          <li onClick={handleClick} className="close__btn">
            {getIcon('x')} Back to content
            <div />
          </li>
        </Link>
      )}
    </ul>
  )
}

export const WrapperLayout = styled.div`
  > .container {
    padding: 0;
  }

  .children__ {
    min-height: 100vh;
  }
  .nav__open {
    filter: blur(2px);
    overflow: hidden;
    display: none;
  }

  .background__ {
    height: 100vh;
    z-index: -99;
    position: absolute;
    object-fit: cover;
  }

  @media (max-width: 1100px) {
    > .container {
      padding: 0 20px;
    }
  }
`

export const WrapperMobileNavigation = styled.nav`
  width: 100%;
  height: max-content;
  max-height: 100vh;
  position: absolute;
  z-index: 9999;

  &.open__mobile__navigation {
    display: block;
  }
  &.close__mobile__navigation {
    display: none;
  }

  ul {
    width: 100%;
    overflow: scroll;
    animation: ${growDown} 400ms linear;
    transform-origin: top center;

    li {
      padding: 32px 16px;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[4] : colors.dark[4]};
      border-bottom: 1px solid
        ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[8] : colors.dark[2]};

      background-color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[9] : colors.dark[1]};
      &:active {
        background-color: ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[8] : colors.dark[2]};
      }

      &.match__path {
        color: ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[0] : colors.dark[9]};
      }
    }
  }
  .close__btn {
    padding: 32px 0;
    color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[2] : colors.dark[8]};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    div {
      border: 1px solid
        ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[2] : colors.dark[8]};
      border-radius: 50px;
      position: absolute;
      content: '';
      width: 70%;
      height: 60%;
      background: none;
    }
  }
`

export {DefaultLayout, RouteArray}
