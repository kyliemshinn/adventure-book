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
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
    query singlePost($postId: ID!) {
     post(postId: $postId) {
        _id
        name
        comments {
          _id
          content
          post
          author
        }
    }
`;
//TODO: if we add posts to user models, add here
export const QUERY_USER = gql`
    query user {
        user {
            _id
            username
            posts {
              _id
              content
              author
              tags
              location
            }  
        }
    }
`;
