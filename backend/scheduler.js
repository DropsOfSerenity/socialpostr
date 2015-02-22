var sails = require('sails');

sails.load(function () {
  checkPosts();
});

function checkPosts() {
  Post.find().where({
    
  }).exec(function (err, posts) {
    console.log(posts);
  });
}

// setInterval(function() {
//   console.log('hello');
// }, 1000);
