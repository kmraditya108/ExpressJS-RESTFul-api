const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true,
        maxLength: 150,
        index: true
    },
    year: {
        type:Number,
        max:[Number(new Date().getFullYear()), "Year can't be greater than current year"],
        min: [1940, "Year can't be smaller than 1940"]
    },
    rating: Number,
    isWatched: Boolean,
});

// Defining modal for movie schema.
// Mongoose automatically attaches this model to your active connection
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;