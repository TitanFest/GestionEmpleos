// middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Obtener el token del encabezado

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado, token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verificar el token
        req.user = decoded; // Almacenar la información del usuario en la solicitud
        next(); // Pasar al siguiente middleware o ruta
    } catch (error) {
        res.status(401).json({ message: 'Token no válido' });
    }
};

module.exports = authMiddleware;
