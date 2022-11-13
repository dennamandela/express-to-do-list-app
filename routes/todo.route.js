const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const {getAllTodo, getIdTodo, postTodo, updateTodo, deleteIdTodo, deleteTodo} = require ('../controllers/todo.controller');

//fungsi route 
router.get('/', getAllTodo);
router.get('/:id', getIdTodo);
router.post('/', postTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteIdTodo);
router.delete('/', deleteTodo);
=======
const {
    getAllTodo, 
    getTodoByID, 
    addTodo, 
    updateTodoByID, 
    deleteTodoByID, 
    deleteAllTodo
} = require ('../controllers/todo.controller');

//fungsi route 
router.get("/", getAllTodo);
router.get("/:id", getTodoByID);
router.post("/", addTodo);
router.put("/:id", updateTodoByID);
router.delete("/:id", deleteTodoByID);
router.delete("/", deleteAllTodo);

module.exports = router;
>>>>>>> 94a4b76 (menambahkan seeder dan crud)
