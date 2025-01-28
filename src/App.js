
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, {useState} from 'react';
import Certif from './components/certif'
import Register from './components/Register'
import Login from './components/Login'
import LogReg from './components/LogReg';

import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LogReg />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/banqueimages/login" element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />} />
          <Route path="/register" element={<Register />} />
          {isAuthenticated ? (
            <Route path="/banqueimages" element={<Certif />} />
          ) : (
            <Route path="/banqueimages" element={<Navigate to="/banqueimages/login" replace />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
