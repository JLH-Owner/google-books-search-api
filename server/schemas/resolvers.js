const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { username }) => {
            return User.findOne({ username });
        },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user_id }).populate('books');
            }
            throw AuthenticationError;
            ('User not found!')
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user); 

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
                ('Login failed, user not found!')
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
                ('Incorrect password! Please try again.')
            }

            const token = signToken(user);
            return { token, user };
        },
        // Add a third argument to the resolver to access data in our `context`
        saveBook: async (parent, { userId, bookId }, context) => {
            if (!context.user) {
                return User.findOneAndUpdate(
                    { _id: userId },
                    {
                        $addToSet: { books: bookId }, 
                    },
                    {
                        new: true,
                        runValidators: true,    
                    }
                );
            }
            // If user attempts to execute this mutation and isn't logged in, throw an error
            throw AuthenticationError;
            ('You need to be logged in!')
        },
    // Set up mutation so a logged in user can only remove their user and no one else's
        removeUser: async (parent, args, context) => {
            if (context.user) {
                return User.findOneAndDelete({ _id: context.user._id });
            }
            throw AuthenticationError;
            ('User not found!')
            },
        // Make it so a logged in user can only remove a skill from their own user
        removeBook: async (parent, { book }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { books: book_id } },
                    { new: true }
                );
        }
        throw AuthenticationError;
        ('Something went wrong!')
        },
    },
};

module.exports = resolvers;