import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query allPosts {
    posts {
      _id
      content
      author
      tags
      location
      collectors
      comments
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
    query singlePost($postId: ID!) {
     post(postId: $postId) {
        _id
        name
        skills
    }
`;

export const QUERY_USER = gql`
    query user {
        user {
            _id
            username  
        }
    }
`;
