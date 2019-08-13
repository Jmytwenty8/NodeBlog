const express = require('express')
const path = require('path')
const mongoose = require('mongoose')



const app = new express()

mongoose.connect('mongodb://localhost:27017/node-js-blog',{useNewUrlParser: true})

app.use(require('express-edge'));
app.set('views', `${__dirname}/views`);

app.use(express.static('public'))


app.get('/', (req,res)=>{
    res.render('index')
})


app.get('/about', (req,res)=>{
    res.render('about')
})


app.get('/post', (req,res)=>{
    res.render('post')
})


app.get('/contact', (req,res)=>{
    res.render('contact')
})

app.get('/post/create',(req,res)=>{
    res.render('create')
})


app.listen(3000,()=>{
    console.log('Listening to port 3000')
})
