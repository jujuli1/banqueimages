import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {
    const [formData, setFormData] = useState({email:'',password:''});
    const navigate = useNavigate();

    const handleSubmit= async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:5000/login', formData)
            alert('t es co');
            localStorage.setItem('token', res.data.token);
            if (res.status === 200) {
                onLoginSuccess(); // Notifie que l'utilisateur est connecté
                navigate('/banqueimages'); // Redirige vers la page Certif
              }
        } catch(err) {
            alert(err.response.data.error || 'error ! erroooooor !!')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Mot de passe" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Se connecter</button>
    </form>
        </div>
    );
};

export default Login;