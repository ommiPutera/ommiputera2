import React from 'react'
import {About} from '../App'
import Blog from '../pages/Blog'
import BlogSection from '../pages/Blog/BlogSection'
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
    label: 'Blog',
    path: '/blog',
    element: <Blog />,
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
    label: 'Blog',
    path: '/blog',
    element: <Blog />,
  },
  {
    label: 'Blog',
    path: '/blog/:blogId',
    element: <BlogSection />,
  },
]
