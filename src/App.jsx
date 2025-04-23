
 import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
 import Home from './Files/Home'
 import "./App.css"
 import Navbar from "./components/Navbar"
 import About from './Files/About'
 import Contact from './Files/Contact'
 import ProjectsWithNav from './Files/ProjectsWithNav'
 import Demo from './components/Demo'
 import User from './components/User'

function App() {
  

  return (
   <Router>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/About" element={<About/>} />
       <Route path="/Projects" element={<ProjectsWithNav/>} />
       <Route path="/Contact" element={<Contact/>} />
       <Route path="/Demo" element={<Demo/>} />
       <Route path="/User" element={<User/>} />
       

    </Routes>

   </Router>
  )
}

export default App

