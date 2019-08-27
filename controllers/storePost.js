const Post = require('../database/models/Posts')
const path = require('path')

module.exports = (req,res)=>{
    const images  = req.files.image

    images.mv(path.resolve(__dirname, '..', 'public/posts', images.name),(error)=>{
        Post.create({
            ...req.body,
            image : `/posts/${images.name}`
        },(error, post)=>{
            res.redirect('/')
        })
    })
}