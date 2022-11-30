const {gql} = require("apollo-server-express");

const typeDefs = gql `
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    score: Int
    lastactivity: String 
    lesson: [Lesson]
}

type Lesson {
    _id: ID
    startingmoves: String
    lessontitle: String

}

type Query {
    user: [User]
    lesson(_id: String) : [Lesson]
}
`;

module.exports = typeDefs;