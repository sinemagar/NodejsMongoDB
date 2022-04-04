const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//connect db

mongoose.connect('mongodb://localhost/pcat-test-db');
//varsa olan veritabanına bağlanır yoksa yenisini oluşturur.

//create schema

const PhotoSchema = new Schema({
    title: String,
    description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//Create a photo

// Photo.create({
//     title: 'Photo Title 4',
//     description: 'Photo description 4 lorem ipsum',
// });

//read a photo
Photo.find({}, (err, data) => {
    console.log(data);
});

//update photo
/*
const id = '62471ce5925ec1c359317e9b';

Photo.findByIdAndUpdate(
    id, {
        title: 'Photo Title 2222 updated',
        description: 'Photo description 2222 updated',
    }, {
        new: true //terminalde güncel basması için
    },
    (err, data) => {
        console.log(data);
    }
);*/

//delete a photo

const deleteId = '62471ce5925ec1c359317e9c';

Photo.findByIdAndDelete(deleteId, (err, data) => {
    console.log('Photo is removed...');
});