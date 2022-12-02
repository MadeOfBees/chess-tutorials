const { User, Lessons } = require("../models");
const {AuthenticationError} = require

("apollo-server-express");
const { signToken } = require('../utils/auth');
const resolvers = {
  Query: {
    lessons: async () => {
      return Lessons.find({});
    },

    lesson: async (parent, { lessontitle }) => {
      console.log(lessontitle);
      const lessons = await Lessons.find({lessontitle: lessontitle});
      return lessons[0]

      
    },
    users: async () => {
        return User.find({});
      },
  
      user: async (parent, { username}) => {
        console.log(username);
        const users = await User.find({username: username });
        console.log(users);
        return users[0]
      },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },

    removeUser: async (args) => {
      const user = await User.findOneAndDelete(args);
      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }
      console.log(password);
      const correctPw = await user.isCorrectPassword(password);
      console.log(correctPw);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect Password!");
      }

      const token = signToken(user);
      console.log(token,user);
      return   user ;
   },
   },
};

module.exports = resolvers;
