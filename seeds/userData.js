// Importing Post model from ../models directory
const { User } = require("../models");
// Array of dummy blog post data
const userData = [
  {
    username: "Jason",
    email: "jason@example.com",
    password: "password",
  },
  {
    username: "Mark",
    email: "mark@example.com",
    password: "password",
  },
  {
    username: "Jake",
    email: "jake@example.com",
    password: "password",
  },
  {
    username: "Samantha",
    email: "sam@example.com",
    password: "password",
  },
  {
    username: "Loraine",
    email: "loraine@example.com",
    password: "password",
  },
];
// Function to seed posts table with dummy data using bulkCreate method
const seedUsers = () => User.bulkCreate(userData);
// Exporting seedPosts function for use in other files
module.exports = seedUsers;
