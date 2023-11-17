const express = require('express');
const router = express.Router();

const usersControllers = require("../controllers/users")

router.get('/', usersControllers.getAllUsers);

router.get('/:id', usersControllers.getUserById);

router.post('/', usersControllers.createUser);

router.put('/:id', usersControllers.updateUser);

router.patch('/:id', usersControllers.patchUser);

router.delete('/:id', usersControllers.deleteUser);

module.exports = router;
