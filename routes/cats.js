const express = require('express');
const router = express.Router();

const catsControllers = require("../controllers/cats")

router.get('/', catsControllers.getAllCats);

router.get('/:id', catsControllers.getCatById);

router.post('/', catsControllers.createCat);

router.put('/:id', catsControllers.updateCat);

router.patch('/:id', catsControllers.patchCat);

router.delete('/:id', catsControllers.deleteCat);

module.exports = router;
