// CSS
import './App.css'

// React
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'

// Components
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
