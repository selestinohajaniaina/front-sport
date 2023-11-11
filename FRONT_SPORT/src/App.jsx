import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashbord'
import Entrainer from './pages/Entrainer'
import Regime from './pages/Regime'
import Accessoire from './pages/Accessoire'

import './App.css'

function App() {

    return (
        <Router>
        <Routes>
            <Route path='/' element={ <FirstPage/> } />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path='/entrainer' element={<Entrainer/>}/>
            <Route path='/regime' element={<Regime/>}/>
            <Route path='/accessoire' element={<Accessoire/>}/>
        </Routes>
        </Router>
    )
    }

export default App
