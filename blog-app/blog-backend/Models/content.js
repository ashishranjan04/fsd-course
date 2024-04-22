const mongoose = require('mongoose')

const contentSchema = new mongoose.Schema({
    title: String,
    text: String
})

const contentModel = mongoose.model("content", contentSchema)
module.exports = contentModel