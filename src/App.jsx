
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Navegacion from './components/Navegacion'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'


function App() {

  return (
    <>
      <Navegacion />
      <Home />
      <Login />
      <Register />
      <Footer />
    </>
  )
}

export default App
