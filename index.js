const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello world!!!')
// });


// Importing custom router module
const getMethodRoutes = require('./ExploreMethods/GET/GetMethod');

// Mount the router onto server path(here: the root '/')
app.use('/', getMethodRoutes);

app.listen(port, ()=>{
    console.log(`App is up and running on port ${port} and URL: http:localhost:${port}`);
})