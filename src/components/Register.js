import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [formData, setFormData] = useState({username: '', email: '', password:''});
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Données envoyées :', formData);

        try{
            const res = await axios.post('http://localhost:5000/register', formData)
            console.log('Réponse de l\'API:', res);
            alert('inscrit !!');
            navigate('/banqueimages/login');
        }
        catch(err){
            alert(err.response.data.error || 'une erreur est survenue')
        }
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nom d'utilisateur" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Mot de passe" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">S'inscrire</button>
    </form>
        </div>
    );
};

export default Register;