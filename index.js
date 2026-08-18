const express = require('express');
const connectDB = require('./config/db');
const { ApiError } = require('./core/ApiError');
const ApiResponse = require('./core/ApiResponse')

const getMovie = require('./controller/movieController');

const app = express();
const port = 8000;

// 1. THIS LINE MUST COME FIRST!!! 
app.use(express.json());

// 2. NEW MIDDLEWARE: Parses incoming URL-encoded data from HTML Forms!
// extended: true allows you to parse complex nested objects from forms
app.use(express.urlencoded({ extended: true }));


/**
 * * This comented code seperated by different folder structure
 * EG: 
 *  1. db.js :-> It has all connection related code
 *  2. models :-> Schema declaration
 *  3. controller :-> All CRUD functions
 *  

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movies-db')
.then(()=> console.log('MongoDb connection open!!!'))

const movieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    rating: Number,
    isWatched: Boolean
});

const Movie = mongoose.model('Movie', movieSchema);

app.get('/create', async (req, res)=>{
    const movie = await Movie.create({
        name: 'Thor',
        year: 2009,
        rating: 9.0,
        isWatched: true
    });

    movie.save();
    res.send(movie);
})
 */

// Connecting Mongo DB here.
connectDB();


/**
* This commented block is for static data - Express connection and node js method test 
* Basically CRUD operation with different Methods



// app.get('/', (req, res) => {
//     res.send('Hello world!!!')
// });

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
        return res.status(status).json(ApiResponse.build('failed', message, null))
    }
    res.status(500).json(ApiResponse.build('failed', 'Best mind working on it!', null))
})

*/

app.use('/', getMovie);

app.use((err, req, res, next) => {
    // Log the actual error to terminal for easier debugging
    console.error("SERVER ERROR:", err);

    // Handle invalid JSON payload syntax sent by the client
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json(ApiResponse.build('failed', 'Invalid JSON payload sent', null));
    }

    if (err instanceof ApiError) {
        const { status = 500, message = "Something went wrong" } = err;
        return res.status(status).json(ApiResponse.build('failed', message, null));
    }

    res.status(500).json(ApiResponse.build('failed', 'Best mind working on it!', null));
});

app.listen(port, () => {
    console.log(`App is up and running on port ${port} and URL: http:localhost:${port}`);
})