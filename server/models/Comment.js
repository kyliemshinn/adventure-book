const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    content: {
      type: String
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "post"
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;