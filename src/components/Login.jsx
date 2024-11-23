import React, { useState } from 'react';
import { loginUser, saveToken } from '../services/authService';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const token = await loginUser({ email, password });
      saveToken(token);

      console.log('Login successful. JWT:', token);
      window.location.href = '/dashboard'; 
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Inicio de sesión</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Tu email"
          />
          <label>Contraseña:</label>
          <div className="password-container">
            <input 
              type={showPassword ? "text" : "password"} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Tu contraseña"
            />
            <button
              type="button"
              className="show-password-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button type="submit" className="login-btn">Entrar</button>
        </form>
        <a href="/forgot-password" className="forgot-password-link">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  );
};

export default Login;
