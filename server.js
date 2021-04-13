const express = require('express');
const app = express();

app.get('/', (req, res) => {});

// Define Route
app.use('/api/partners', require('./route/partners'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



// const fetch = require('node-fetch');

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data));
