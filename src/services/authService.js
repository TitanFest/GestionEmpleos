// services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; // Cambia esto a la URL de tu API

// Función para iniciar sesión y obtener el token
export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('Login failed');
    }

    return response.data.token; // Retorna el token JWT
};

// Función para guardar el JWT en localStorage
export const saveToken = (token) => {
    localStorage.setItem('token', token);
};

// Función para obtener el JWT desde localStorage
export const getToken = () => {
    return localStorage.getItem('token');
};

// Función para eliminar el token (Logout)
export const logout = () => {
    localStorage.removeItem('token');
};

// Función para obtener todos los usuarios (requiere autenticación)
export const getAllUsers = async () => {
    const token = getToken(); // Obtén el token del localStorage
    const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` }, // Incluye el token en el encabezado
    });
    return response.data; // Retorna la lista de usuarios
};
