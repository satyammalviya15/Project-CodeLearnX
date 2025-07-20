import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NewState from './context/Newstate';
import './App.css'
import CTA from './pages/cta'
import Features from './pages/features'
import Footer from './pages/footer'
import Hero from './pages/Hero'
import Navbar from './pages/navbar'

function App() {
  return (
    <>
    <NewState>
    <Router>
        <Routes>
          <Route path="/" element={<>
                                <Navbar/>
                                <Hero/>
                                <Features/>
                                <CTA/>
                                <Footer/>
                                </>} />
          <Route path="/login" element={<>
                                <Navbar/>
                                <h1>Login Page</h1>
                                </>} />
          <Route path="/signup" element={<>
                                <Navbar/>
                                <h1>Signup Page</h1>
                                </>} />
        </Routes>
    </Router>
    </NewState>
    </>
  )
}

export default App
