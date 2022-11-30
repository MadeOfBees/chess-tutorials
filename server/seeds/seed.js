const db = require('../config/connection')
const {Lessons} = require('../models');
// const {User} = require('../models');

const lessonData = require('./lessonData.json');
// const userData = require('./userData.json');
db.once('open', async() => {
    await Lessons.deleteMany({});
    // await User.deleteMany({});
    const lessons = await Lessons.insertMany(lessonData);

    console.log('Lessons seeded');
    process.exit(0);
})