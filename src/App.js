import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/Main';
import About from './components/About';
import TodoLogo from './components/TodoLogo';
import './App.css';

function App() {

  return (
 
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/TodoLogo" element={<TodoLogo />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/main" element={<Main />} />
           
      </Routes>
    </BrowserRouter>

  );
}


export default App;
