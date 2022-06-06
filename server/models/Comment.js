const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "post",
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true
    }
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;