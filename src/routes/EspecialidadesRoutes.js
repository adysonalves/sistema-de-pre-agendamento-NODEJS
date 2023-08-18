const express = require('express');
const router = express.Router();
const EspecialidadesController = require('../controllers/EspecialidadesController');

router.get('/', EspecialidadesController.getAll); // Listagem de todos registros
router.get('/:id', EspecialidadesController.getById); // Busca registro por ID
router.post('/', EspecialidadesController.addEspecialidade); // Cria um novo registro
router.patch('/:id', EspecialidadesController.update); // Atualiza parte de um registro
router.delete('/:id', EspecialidadesController.delete); // Excluo um registro, desde que não esteja atrelado a nenhum agendamento.

module.exports = router;