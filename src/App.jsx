import { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import './styles/components/app.sass'

function App() {

  return (
    <>
    <div id="portifolio">
    <Sidebar />
    <MainContent />
    </div>
    </>
  )
}

export default App
