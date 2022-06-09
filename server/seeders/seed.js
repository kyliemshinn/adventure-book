const db = require('../config/connection');
const { Post, User } = require('../models');

const postSeed = require('./postSeed.json');
const userSeed = require('./userSeed.json');

db.once('open', async () => {
    //clean database
    await Post.deleteMany({});
    await User.deleteMany({});

    //bulk create from the models
    await User.insertMany(userSeed);
    await Post.insertMany(postSeed);

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