const Post = require('../database/models/Posts')


module.exports = async(req,res)=>{

    const posts = await Post.find({})
    console.log(posts)
    res.render('index', {
        posts: posts
    })
}