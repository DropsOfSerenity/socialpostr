var expect = require('chai').expect;

describe('Posts', function() {
  it('should not allow empty messages', function(done) {
    Post.create({
      message: '',
      scheduledfor: new Date(),
      isPosted: false,
      owner: 1
    }).exec(function() {});

    Post.find().exec(function(err, posts) {
      expect(posts.length).to.equal(0);
      done();
    });
  });
});
