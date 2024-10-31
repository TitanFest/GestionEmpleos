import React, { useState } from 'react';
import '../styles/registro.css';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [documento, setDocumento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null); // Para manejar errores

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Limpiar errores previos

    // Validación de contraseña
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Lógica para enviar el formulario de registro aquí
    console.log({
      nombre,
      apellido,
      documento,
      telefono,
      email,
      password,
    });
  };

  return (
    <div className="registro-container">
      <h2>Registro</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required 
        />
        
        <label>Apellido:</label>
        <input 
          type="text" 
          value={apellido} 
          onChange={(e) => setApellido(e.target.value)} 
          required 
        />

        <label>Documento:</label>
        <input 
          type="text" 
          value={documento} 
          onChange={(e) => setDocumento(e.target.value)} 
          required 
        />

        <label>Teléfono:</label>
        <input 
          type="tel" 
          value={telefono} 
          onChange={(e) => setTelefono(e.target.value)} 
          required 
        />

        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label>Contraseña:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <label>Confirmar Contraseña:</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
