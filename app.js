const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user.route')
const app = express();
require('./configs/db')

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/user', userRouter)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})






//route not found err
app.use((req, res, next) => {
    res.status(404).json({message:'server not found'})
})

//server err 
app.use((err, req, res, next) => {
    res.status(401).json({message: 'Something broke'})
})


module.exports = app;