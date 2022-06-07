const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            const user = await User.findById(context.user._id);
            return user;
        },
        posts: async () => {
            return "posts";
        },
        post: async () => {
            return "post";
        }
    },
    Mutation: {
        login: async (parent, args) => {
            const user = await User.findOne({ email: args.email });
            const passwordMatches = await user.isCorrectPassword(args.password);
            if(!passwordMatches)
            {
                console.log("PasswordFailed!");
                return null;
            }
            const token = signToken(user);
            return { token: token, user: user };
        },
        createUser: async (parent, args) => {
            const user = await User.create({ username: args.username, email: args.email, password: args.password });
            const token = signToken(user);
            return { token: token, user: user };
        },
        createPost: async (parent, args, context) => {
            /*const A = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedBooks: { bookId: args.bookId, authors: args.authors, description: args.description, title: args.title, image: args.image, link: args.link }} },
                { new: true, runValidators: true } // Very important, otherwise it sends back the old document!
            );*/
            return "createPost";
        },
        updatePost: async (parent, args, context) => {
            /*const user = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: args.bookId } } },
                { new: true } // Very important, otherwise it sends back the old document!
            );*/
            return "updatePost";
        },
        removePost: async () => {
            return "removePost";
        },
        addComment: async () => {
            return "addComment";
        },
        removeComment: async () => {
            return "removecomment";
        },
    }
}

module.exports = resolvers;