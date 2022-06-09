const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: true,
      maxLength: 250
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true
    },
    commentAuthor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;