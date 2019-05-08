const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const User = require('./schemas/user')

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Gpriznar:**password**@storage-oprqc.mongodb.net/test?retryWrites=true', {userNewUrlParser: true}, (error) => {
  if(!error) {
    console.log('Connected to the MongoDB database!')
  }
});

app.get('/', (req,res) => {
  res.send('Connected to Mongo')
})


app.post('/users', (req,res) => {

  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const age = req.body.age
  const state = req.body.state

  let user = new User({
    firstname: firstname,
    lastname: lastname,
    age: age,
    state: state
  })

  user.save((error)=> {
    if(error) {
      res.json({message: 'Unable to save user'})
    } else {
      res.json({success: true, message: 'User added successfully'})
    }
  })
})

app.listen(8080,() => {
  console.log('Server is running...')
})
