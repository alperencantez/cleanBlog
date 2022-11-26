const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const controllers = require('./controllers/controllers');

// Establish DB Connection
mongoose.connect(process.env.MONGODB_URI);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Template engine
app.set('view engine', 'ejs');

app.get('/', controllers.main);
app.get('/about', controllers.about);
app.get('/add', controllers.addGet);
app.post('/add', controllers.addPost);

app.get('/post/:id', controllers.post);
app.put('/post/:id', controllers.updatePost);
app.delete('/post/:id', controllers.deletePost);

app.listen(3000, () => console.log('Express is up and running!'));
