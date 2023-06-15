const { Post } = require("../models");

const postData = [
  {
    title: "HTML/CSS Post",
    content: "This is a post about HTML/CSS.",
    user_id: 1,
  },
  {
    title: "JavaScript Post",
    content: "This is a post about Javascript",
    user_id: 2,
  },
  {
    title: "NodeJS Post",
    content: "This is a post about NodeJS.",
    user_id: 3,
  },
  {
    title: "ExpressJS Post",
    content: "This is a post about ExpressJS.",
    user_id: 4,
  },
  {
    title: "SQL Post",
    content: "This is a post about SQL.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
