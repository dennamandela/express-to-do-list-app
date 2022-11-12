const express = require('express');
const router = express.Router();

const {getAllTodo, getIdTodo, postTodo, updateTodo, deleteIdTodo, deleteTodo} = require ('../controllers/todo.controller');

//fungsi route 
router.get('/', getAllTodo);
router.get('/:id', getIdTodo);
router.post('/', postTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteIdTodo);
router.delete('/', deleteTodo);