const { Schema, model } = require('mongoose');

const locationSchema = new Schema(
  {
    latitude: {
      type: Number,
      required: true,
      min: -90.0, // South Pole
      max: 90.0 // North Pole
    },
    longitude: {
        type: Number,
        required: true,
        min: -180.0,
        max: 180.0
    }
  }
)

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    tags: [{
      type: String,
      required: true // Must have at least one element
    }],
    location: {
      type: locationSchema,
      required: true
    },
    collectors: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    comments: [{
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }]
  }
);

const Post = model("Post", postSchema);

module.exports = Post;