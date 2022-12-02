const db = require("../config/connection");
const { Lessons, User } = require("../models");

const lessonData = require("./lessonData.json");
const userData = require("./userData.json");

db.once("open", async () => {
  await Lessons.deleteMany({});
  const lessons = await Lessons.insertMany(lessonData);

  console.log("Lessons seeded");
  

  await User.deleteMany({});
  for (var i = 0; i < userData.length; i++) {
	var newUser = userData[i]

	await User.create(newUser)
}



  

  console.log("Users seeded");
  process.exit(0);
});


  

