import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpg from './Component/Loginpg';
import Aapp from './Aapp';

const Haasapp = () => {
  return (
        <Router>
            <Routes>
                <Route path='/' element={<Loginpg/>} />
                <Route path='/home' element={<Aapp/>}/>
            </Routes>
        </Router>
  );
};

export default Haasapp;