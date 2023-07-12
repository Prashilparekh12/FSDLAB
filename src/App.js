import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar';


function App() {
  return (

    <div className="App">This Practical 2
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </div>

  );
 
}

export default App;
