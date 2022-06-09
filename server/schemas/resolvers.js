const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            const user = await User.findById(context.user._id);
            return user;
        },
        posts: async () => {
            const posts = await Post.find().populate("author");
            return posts;
        },
        post: async (parent, args) => {
            const post = await Post.findById(args.id).populate("author");
            return post;
        }
    },
    Mutation: {
        login: async (parent, args) => {
            const user = await User.findOne({ email: args.email });
            if(!user) {
                console.log("User not found!")
                return null;
            }
            const passwordMatches = await user.isCorrectPassword(args.password);
            if(!passwordMatches) {
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
            const post = await Post.create({
                content: args.content,
                author: context.user._id,
                tags: ["Tags"],
                location: { latitude: 0, longitude: 0 },
            });
            await post.populate("author");
            /*const post = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedBooks: { bookId: args.bookId, authors: args.authors, description: args.description, title: args.title, image: args.image, link: args.link }} },
                { new: true, runValidators: true } // Very important, otherwise it sends back the old document!
            );*/
            return post;
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