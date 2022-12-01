import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { navbar } from '../utils'
import Navbar from '../components/Navbar'
const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ path, element, id }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Route>
        <Route path='*' element={<h1>404 page not found</h1>} />
        <Route path='/' element={<Navigate to={'/home'} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root
