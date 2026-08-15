const express = require('express');
const router = express.Router();
const users = require('../../data/usersData');

const { BadRequestError, NotFoundError } = require('../../core/ApiError')

router.post('/api/users', (req, res) => {
    // console.log("Incoming Body Data:", req.body);

    const { name } = req.body;
    const newName = name;

    // Validate the input data safely
    if (!newName) {
        throw new BadRequestError('Name field is required.')
        // return res.status(400).json({error: "Name field is required"});
    }

    // Just check of error not instance of ApiError
    //Error: { "status": "failed", "message": "Cannot access 'a' before initialization", "data": null }
    if(true){
        console.log(a);
        let a = 100;

        // To fix: index.js -> we have to validate error instance "err instanceOf ApiError"
    }

    // create new resource object
    const newUser = {
        id: users.length + 1,
        name: newName
    }

    users.push(newUser);

    res.status(201).json({
        message: "User created successfully!",
        data: newUser
    });

    // res.json({ debug: req.body });
});

module.exports = router;