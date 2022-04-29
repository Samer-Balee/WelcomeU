const db = require('../config/connection.js');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');
// const postSeeds = require('./postSeeds.json');

db.once('open', async () => {
  try {
    // await Post.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    // for (let i = 0; i < postSeeds.length; i++) {
    //   const { _id, postAuthor } = await Post.create(postSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: postAuthor },
    //     {
    //       $addToSet: {
    //         posts: _id,
    //       },
    //     }
    //   );
    // }
    console.log('all done!');
  process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  
});