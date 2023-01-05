import {Container} from '@mantine/core'
import {IconArrowBack} from '@tabler/icons'
import clsx from 'clsx'
import {Link, Outlet, useLocation} from 'react-router-dom'
import {CONTAINER_SIZE, ICON_SIZE} from '../../defaultVariable'
import useMode from '../../hooks/useMode'
import {ROUTES} from '../../routes'
import {useNavigation} from '../../store/rootStore'
import Footer from './Footer'
import Header from './Header'
import {WrapperDropdownNav, WrapperLayout} from './styled'

interface IRouteArray {
  handleClick?: () => void
  withCloseBtn?: boolean
}

function DefaultLayout() {
  const {mode} = useMode()
  const {isOpen} = useNavigation()
  return (
    <WrapperLayout>
      {mode === 'dark' && (
        <img
          className="bg"
          src="/assets/image/darkHeroBg.jpg"
          width="100%"
          alt=""
        />
      )}
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
      <RouteArray handleClick={handleClick} withCloseBtn={true} />
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
          <li className={pathname === path ? 'match' : ''}>
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

export {DefaultLayout, RouteArray}
