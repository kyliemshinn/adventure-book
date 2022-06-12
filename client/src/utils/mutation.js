import { gql } from '@apollo/client';

export const CREATE_POST = gql`
mutation createPost($title: String!, $content: String!, $tags: [String]!, $location: LocationInput!, $images: [String]!) {
  createPost(title: $title, content: $content, tags: $tags, location: $location, images: $images) {
    title
    images
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

export const UPDATE_POST = gql`
mutation updatePost($postId: ID, $content: String, $tags: [String], $title: String) {
  updatePost(postId: $postId, content: $content, tags: $tags, title: $title) {
    id
  }
}

`;

export const REMOVE_POST = gql`
mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      id
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      id
      content
      author {
        username
      }
      comments {
        id
        commentText
        commentAuthor {
          username
        }
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
mutation removeComment($commentId: ID!) {
    removeComment(commentId: $commentId) {
      id
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
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