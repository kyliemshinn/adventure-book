const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true
    },
    tags: [{
      type: String,
      required: true // Must have at least one element
    }],
    location: {
      type: Number, // TODO make location schema
      required: true
    },
    collectors: [{
      type: Schema.Types.ObjectId,
      ref: "user"
    }],
    comments: [{
      type: Schema.Types.ObjectId,
      ref: "comment"
    }]
  }
);

const Post = model("Post", postSchema);

module.exports = Post;