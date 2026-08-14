const express = require('express');
const app = express();
const port = 8000;

const { ApiError } = require('./core/ApiError');
const ApiResponse = require('./core/ApiResponse')
// app.get('/', (req, res) => {
//     res.send('Hello world!!!')
// });

// 1. THIS LINE MUST COME FIRST!!! 
app.use(express.json());

// 2. NEW MIDDLEWARE: Parses incoming URL-encoded data from HTML Forms!
// extended: true allows you to parse complex nested objects from forms
app.use(express.urlencoded({ extended: true }));

// Importing custom router module
const getMethodRoutes = require('./ExploreMethods/GET/GetMethod');
const postMethodRoutes = require('./ExploreMethods/POST/PostMethod');

// Mount the router onto server path(here: the root '/')
app.use('/', getMethodRoutes);
// Tip: We can reuse '/' because Express matches both, paths AND the HTTP verb (GET vs POST) separately!
app.use('/', postMethodRoutes);

app.use((err, req, res, next) => {

    if (err instanceof ApiError) {
        const { status = 500, message = "Something went wrong" } = err;
        // res.status(status).json({
        //     status: 'failed',
        //     message: message,
        //     data: null
        // });

        return res.status(status).json(ApiResponse.build('failed', message, null))
    }
    // 
    res.status(500).json(ApiResponse.build('failed', 'Best mind working on it!', null))
})

app.listen(port, () => {
    console.log(`App is up and running on port ${port} and URL: http:localhost:${port}`);
})