import React from 'react'
import {About, Dashboard} from '../App'
import Home from '../pages/Home'

interface IRouteObject {
  path: string
  label: string
  index?: boolean
  children?: React.ReactNode
  element?: JSX.Element
}

export const ROUTES: IRouteObject[] = [
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
