const { Schema, model } = require('mongoose');

// Schema for what makes up a comment
const commentSchema = new Schema({
  text: String,
  username: String,
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

// Initialize the Comment model
const Comment = model('Comment', commentSchema);

module.exports = Comment;