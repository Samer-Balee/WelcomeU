const dateFormat = require('../utils/dateFormat')

const { Schema, model } = require('mongoose');

// Schema for what makes up a comment
const commentSchema = new Schema({
  commentText: {
    type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
  },
  commentAuthor: {  // Do I need userId instead ?
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

// Initialize the Comment model
const Comment = model('Comment', commentSchema);

module.exports = Comment;