const express = require('express');
let router = express.Router()

/** get all the users */
router.get('/', (req, res, next)=>{
    console.log("get fucntion")
    res.send("getting all the user ");
})

/** get user by id */
router.get('/:id', (req, res, next)=>{
    res.send("getting the user by id: "+req.params.id);
})

/** add a new user */
router.post('/', (req, res, next)=>{
    res.send("adding a new user");
})

/** update a user by id */
router.put('/:id', validateUser, (req, res, next)=>{
    res.send("updating a user:"+req.params.id);
})

/** delete a user by id */
router.delete('/:id', validateUser, (req, res, next)=>{
    res.send("deleting a new user"+ req.params.id);
})

function validateUser(req, res, next){
    console.log('demo function')
    next();
}

module.exports = router;