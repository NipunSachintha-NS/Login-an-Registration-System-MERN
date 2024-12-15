const express =  require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee')
const bcrypt = require('bcrypt')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/employee');

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        EmployeeModel.create({name, email, password:hash})
            .then(employees => res.json(employees))
            .catch(err => res.json(err))  
    }).catch(err => console.log(err.message))
      
 })

app.post("/login", (req,res) =>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email:email})
    .then(user => {
        if(user) {
            bcrypt.compare(password,user.password, (err, response) =>{   
                 if(response) {
                    res.json("Login Succussfuly")     
                } else {
                    res.json("The password is incorrect")  
                }
          })

        } else {
            res.json("No record existed")  
        }
    }).catch(err => console.log(err))
})


app.listen(3001, () => {
    console.log("server is Running")
})
