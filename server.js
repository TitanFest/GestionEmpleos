// server.js

const express = require('express');
const { testConnection, sequelize } = require('./database'); // Importa la función de prueba y Sequelize
require('dotenv').config();
const User = require('./models/User'); // Importa el modelo de Usuario (a crear en el siguiente paso)
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000', // URL del frontend en desarrollo
    credentials: true
}));

app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API!');
});

// Middleware para manejar rutas de usuarios
app.use('/api/users', require('./routes/users')); // Asegúrate de crear este archivo

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Algo salió mal!');
});

// Sincroniza los modelos con la base de datos y inicia el servidor
const startServer = async () => {
    try {
        await testConnection();
        await sequelize.sync({ alter : true /*, force : true*/ }); // Sincroniza todos los modelos
        console.log('Modelos sincronizados con la base de datos.');
        
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
};

startServer();
