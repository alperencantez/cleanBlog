const mongoose = require("mongoose");
const { Schema } = mongoose;

const schemaPost = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("post", schemaPost);

module.exports = Post;
