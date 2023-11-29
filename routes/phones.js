const express = require('express');
const router = express.Router();

const phonesControllers = require("../controllers/phones")

router.get('/', phonesControllers.getAllPhones);

router.get('/:id', phonesControllers.getPhoneById);

router.post('/', phonesControllers.createPhone);

router.put('/:id', phonesControllers.updatePhone);

router.patch('/:id', phonesControllers.patchPhone);

router.delete('/:id', phonesControllers.deletePhone);

module.exports = router;
