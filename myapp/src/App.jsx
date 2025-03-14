import Header from "./components/Header";
import './style/App.css'
import './style/Header.css'
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 

export const Myapp = () => {
  return <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<div>Page Not Found 404</div>}/>
    

    </Routes>


  </Router>
};

export default Myapp;

