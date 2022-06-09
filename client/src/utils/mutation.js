import { gql } from '@apollo/client';

export const CREATE_POST = gql`
mutation createPost($content: String!, $author: String!, $tags: [String]!) {
  createPost(content: $content, author: $author, tags: $tags) {
    content
    tags
    location {
      latitude
      longitude
    }
    author {
      username
    }
  }
}
`;

/*export const UPDATE_POST = gql`

`;*/

export const REMOVE_POST = gql`
mutation removePost($postId: String!) {
    removePost(postId: $postId) {
      id
      content
      author
      tags
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $content: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      id
      content
      author
      comments {
        _id
        commentText
        commentAuthor
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
mutation removeComment($postId: ID!) {
    removeComment(postId: $postId) {
      id
      commentText
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

// signup
export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      id
      username
    }
  }
}
`;