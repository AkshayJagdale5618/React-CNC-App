import React from 'react';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './Component/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <div className='app'>
        <Routes>
          <Route path='/' element={<Homepage />}/> 
          <Route path='/learn' element={<h1>Learn Page</h1>}/> 
          <Route path='/reference' element={<h1>Reference Page</h1>}/> 
          <Route path='/coummunity' element={<h1>Coummunity Page</h1>}/> 
          <Route path='/ourcoummunity' element={<h1>OurCoummunity Page</h1>}/> 
          <Route path='/mycoummunity' element={<h1>My Coummunity Page</h1>}/> 
          <Route path='/blog' element={<h1>Blog Page</h1>}/> 
          <Route path='/git' element={<h1>Git Page</h1>}/> 
          <Route path='/github' element={<h1>Github Page</h1>}/> 
          <Route path='/Register' element={<h1>Register Page</h1>}/> 
        </Routes>

      </div>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
