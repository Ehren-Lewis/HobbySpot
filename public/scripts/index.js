const { DatabaseError } = require("sequelize");

const discussionsContainer = $(".discussions");


const getDiscussions = async () => {
    const response = await fetch("./", {
        method: "GET"
    });
}

// getDiscussions().then(data => {
//     for (let i = 0; i < data.length; i++) {
//         const currentUser = data[i].userName;
//         const hobbyTopic = data[i].hobby_topic;
//         const discussionTimeStamp = data[i].time_stamp;
//         const discussionTitle = data[i].discussion_title;
//         const discussionText = data[i].text_field;
//     }
// })

// hobby_topic: {
//     allowNull: false,
//     references: {
//         model: Hobbies,
//         // on hobby name
//     }
// },
// discussion_title: {
//     type: DataTypes.STRING,
//     allowNull: false
// },
// userName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     references: {
//         model: Users
//         // on username
//     }
// },
// text_field: {
//     type: DataTypes.STRING
// },
// timestamp: {
//     //timestamp somehow
// }


