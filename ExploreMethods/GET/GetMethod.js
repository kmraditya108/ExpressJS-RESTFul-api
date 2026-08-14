const express = require('express');
const router = express.Router();

// Mock data array for testing
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];


// on http://localhost:3000 the browser screen will have the text :'Hello Express from a clean Express Router!!!'
// router.get('/', (req, res)=>{
//     res.send('Hello Express from a clean Express Router!!!')
// });


// fetch all users
router.get('/api/users', (req, res)=>{
    res.status(200).json(users);
});

// fetch a single user by URL ID parameter (req.params);
router.get('/api/user/:id', (req, res)=>{
    const{id} = req.params;
    const userId = parseInt(id);
    const user = users.find(u => u.id === userId);

    if(!user){
        return res.status(404).json({error: "User not found"});
    }

    res.status(200).json(user);
})


module.exports = router;
