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
    lesson(lessontitle:String): Lessons
    queryComment: [Comment]
  }
  type Mutation {
    login(email: String!, password: String!): User 
    createUser(username: String, email: String, password: String): User
    updateUser(username: String, email: String, password: String): User
    removeUser(username: String, email: String, password: String): User
    addComment(commentText: String!): Comment
  }
  type Comment {
    _id: ID
    commentText: String
  }
`;

module.exports = typeDefs;
