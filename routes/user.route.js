const express = require('express');
const router = express.Router();
const {getAllUsers,getOneUsers,createUsers,updateUsers,deleteUsers} = require('../controllers/user.controller')

router.get('/', getAllUsers);
router.get('/:id', getOneUsers);
router.post('/', createUsers);
router.patch('/:id', updateUsers);
router.delete('/:id', deleteUsers);


module.exports = router;