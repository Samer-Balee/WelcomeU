// const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
          return User.find({}).populate("posts");
        },
        posts: async () => {
          return Post.find({});
        }
     },
     Mutation: {
       addUser: async (parent, {name, email, password}) => {
        const user = await User.create(name, email, password);
        return user;
       },
      addPost: async (parent, args) => {
        const post = await Post.create(args);
        await User.findOneAndUpdate(
          { _id: args.userId },
          {
            $addToSet: {
              posts: post._id,
            },
          }
        )
        return post;
      }
    }
    
};

module.exports = resolvers;
