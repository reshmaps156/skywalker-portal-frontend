import { Route, Routes } from 'react-router-dom'
import './App.css'
import ErrorZone from './pages/ErrorZone'
import Home from './pages/Home'


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<ErrorZone/>}/>

      </Routes>
    </>
  )
}

export default App
