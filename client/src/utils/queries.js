import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query allPosts {
    posts {
      id
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
        id
        author
        title
        createdAt
        content
        tags
        comments {
          id
          commentText
          post
          commentAuthor
        }
    }
}
`;

export const QUERY_USER = gql`
    query user {
        user {
            id
            username
            posts {
              id
              title
              content
              author
              tags
              location
            }  
        }
    }
`;
