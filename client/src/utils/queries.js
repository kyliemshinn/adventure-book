import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query allPosts {
    posts {
      _id
      title
      createdAt
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
        author
        title
        createdAt
        content
        tags
        comments {
          _id
          commentText
          post
          commentAuthor
        }
    }
`;

export const QUERY_USER = gql`
    query user {
        user {
            _id
            username
            posts {
              _id
              title
              content
              author
              tags
              location
            }  
        }
    }
`;
