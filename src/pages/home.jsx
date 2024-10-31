import React, { useState } from 'react';
import { loginUser, saveToken } from '../services/authService';
import '../styles/Login.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);  // Para manejar errores

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);  // Limpiar errores previos

    try {
      // Enviar credenciales y obtener el token
      const token = await loginUser({ email, password });
      
      // Guardar el token en localStorage
      saveToken(token);

      console.log('Login successful. JWT:', token);
      // Redirigir a la página protegida
      window.location.href = '/dashboard';  // Cambia esto por la ruta que desees
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Home</button>
      </form>
    </div>
  );
};

export default Home;