const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');


router.get('/', ClienteController.getAll);
router.post('/', ClienteController.addCliente);
router.put('/:id', ClienteController.update);
router.delete('/:id', ClienteController.deleteCliente);


module.exports = router;