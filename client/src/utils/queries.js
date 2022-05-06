import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query Query($username: String!) {
  user(username: $username) {
    _id
    username
    email
    country
    arrivedAt
    speak
    livesIn
    posts {
      _id
      title
      text
      likeCount
      createdAt
    }
  }
}
`;

export const Query_POSTS = gql`
query Posts {
  posts {
    _id
    title
    text
    likeCount
    createdAt
  }
}
`;

export const Query_SINGLE_POST = gql`
query Query($postId: ID!) {
  post(postId: $postId) {
    _id
    title
    text
    likeCount
    createdAt
  }
}
`;

export const QUERY_ME = gql`
query Query {
  me {
    _id
    username
    email
    country
    arrivedAt
    speak
    livesIn
    posts {
      _id
      title
      text
      likeCount
      createdAt
    }
  }
}
`;







