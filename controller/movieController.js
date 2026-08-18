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

router.post('/create', async (req, res, next) => {
    try {
        const { name, rating, year, isWatched } = req.body;
        const newMovie = await Movie.create({ name, year, rating, isWatched });
        return res.status(201).json(ApiResponse.build('success', 'Movie created successfully', newMovie));
    } catch (err) {
        next(err);
    }
});

module.exports = router;