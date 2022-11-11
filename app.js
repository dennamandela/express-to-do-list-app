const express = require('express');
const app = express();
const router = require('./routes');

const PORT = 3000;

app.use(router);

app.listen(PORT, () => {
    console.log('Successfully');
})