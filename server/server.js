const path = require("path");
const express = require('express');
const db = require('./config/connection');
const { User, Post } = require('./models');
console.log(User);
console.log(Post);

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Adventure book server running on port ${PORT}!`);
    });
});