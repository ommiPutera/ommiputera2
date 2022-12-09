import React from 'react'
import Loadable from 'react-loadable'
import {About, Dashboard} from '../App'

const LoadableHome = Loadable({
  loader: () => import('../pages/Home'),
  loading: () => <></>,
})

interface IRouteObject {
  path: string
  label: string
  index?: boolean
  children?: React.ReactNode
  element?: JSX.Element
  handlePreload?: () => void
}

export const ROUTES: IRouteObject[] = [
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

export const APP_ROUTES: IRouteObject[] = [
  {
    label: 'Home',
    path: '/',
    index: true,
    element: <LoadableHome />,
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
