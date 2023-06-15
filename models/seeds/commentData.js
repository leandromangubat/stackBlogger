const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Good point!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I agree with you!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "I don't believe that's correct!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "I didn't know that!",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "I disagree!",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "I love this!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "I agree with you!",
    user_id: 2,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
