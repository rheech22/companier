const { Schema } = require("mongoose");
const shortId = require("./types/short-id");
const commentSchema = require("./comment");
const postSchema = require("./post");

const UserSchema = new Schema(
  {
    shortId,
    email: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [postSchema],
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = UserSchema;
