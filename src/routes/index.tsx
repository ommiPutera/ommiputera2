import React from 'react'
import {About, Dashboard} from '../App'
import Home from '../pages/Home'

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
