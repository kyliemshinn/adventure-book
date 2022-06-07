import { gql } from '@apollo/client';

export const CREATE_POST = gql`
  mutation createPost($id: Int!, $content: String!, $author: String!, tags: String!) {
    addPost(id: $id, content: $content, author: $author, tags: $tags) {
      _id
      content
      author
      tags
    }
  }
`;

export const UPDATE_POST = gql`

`;

export const REMOVE_POST = gql`
mutation removePost($postId: String!) {
    removePost(postId: $postId) {
      _id
      content
      author
      tags
    }
  }
`;

export const ADD_COMMENT = gql`
mutation addComment($postId: ID!, $content: String!) {
    addComment(postId: $postId, content: $content) {
      _id
      content
    }
  }
`;

export const REMOVE_COMMENT = gql`
mutation removeComment($postId: ID!) {
    removeSkill(postId: $postId) {
      _id
      content
    }
  }
`;


//NOTE: Comment back in once auth is up and running

// export const LOGIN_USER = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       profile {
//         _id
//         name
//       }
//     }
//   }
// `;