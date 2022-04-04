const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema
const PhotoSchema = new Schema({
    title: String,
    description: String,
    image: String, //image ların adreslerini string olarak tutacak
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo