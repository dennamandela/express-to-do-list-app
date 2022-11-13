const express = require('express');
const router = express.Router();

const {
    getIdUser,
    addUser,
    login,
} = require ('../controllers/user.controller');

router.get('/:id', getIdUser);
router.post('/', addUser);
router.post('/', login);

module.exports = router;