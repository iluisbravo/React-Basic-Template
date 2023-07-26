import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'
import FloatingMenu from './components/FloatingMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <FloatingMenu />
    </>
  )
}

export default App
