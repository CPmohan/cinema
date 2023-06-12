import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Login from './components/Login';
import Signup from './components/signup';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
