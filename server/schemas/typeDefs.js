const { gql } = require('apollo-server-express');

//NOTE: added password to users- may not need it

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        posts: [Post]
    }

    type Post {
        id: ID!
        content: String!
        author: User!
        tags: [String]!
        location: Location!
        collectors: [User]
        comments: [Comment]
    }

    type Location {
        latitude: Float!
        longitude: Float!
    }

    input LocationInput {
        latitude: Float!
        longitude: Float!
    }

    type Comment {
        id: ID!
        commentText: String!
        post: Post!
        commentAuthor: User!
    }

    type Auth {
        token: String!
        user: User!
    }

    type Query {
        user: [User]
        posts: [Post]
        post(id: ID!): Post
    }

    type Mutation {
        createPost(content: String!, author: String!, tags: [String]! ): Post
        updatePost(content: String, tags: String): Post
        removePost(postId: ID!): Post
        addComment(postId: ID!, commentText: String!, commentAuthor: String!): Post
        removeComment(postId: ID!, commentId: ID!): Post
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String!): Auth
    }
`
//, location: LocationInput!
module.exports = typeDefs;