import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './Componentes/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header nombre="empresa" dir='calle'></Header>
      
     
    </div>
  )
}

export default App
