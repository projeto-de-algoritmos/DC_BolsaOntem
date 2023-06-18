import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../views/homepage/index'
import AskForValue from '../views/askForValue/index'
import ShowAcoes from '../views/showAcoes/index'
import React from 'react'

function Directions() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AskForValue" element={<AskForValue />} />
          <Route path="/ShowAcoes" element={<ShowAcoes />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Directions