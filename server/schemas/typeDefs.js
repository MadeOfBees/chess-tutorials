const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    lastactivity: String
    lessons: [Lessons]
  }

  type Lessons {
    _id: ID
    startingmoves: String
    lessontitle: String
    lessondescription: String
    lessonId: Int
  }

  type Query {
    users: [User]
    user(username: String): User
    lessons: [Lessons]
    lesson(_id:ID!): Lessons
  }

  type Mutation {
    login(email: String, password: String): User
    createUser(username: String, email: String, password: String): User
    updateUser(username: String, email: String, password: String): User
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }
`;

module.exports = typeDefs;
