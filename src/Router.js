import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navbar from './components/NavigationBar';
import Quote from './components/hook';

function RouterNav() {
  return (
    <>
      <BrowserRouter className="app-container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default RouterNav;
