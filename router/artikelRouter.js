const express = require('express');
const router = express.Router();
const artikelController = require("../controller/artikelController")

router.get('/',artikelController.index)
router.get('/tambah',artikelController.create)
router.post('/',artikelController.store)
router.get('/edit/:id',artikelController.edit)
router.put('/:id',artikelController.update);
router.delete('/:id',artikelController.delete);

module.exports = router