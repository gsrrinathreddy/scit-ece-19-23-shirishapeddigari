import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';

import{BrowserRouter,Routes,Route} from "react-router-dom";
import AboutUs from './Pages/AboutUs';
import Experience from './Pages/Experience';
import Qualifications from './Pages/Qualifications';
import Skills from './Pages/Skills';
import Certifications from './Pages';
import Hobbies from './Pages/Hobbies';
import Projects from './Pages/Projects';
import Workshops from './Pages/Workshops';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Navbar/>
<Routes>
    <Route path="AboutUs" element={<AboutUs/>}/>
    <Route path="Experience" element={<Experience/>}/>
    <Route path="Qualifications" element={<Qualifications/>}/>
    <Route path="Skills" element={<Skills/>}/>
    <Route path="Certifications" element={<Certifications/>}/>
    <Route path="Hobbies" element={<Hobbies/>}/>
    <Route path="Projects" element={<Projects/>}/>
    <Route path="Workshops" element={<Workshops/>}/>
  
</Routes>
</BrowserRouter>
</div>
 );
}

export default App;
