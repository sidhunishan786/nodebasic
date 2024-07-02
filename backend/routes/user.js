const express = require('express');

const Router = express.Router();

const  {getAllUsers,
        getUserById,
        createUser,
        deleteUserById     
        
    }= require('../controllers/user');

Router.route('/')
.get(getAllUsers)
.post(createUser)
;



Router.route('/:id').get(getUserById)
.delete(deleteUserById)

module.exports = Router;