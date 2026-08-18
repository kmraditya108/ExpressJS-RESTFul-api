const express = require('express');
const Movie = require("../models/Movie");
const ApiResponse = require('../core/ApiResponse');

const router = express.Router();

router.get('/movies', async (req, res, next) => {
    try {
        const fetchMovies = await Movie.find();
        return res.status(200).json(ApiResponse.build('success', 'Movies fetched successfully', fetchMovies));
    } catch (err) {
        next(err);
    }
});

router.get('/movie/:name', async (req, res, next)=>{
    try {
        const{name}=req.params;
        console.log("name: ", name);;
        
        const findMovie = await Movie.findOne({name:name});
        if(!findMovie) return res.status(201).json(ApiResponse.build('Error', `No movie found with the given name: ${name}`, findMovie));
        return res.status(201).json(ApiResponse.build('success', 'Movie finded!', findMovie));
    } catch (error) {
        next(error);
    }
})

router.post('/create', async (req, res, next) => {
    try {
        const { name, rating, year, isWatched } = req.body;
        const newMovie = await Movie.create({ name, year, rating, isWatched });
        return res.status(201).json(ApiResponse.build('success', 'Movie created successfully', newMovie));
    } catch (err) {
        next(err);
    }
});

router.patch('/movie/:id', async (req, res, next)=>{
    const {name, rating, year, isWatched} = req.body;
    const {id} = req.params;

    console.log("id, name, rating, isWatched, year : ", id, name, rating, isWatched, year);
    
    const movie = await Movie.findByIdAndUpdate(id, {name, rating, year, isWatched}, {new: true});
    return res.status(201).json(ApiResponse.build('success', `Movie with id:${id} has been updated successfully`, movie));
})

module.exports = router;  