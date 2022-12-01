const {User, Lessons} = require('../models');

const resolvers = {
    Query: {
        lessons: async () => {
            return Lessons.find({});
        },

        lesson: async (parent,
             {id}) => {
                console.log(id);
            return Lessons.findById({_id:id});
        },
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
            
            addComment: async (parent, { thoughtId, commentText }) => {
              return Thought.findOneAndUpdate(
                { _id: thoughtId },
                {
                  $addToSet: { comments: { commentText } },
                },
                {
                  new: true,
                  runValidators: true,
                }
              );
            }
    },
};

module.exports = resolvers;