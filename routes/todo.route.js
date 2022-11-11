const express = require('express');
const router = express.Router();

const {
    getAllTodo,
    getIdTodo,
    postTodo,
    updateTodo,
    deleteTodo} = require ('../controllers/todo.controller');

// get request untuk semua daftar tugas
router.get('/', getAllTodo);

//get request for one todolist
router.get('/:id', getIdTodo);
router.get('/', getAllTodo);


    