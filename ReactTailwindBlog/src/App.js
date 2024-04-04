import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Detail from './pages/Detail';
import Tags from './pages/Tags';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/tags' element={<Tags />} />
          <Route path='/tags/:url' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route exact path="/:url" element={<Detail />} />
          <Route path="404" element={<NoPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
