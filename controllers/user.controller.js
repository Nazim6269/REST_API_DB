const User = require('../models/user.model')
console.log(User);
let { v4: uuidv4 } = require('uuid');



//get request controller
const getAllUsers = async (req, res) => {
    try {
        //show data from database
        const user = await User.find();
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
}



//specific  get request controller
const getOneUsers = async (req, res) => {
    try {
        const user = await User.findOne({id: req.params.id})
         res.status(200).json(user)
    } catch (error) {
        rex.status(500).send({message: error})
    }
}



//create/post operation
const createUsers = async (req, res) => {
    try {
        const newUser = new User({
        id: uuidv4(),
        name: req.body.name,
        age: req.body.age   
    })
    await newUser.save();
    res.status(201).json(newUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


//update/put operation
const updateUsers = async (req, res) => {
    const user = await User.findOne({ id: req.params.body })
    user.name = req.body.name;
    user.age = req.body.age;
    await user.save()
    res.status(201).send(user)
}


//delete operation
const deleteUsers = async (req, res) => {
   try {
        await User.deleteOne({id: req.params.id})
        res.status(200).json({message: 'info has been deleted'})
    } catch (error) {  
    }
}
module.exports = {getAllUsers,getOneUsers,createUsers,updateUsers,deleteUsers}