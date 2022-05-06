const dateFormat = require('../utils/dateFormat')
const { Schema, model } = require('mongoose');

const postSchema = new Schema(
    {
    title: {
       type: String,
       required: true,
       trim: true,
     },
     text: {
         type: String,
         required: true,
         trim: true,
     },
     postAuthor: {
      type: String,
      trim: true,
    },
    // userId: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User'
    // },
     selectFile: {
        type: String
     },
     likeCount: {
        type: String,
        default: 0
     },
     createdAt: {
         type: Date,
         default: new Date(),
         get: (timestamp) => dateFormat(timestamp),
     },
     
     comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

// Create a virtual property `commentCount` that gets the amount of comments per post
postSchema.virtual('commentCount').get(function () {
    return this.comments.length;
  });

const Post = model('Post', postSchema);

module.exports = Post;