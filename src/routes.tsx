import React from "react";
import { Home, About, Dashboard } from "./App";

interface IRouteObject {
  path?: string;
  label?: string;
  index?: boolean;
  children?: React.ReactNode;
  element?: JSX.Element;
}

export const ROUTES: IRouteObject[] = [
  {
    label: "Home",
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    label: "About",
    path: "/about",
    element: <About />,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
];
