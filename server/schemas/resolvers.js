const { User, Post, Comment } = require("../models");
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
                title: args.title,
                content: args.content,
                author: context.user._id,
                tags: args.tags,
                location: args.location,
            });
            await post.populate("author");
            return post;
        },
        updatePost: async (parent, args) => {
            const post = await Post.findById(args.postId);
            post.content = args.content || post.content;
            post.tags = args.tags || post.tags;
            post = await post.save();
            return post;
        },
        removePost: async (parent, args) => {
            const post = await Post.findByIdAndDelete(args.postId);
            return post;
        },
        addComment: async (parent, args, context) => {
            const comment = await Comment.create({
                commentText: args.commentText,
                post: args.postId,
                commentAuthor: context.user._id
            });
            await post.populate(["post", "commentAuthor"]);
            return comment;
        },
        removeComment: async (parent, args) => {
            const comment = await Comment.findByIdAndDelete(args.commentId);
            return comment;
        },
    }
}

module.exports = resolvers;