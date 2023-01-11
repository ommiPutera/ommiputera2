import React from 'react'
import Loadable from 'react-loadable'
import {About, Dashboard} from '../App'
interface IRouteObject {
  path: string
  label: string
  index?: boolean
  children?: React.ReactNode
  element?: JSX.Element
  handlePreload?: () => void
}

const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: () => <></>,
})

export const ROUTES: IRouteObject[] = [
  {
    label: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    label: 'About',
    path: '/about',
    element: <About />,
  },
  {
    label: 'Dashboard',
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    label: 'Project',
    path: '/project',
    element: <Dashboard />,
  },
  {
    label: 'Contact',
    path: '/contact',
    element: <Dashboard />,
  },
]

export const APP_ROUTES: IRouteObject[] = [
  {
    label: 'Home',
    path: '/',
    index: true,
    element: <Home />,
  },
  {
    label: 'About',
    path: '/about',
    element: <About />,
  },
  {
    label: 'Dashboard',
    path: '/dashboard',
    element: <Dashboard />,
  },
]
