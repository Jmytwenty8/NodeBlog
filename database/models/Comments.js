const mongoose = require('mongoose')
const Post = require('./Posts')

const CommentSchema = new mongoose.Schema({

    content: String,

    username: String,

    createdAt: {
        type: Date,
        default: new Date()
    },

    commentedOn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }

})


const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment