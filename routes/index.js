const express = require('express');
const router = express.Router();
const todo = require('./todo.route');

//localhost:3000/todo
router.use('/todo', todo);

module.exports = router;



