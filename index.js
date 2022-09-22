const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const Post = require("./models/Post.js");
const app = express();

// Establish DB Connection
mongoose.connect(process.env.MONGODB_URI);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Template engine
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.render("index", { posts });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", async (req, res) => {
  res.render("add");
});

app.post("/add", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

app.get("/post/:id", async (req, res) => {
  const post = await Post.find({ _id: req.params.id });
  res.render("post", { post });
});

app.listen(3000, () => console.log("Express is up and running!"));
