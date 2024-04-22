const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const contentModel = require('./Models/content')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/blogdata')

app.get('/get', (req,res) => {
    contentModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const title = req.body.title;
    const text = req.body.text;
    contentModel.create({
        title: title,
        text: text
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(5000, () => {
    console.log("Server is Running")
})