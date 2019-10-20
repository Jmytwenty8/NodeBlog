const Comments = require('../database/models/Comments')

module.exports = (req, res) => {
    Comments.create(req.body, (error, user)=> {
        if(error){
           return res.redirect('/post/:id')
        }
        res.redirect('/')
    })
}