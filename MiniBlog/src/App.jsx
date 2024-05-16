// CSS
import './App.css'

// React
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

// Firebase
import { onAuthStateChanged } from 'firebase/auth'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import CreatePost from './pages/CreatePost/CreatePost'
import Dashboard from './pages/Dashboard/Dashboard'

// Components
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

// Context
import { AuthProvider } from './context/AuthContext'

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <AuthProvider value={ user }>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={ user ? <Navigate to="/" /> : <Login />} />
            <Route path='/cadastro' element={ user ? <Navigate to="/" /> : <Cadastro />} />
            <Route path='/post/create' element={ user ? <CreatePost /> : <Navigate to="/" />} />
            <Route path='/dashboard' element={ user ? <Dashboard /> : <Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
