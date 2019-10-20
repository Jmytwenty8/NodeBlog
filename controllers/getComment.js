const Comment = require('../database/models/Comments')

module.exports = async(req,res)=>{
    const comments = await Comment.find().where('commentedOn').equals(Post._id)
    console.log(req.params)
    res.render('post',{
        comments:comments
    })
}