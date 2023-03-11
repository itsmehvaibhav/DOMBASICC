function updateLastUserActivityTime(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentTime = new Date();
        // assume there is a function called updateUser with a signature like:
        // updateUser(userId, {lastActivityTime: currentTime})
        updateUser(userId, {lastActivityTime: currentTime})
          .then(() => resolve())
          .catch(error => reject(error));
      }, 1000);
    });
  }
  createPost(postData)
  .then(post => {
    return updateLastUserActivityTime(post.userId)
      .then(() => post);
  })
  .then(post => {
    console.log('Post created:', post);
    console.log('User last activity time:', post.user.lastActivityTime);
    return deletePost(post.id);
  })
  .then(() => {
    return getAllPosts(post.userId);
  })
  .then(posts => {
    console.log('New set of posts:', posts);
  })
  .catch(error => console.error(error));
