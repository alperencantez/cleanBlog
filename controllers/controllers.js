const Post = require('../models/Post.js');

exports.addGet = async (req, res) => {
    res.render('add');
};

exports.main = async (req, res) => {
    const posts = await Post.find({}).sort({ _id: -1 });
    res.render('index', { posts });
};

exports.about = async (req, res) => {
    res.render('about');
};

exports.addPost = async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
};

exports.post = async (req, res) => {
    const post = await Post.find({ _id: req.params.id });
    res.render('post', { post });
};

exports.updatePost = async (req, res) => {
    await Post.findOneAndUpdate({ _id: req.params.id }, { detail: req.body.updatedText });
    const post = await Post.find({ _id: req.params.id });

    res.render('post', { post });
};

exports.deletePost = async (req, res) => {
    await Post.deleteOne({ _id: req.params.id });
    res.redirect('/');
};
