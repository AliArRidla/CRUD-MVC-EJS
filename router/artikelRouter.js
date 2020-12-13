const express = require('express');
const router = express.Router();
const artikelController = require("../controller/artikelController")

router.get('/',artikelController.index)
router.get('/tambah',artikelController.create);
router.post('/',artikelController.store);

module.exports = router