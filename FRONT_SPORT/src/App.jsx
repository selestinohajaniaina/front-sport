import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashbord'

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <FirstPage/> } />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
