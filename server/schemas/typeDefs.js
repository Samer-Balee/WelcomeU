const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    country: String
    arrivedAt: String
    speak: String
    livesIn: String
    posts: [Post]
  }


  type Post {
    _id: ID
    title: String
    text: String
    postAuthor: String
    likeCount: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(username: String!): User
    posts: [Post]
    post(postId: ID!): Post
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProfile( country: String!, arrivedAt: String!, speak: String!, livesIn: String!): User
    addPost(title: String!, text: String!): Post
    addComment(postId: ID!, commentText: String!, commentAuthor: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;
