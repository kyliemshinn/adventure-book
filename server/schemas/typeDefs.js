const { gql } = require('apollo-server-express');

//NOTE: added password to users- may not need it

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        posts: [Post]
        collection: [Post]
    }

    type Post {
        id: ID!
        title: String!
        content: String!
        author: User!
        createdAt: String
        tags: [String]!
        location: Location!
        collectors: [User]
        comments: [Comment]
        images: [String]!
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
        user: User
        posts: [Post]
        post(postId: ID!): Post
        postsByTag(tags: [String]!): [Post]
    }

    type Mutation {
        createPost(title: String!, content: String!, tags: [String]!, location: LocationInput!, images: [String]!): Post
        updatePost(postId: ID!, content: String, tags: [String]): Post
        removePost(postId: ID!): Post

        addToCollection(postId: ID!, collectorId: ID!): User
        removeFromCollection(postId: ID!, collectorId: ID!): User

        addComment(postId: ID!, commentText: String!): Post
        removeComment(commentId: ID!): Post

        login(username: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;