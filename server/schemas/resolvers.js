const {User, Lesson} = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        },

        lesson: async (parent,
             {_id}) => {
            const params = _id ? {_id} : {};
            return Lesson.find(params);
        },
    },
    // Mutation: {
    //     createUser: async (parent, args) => {
    //         const user = await User.create(args);
    //         return user;
    //     },

        
    //     updateUser: async (parent, args) => {
    //             const user = await User.update(args);
    //             return user;
    //         },
    // },
};

module.exports = resolvers;