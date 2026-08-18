const mongoose = require('mongoose');


const connectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/movies-db')
        .then(() => console.log("mongo-db connection established!!"))
        .catch(err => {
            console.error(err.message);
            process.exit(1);
        });
}


module.exports = connectDB;