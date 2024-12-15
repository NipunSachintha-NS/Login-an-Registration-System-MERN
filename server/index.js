const express =  require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/employee');

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))    
    })

app.listen(3001, () => {
    console.log("server is Running")
})
