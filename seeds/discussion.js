const { Discussions, User } = require("../models");

const discussionData = [
  {
    hobby_topic: "Climbing",
    discussion_title: "Leaving the gym",
    username: "vian",
    text_field: "Blah blah blah",
  },
  {
    hobby_topic: "Mushrooms",
    discussion_title: "Picking wild mushrooms",
    username: "vian",
    text_field: "Blah blah blah",
  },
  {
    hobby_topic: "Dancing",
    discussion_title: "Ballet vs Modern",
    username: "tom",
    text_field: "Blah blah blah",
  },
  {
    hobby_topic: "Gardening",
    discussion_title: "in the weeds",
    username: "harry",
    text_field: "Blah blah blah",
  },
];

const seedDiscussions = async () => {
  for (const discussion of discussionData) {
    const tempUser = await User.findOne({
      where: {
        username: discussion.username,
      },
    });
    const tempDiscussion = await Discussions.create({
      hobby_topic: discussion.hobby_topic,
      discussion_title: discussion.discussion_title,
      text_field: discussion.text_field,
    });
    await tempUser.addDiscussions(tempDiscussion);
  }
  // await Discussions.bulkCreate(discussionData)
};
console.log(discussionData);
module.exports = seedDiscussions;
