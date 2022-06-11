const { User, Post, Comment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      // console.log('user query')
      // console.log(context.user._id)
      const user = await User.findById(context.user._id);
      await user.populate("posts");
      console.log(user);
      return user;
    },
    posts: async () => {
      const posts = await Post.find().populate(["author", "comments"]);
      return posts;
    },
    post: async (parent, args) => {
      const post = await Post.findById(args.postId).populate([
        "author",
        { path: "comments", populate: { path: "commentAuthor" } },
      ]);
      // post.comments.commentAuthor.populate("author");
      console.log(post);
      return post;
    },
    postsByTag: async (parent, args) => {
      const posts = await Post.find({
        tags: {$in: args.tags}
      }).populate("author");
      return posts;
    },
  },
  Mutation: {
    login: async (parent, args) => {
      const user = await User.findOne({ username: args.username });
      if (!user) {
        console.log("User not found!");
        return null;
      }
      const passwordMatches = await user.isCorrectPassword(args.password);
      if (!passwordMatches) {
        console.log("PasswordFailed!");
        return null;
      }
      const token = signToken(user);
      return { token: token, user: user };
    },
    createUser: async (parent, args) => {
      const user = await User.create({
        username: args.username,
        email: args.email,
        password: args.password,
      });
      const token = signToken(user);
      return { token: token, user: user };
    },
    createPost: async (parent, args, context) => {
      const post = await Post.create({
        title: args.title,
        content: args.content,
        author: context.user._id,
        images: args.images,
        tags: args.tags,
        location: args.location,
      });
      await post.populate("author");
      // Don't forget to add to user's posts!
      const author = await User.findById(context.user._id);
      author.posts.push(post._id);
      await author.save();

      return post;
    },
    updatePost: async (parent, args) => {
      try {
        const postData = { ...args };
        postData.postId = null;
        const post = await Post.findByIdAndUpdate(args.postId, postData, {
          new: true,
        });
        console.log(post);
        return post;
      } catch (err) {
        console.error(err);
      }
    },
    removePost: async (parent, args) => {
      const post = await Post.findByIdAndDelete(args.postId);
      return post;
    },
    addComment: async (parent, args, context) => {
      try {
        const comment = await Comment.create({
          commentText: args.commentText,
          post: args.postId,
          commentAuthor: context.user._id,
        });
        await comment.populate(["post", "commentAuthor"]);
        await Post.findOneAndUpdate(args.postId, {$addToSet: {comments: comment}})
        return comment;
      } catch (err) {
        console.log(err);
        return null;
      }
    },
    removeComment: async (parent, args) => {
      const comment = await Comment.findByIdAndDelete(args.commentId);
      await Post.findOneAndUpdate(args.postId, {$pull: {comments: comment}})
      return comment;
    },
    addToCollection: async (parent, args, context) => {
      console.log("ABCD");
      const user = User.findOneAndUpdate(
        context.user._id,
        {
          $addToSet: { userCollection: args.postId },
        },
        {
          new: true,
        }
      );
      return user;
    },
    removeFromCollection: async (parent, args, context) => {
      console.log("EFGH");
      const user = User.findOneAndUpdate(
        context.user._id,
        {
          $pull: { userCollection: args.postId },
        },
        {
          new: true,
        }
      );
      return user;
    },
  },
};

module.exports = resolvers;
