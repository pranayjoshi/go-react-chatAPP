import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Chat from './layout/chat'

function App() {

  return (
    <>
      <div className=" dark:bg-gray-900 bg-gray-100">
        <BrowserRouter>
          <Routes>
          <Route path="/"  element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
