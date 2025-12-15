import Home from './pages/Home';
import Nav from './components/Nav';
import Services from './pages/Services';
import Achievements from './pages/Achievements';
import Mentions from './pages/Mentions';
import Contact from './pages/Contact';
import './App.css';
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Achievements" element={<Achievements/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Mentions" element={<Mentions/>}/>
      </Routes>
    </div>
  );
}

export default App;
