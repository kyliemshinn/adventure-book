const { gql } = require('apollo-server-express');

//NOTE: added password to users- may not need it
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

    }

    type Mutation {

    }
`