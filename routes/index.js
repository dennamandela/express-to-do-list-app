const express = require('express');
const router = express.Router();
const todo = require('./todo.route');

//localhost:3000/
app.get('/', (req, res) => {
    res.send({
        status: "Berhasil",
        message: "Selamat datang"
    });
});

router.use('/todo', todo);

module.exports = router;



