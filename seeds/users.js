const { User } = require("../models");

const userData = [
  {
    username: "tom",
    email: "tom@mail.com",
    password: 123456,
  },
  {
    username: "dick",
    email: "dick@mail.com",
    password: 123456,
  },
  {
    username: "harry",
    email: "harry@mail.com",
    password: 123456,
  },
  {
    username: "sarah",
    email: "sarah@mail.com",
    password: 123456,
  },
  {
    username: "vian",
    email: "vian@mail.com",
    password: 123456,
  },
  {
    username: "trystan",
    email: "trystan@mail.com",
    password: 123456,
  },
  {
    username: "ehren",
    email: "ehren@mail.com",
    password: 123456,
  },
  {
    username: "connor",
    email: "connor@mail.com",
    password: 123456,
  },
  {
    username: "carl",
    email: "carl@mail.com",
    password: 123456,
  },
];

const seedUsers = () => User.bulkCreate(userData);
console.log(userData);
module.exports = seedUsers;
