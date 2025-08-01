const express = require('express');
const router = express.Router();
const userController = require('../controllers/fatosController');
// Define as rotas e manda  para o controllers tratar
router.get('/fatos', userController.getFatosHistoricos);

module.exports = router;
