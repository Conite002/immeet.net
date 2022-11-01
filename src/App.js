import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar  from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<Home/>} />
        <Route path='skills' element={<Skills/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='services' element={<Services/>} />
        <Route path='about' element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
