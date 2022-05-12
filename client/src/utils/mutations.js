import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_PROFILE = gql`
mutation Mutation($country: String!, $arrivedAt: String!, $speak: String!, $livesIn: String!) {
  addProfile(country: $country, arrivedAt: $arrivedAt, speak: $speak, livesIn: $livesIn) {
    _id
    username
    email
    country
    arrivedAt
    speak
    livesIn
  }
}
`

export const ADD_POST = gql`
mutation addPost($title: String!, $text: String!) {
  addPost(title: $title, text: $text) {
    _id
    title
    text
    postAuthor
    likeCount
    createdAt
  }
}
`;

export const ADD_COMMENT = gql`
mutation Mutation(
  $postId: ID!
   $commentText: String!
    $commentAuthor: String!
    ) {
  addComment(
    postId: $postId
     commentText: $commentText
      commentAuthor: $commentAuthor
      ) {
    _id
    title
    text
    postAuthor
    likeCount
    createdAt
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`;

