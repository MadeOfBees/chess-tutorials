const { User, Lesson, Comment } = require('../models');

const resolvers = {
  Query: {
    lessons: async () => {
      return Lesson.find({});
    },

    lesson: async (parent,
      { id }) => {
      console.log(id);
      return Lesson.findById({ _id: id });
    },
    queryComment: async (parent, args) => {
      try {
        const comments = Comment.find()
        return comments
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },


    updateUser: async (parent, args) => {
      const user = await User.update(args);
      return user;
    },

    addComment: async (parent, { commentText }) => {
      try {
        const comment = await Comment.create({ commentText })
        return comment
      } catch (error) {
        throw new Error(error)
      }
      
    }
  },
};

module.exports = resolvers;