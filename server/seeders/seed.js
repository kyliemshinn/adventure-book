const db = require('../config/connection');
const { Post, User, Comment } = require('../models');

const postSeed = require('./postSeed.json');
const userSeed = require('./userSeed.json');
const commentSeed = require('./commentSeed.json');

db.once('open', async () => {
    //clean database
    await Post.deleteMany({});
    await User.deleteMany({});

    //bulk create from the models
    await User.insertMany(userSeed);

    const randomUser = await User.findOne({});
    for(e of postSeed) {
        e.author = randomUser._id;
        e.location = { latitude: 1, longitude: 2 };
    }

    await Post.insertMany(postSeed);
    const randomPost = await Post.findOne({});
    for(e of commentSeed) {
        e.commentAuthor = randomUser._id;
        e.post = randomPost._id;
    }

    await Comment.insertMany(commentSeed);

    // const posts = await Post.insertMany(postSeed);
    // const users = await User.insertMany(userSeed);


    //NOTE: can randomly generate the posts to users if needed

    // for(newPost of posts) {
    //     const tempUser = users[Math.floor(Math.random() * users.length)];
    //     tempPost.users.push(newPost._id);
    //     await newPost.save();
    // }

    console.log('data has been seeded!')
    process.exit(0);
})