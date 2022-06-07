const { gql } = require('apollo-server-express');

//NOTE: added password to users- may not need it

//TODO: will need to add location schema to post/ add location to update post in mutations
const typeDefs = gql`
    type User {
        id: Int!
        username: String!
        email: String!
        password: String!      
    }

    type Post {
        id: Int!
        content: String!
        author: User!
        tags: String!
        location:
        collectors: [User]
        comments: [Comment]

    }

    type Comment {
        content: String!
        post: Post!
        author: User!
    }

    type Query {
        users: [User]
        posts: [Post]
        post(id: Int!): Post

    }

    type Mutation {
        createPost(post: PostData): postResponse
        updatePost(content: String, tags: String): Post
        removePost(postId: ID!): Post
        addComment(postId: ID!, content: String!): Post
        removeComment(postId: ID!, commentId: ID!): Post
        login(email: String!, password: String!): Auth
    }
`