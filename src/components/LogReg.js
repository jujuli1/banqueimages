import React from 'react';
import { Link } from 'react-router-dom';

const LogReg = () => {
  return (
    <div>
      <h1>Bienvenue sur Banque Images</h1>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        <Link to="/banqueimages/login" style={{ textDecoration: 'none', color: 'blue' }}>
          Login
        </Link>
        <Link to="/register" style={{ textDecoration: 'none', color: 'blue' }}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default LogReg;