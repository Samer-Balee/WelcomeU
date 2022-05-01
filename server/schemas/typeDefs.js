const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    name: String
    email: String
    country: String
    arrivedAt: String
    livesIn: String
    posts: [Post]
  }

  type Post {
    _id: ID
    title: String
    text: String
    likeCount: String
    createdAt: String
   
  }

  type Query {
    users: [User]!
    posts: [Post]!
  }

  type Mutation {
    # Set the required fields for new schools
    addUser(name: String!, email: String!, password: String!): User
    addPost(userId: ID!, title: String!, text: String!): User
  }
`;

module.exports = typeDefs;
