const express = require('express');
//const { path } = require('express/lib/application');
const ejs = require('ejs');
const mongoose = require('mongoose');

const path = require('path');
const Photo = require('./models/Photo');
const app = express();

//veritabanı bağlantıısı
mongoose.connect('mongodb://localhost/pcat-test-db');

//TAMPLATE ENGINE
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); //url deki datayı okumayı sağlar
app.use(express.json()); //url deki datayı json formatına dönüştürmeyi sağlar.

//ROUTES
app.get('/', async(req, res) => {
    const photos = await Photo.find({}) //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
    console.log(photos)
    res.render('index', {
        photos
    });
});

app.get('/about', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'temp/index.html'));

    res.render('about');
});

app.get('/add', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'temp/index.html'));

    res.render('add');
});

app.post('/photos', async(req, res) => {
    //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
    // console.log(req.body);
    await Photo.create(req.body);
    res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı...`);
});