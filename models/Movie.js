const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    rating: Number,
    isWatched: Boolean,
});

// Defining modal for movie schema.
// Mongoose automatically attaches this model to your active connection
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;