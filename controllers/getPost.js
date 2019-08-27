const Post = require('../database/models/Posts')

module.exports = async(req,res)=>{
    const posts = await Post.findById(req.params.id)
    console.log(req.params)
    res.render('post',{
        posts:posts
    })
}