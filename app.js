const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Post = require('./database/models/Posts')
const fileUpload = require('express-fileupload')

const app = new express()

mongoose.connect('mongodb://localhost:27017/node-js-blog',{useNewUrlParser: true})

app.use(fileUpload())
app.use(require('express-edge'));
app.set('views', `${__dirname}/views`);

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


const validationPostMiddleware = (req, res, next) => {
    if(!req.body.title || !req.body.subtitle || !req.body.username || !req.body.content || !req.files){
        return res.redirect('/create')
    }

    next() 
}

app.use('/post/store', validationPostMiddleware)



app.get('/', async(req,res)=>{

    const posts = await Post.find({})
    console.log(posts)
    res.render('index', {
        posts: posts
    })
})


app.get('/about', (req,res)=>{
    res.render('about')
})


app.get('/post/:id', async(req,res)=>{
    const posts = await Post.findById(req.params.id)
    console.log(req.params)
    res.render('post',{
        posts:posts
    })
})


app.get('/contact', (req,res)=>{
    res.render('contact')
})

app.get('/create',(req,res)=>{
    res.render('create')
})


app.post('/post/store', (req,res)=>{
    const images  = req.files.image

    images.mv(path.resolve(__dirname, 'public/posts', images.name),(error)=>{
        Post.create({
            ...req.body,
            image : `/posts/${images.name}`
        },(error, post)=>{
            res.redirect('/')
        })
    })
})



app.listen(3000,()=>{
    console.log('Listening to port 3000')
})
