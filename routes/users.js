// routes/users.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authMiddleware = require('../middlewares/authMiddleware');

// Ruta para crear un nuevo usuario
router.post('/', userController.createUser);

// Otras rutas...

// Ruta para obtener todos los usuarios (protegida)
router.get('/', authMiddleware, userController.getAllUsers);


// Ruta para obtener un usuario por ID
router.get('/:id', userController.getUserById);

// Ruta para actualizar un usuario por ID
router.put('/:id', userController.updateUser);

// Ruta para eliminar un usuario por ID
router.delete('/:id', userController.deleteUser);

// Nueva ruta de login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Busca al usuario en la base de datos
    const user = await userController.findUserByEmail(email);
    if (!user) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Verifica la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Genera el token JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user });
});

module.exports = router;
