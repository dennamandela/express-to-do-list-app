const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const todo = require('./todo.route');

//localhost:3000/todo
router.use('/todo', todo);
=======

const todo = require('./todo.route');
const users = require('./user.route');

//localhost:3000/todos
router.use('/todos', todo);
router.use('/users', users);
>>>>>>> 94a4b76 (menambahkan seeder dan crud)

module.exports = router;



