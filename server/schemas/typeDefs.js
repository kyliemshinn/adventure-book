const { gql } = require('apollo-server-express');

//NOTE: added password to users- may not need it

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!      
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
        content: String!
        post: Post!
        author: User!
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
        createPost(id: ID!, content: String!, author: String!, tags: [String]!, location: LocationInput! ): Post
        updatePost(content: String, tags: String): Post
        removePost(postId: ID!): Post
        addComment(postId: ID!, content: String!): Post
        removeComment(postId: ID!, commentId: ID!): Post
        login(email: String!, password: String!): Auth
    }
`