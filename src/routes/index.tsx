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
    label: 'Home',
    path: '/',
    index: true,
    element: <LoadableHome />,
    handlePreload: preloadHome,
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

function preloadHome() {
  return LoadableHome.preload()
}
