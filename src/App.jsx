import { Route, Routes } from 'react-router-dom'
import './App.css'
import ErrorZone from './pages/ErrorZone'
import Home from './pages/Home'
import GrievanceForm from './pages/GrievanceForm'
import About from './pages/About'
import Footer from './layout/Footer'
import Contact from './pages/Contact'



function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/grievance' element={<GrievanceForm/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<ErrorZone/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
