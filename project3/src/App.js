import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  Home from './pages/Home';
import  Downloads  from './pages/Downloads';
import Library  from './pages/Library';
import  Subscription from './pages/Subscription';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path ="Home" element={<Home/>}/>
        <Route path ="Downloads" element={<Downloads/>}/>

        <Route path ="Library" element={<Library/>}/>

        <Route path ="Subscription" element={<Subscription/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
