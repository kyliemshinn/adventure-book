const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    content: {
      type: String
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    tags: [{
      type: String
    }],
    location: {
      type: Number // TODO make location schema
    },
    collectors: [{
      type: Schema.Types.ObjectId,
      ref: "user"
    }],
    comments: [{
      type: String // TODO: make comment type
    }]
  }
);

const Post = model("Post", postSchema);

module.exports = Post;