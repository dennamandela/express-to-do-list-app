const express = require('express');
const app = express();
<<<<<<< HEAD
const router = require('./routes');

const PORT = 3000;

app.use(router);
=======
const allRoutes = require('./routes');

const PORT = 3500;

app.use(express.json())
app.use(allRoutes);
>>>>>>> 94a4b76 (menambahkan seeder dan crud)

app.listen(PORT, () => {
    console.log('Server running on port 3000!!!');
})