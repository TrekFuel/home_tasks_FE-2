function Ui() {
  this.loadAllPostsButton = document.getElementById('loadAllPostsButton');
  this.postId = document.getElementById('postId').value;
  this.loadPostByIdButton = document.getElementById('loadPostByIdButton');
  this.postTitle = document.getElementById('postTitle').value;
  this.postAuthor = document.getElementById('postAuthor').value;
  this.postText = document.getElementById('postText').value;
  this.sendNewPostButton = document.getElementById('sendNewPostButton');
}

Ui.prototype.renderResponse = function (res) {
  res.forEach(((post) => {
    const div = document.createElement('div').classList.add('row');
    const template = `<div class="col-sm">
        <h4 class="mt-5 mb-3">${post.title}</h4>
        <h5 class="mb-3 font-italic">${post.author}</h5>
        <p>${post.text}</p>
      </div>`;
    div.innerHTML = template;
    document.body.querySelector('#container').prepend('div');
  }));
};
