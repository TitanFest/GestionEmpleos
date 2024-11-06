// routes/Ofertas.js

const express = require('express');
const router = express.Router();
const OfertasController = require('../controllers/OfertasController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/registrar', OfertasController.createWork);

router.get('/obtener', OfertasController.getAllWorks);

router.get('/obtener/:id', authMiddleware, OfertasController.getWorkById);

router.put('/actualizar/:id', authMiddleware, OfertasController.updateWork);

router.delete('/eliminar/:id', authMiddleware, OfertasController.deleteWork);


module.exports = router;
