import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import './components/Login.css';
import WelcomeHome from './components/WelcomeHome';
import DiscountedToy from './components/DiscountedToy';

function App() {
  return (
    <Router>
      <div>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/welcome" element={<WelcomeHome />} />
            <Route path="/discount" element={<DiscountedToy />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
