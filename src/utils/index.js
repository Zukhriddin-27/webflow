import React from 'react'
import useId from '../hooks/useId'
import Home from '../page/Home'
// import About from '../page/About'
import Pricing from '../page/Pricing'
import Merchants from '../page/Merchants'
import Agencies from '../page/Agencies'
import MarketingPage from '../page/Marketing'
import About from '../page/hbface'
export const navbar = [
  {
    id: useId,
    element: <Home />,
    title: 'Home',
    path: '/home',
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <About />,
    title: 'About',
    path: '/about',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <p>Blog</p>,
    title: 'Blog',
    path: '/blog',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Pricing />,
    title: 'Pricing',
    path: '/pricing',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Merchants />,
    title: 'Merchants',
    path: '/merchants',
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <Agencies />,
    title: 'Agencies',
    path: '/agencies',
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <MarketingPage />,
    title: 'Marketing',
    path: '/marketing',
    private: false,
    hidden: true,
  },

  {
    id: useId,
    element: <h1>Schedule a Demo</h1>,
    title: 'Schedule a demo',
    path: '/demo',
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Start free trial</h1>,
    title: 'Start free trial',
    path: '/start-free-trial',
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Sign in</h1>,
    title: 'Sign In',
    path: '/signin',
    private: false,
    hidden: true,
  },
  // {
  //   id: useId,
  //   element: <Hbface />,
  //   title: 'HBFace',
  //   path: '/hbface',
  //   private: false,
  //   hidden: true,
  // },
]
