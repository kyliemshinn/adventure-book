import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query allPosts {
    posts {
      id
      title
      images
      author {
        username
      }
      tags
      images
    }
  }
`;

export const QUERY_POSTS_WITH_TAG = gql`
  query postsByTag($tags: [String]!) {
    postsByTag(tags: $tags) {
      id
      title
      images
      author {
        username
      }
      tags
      images
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query singlePost($postId: ID!) {
    post(postId: $postId) {
      id
      # author {
      #   username
      # }
      title
      createdAt
      content
      location {
        latitude
        longitude
      }
      tags
      images
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

export const QUERY_USER = gql`
  query user {
    user {
      id
      username
      posts {
        id
        title
        images
        content
        tags
      }
      userCollection {
        id
        title
        tags
        author {
          username
        }
      }
    }
  }
`;
