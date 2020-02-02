function Ui() {
  this.loadAllPostsButton = document.getElementById('loadAllPostsButton');
  this.loadPostByIdButton = document.getElementById('loadPostByIdButton');
  this.sendNewPostButton = document.getElementById('sendNewPostButton');
  this.postContainer = document.getElementById('postContainer');
  this.postTitle = document.getElementById('postTitle');
  this.postAuthor = document.getElementById('postAuthor');
  this.postText = document.getElementById('postText');
  this.postId = document.getElementById('postId');
}

Ui.prototype.inputId = function () {
  return this.postId.value;
};

Ui.prototype.inputData = function () {
  return {
    title: this.postTitle.value,
    author: this.postAuthor.value,
    text: this.postText.value,
  };
};

Ui.prototype.clearInputId = function () {
  this.postId.value = '';
};

Ui.prototype.clearInputData = function () {
  this.postTitle.value = '';
  this.postAuthor.value = '';
  this.postText.value = '';
};

Ui.prototype.uiData = function () {
  const postTitle = this.postTitle.value;
  const postAuthor = this.postAuthor.value;
  const postText = this.postText.value;

  if (postTitle && postAuthor && postText) {
    return new Promise((resolve) => {
      resolve(this.returnObj(postTitle, postAuthor, postText));
      return true;
    });
  } return false;
};

Ui.prototype.inputValue = function (title = '', author = '', text = '') {
  this.postTitle.value = title;
  this.postAuthor.value = author;
  this.postText.value = text;
};

Ui.prototype.renderResponses = function (res) {
  res.forEach(((post) => {
    const div = document.createElement('div');
    div.innerHTML = `<div class="row" id="${post.id}">
        <h4 class="col-12 mt-5 mb-3">${post.title}</h4>
        <h5 class="mb-3 font-italic col-12">${post.author}</h5>
        <p class="col-12">${post.text}</p>
        <button class="btn btn-primary btn-sm ml-3 mr-3" id="deleteButton">
          Delete
        </button>
        <button class="btn btn-primary btn-sm" id="editButton">
          Edit
        </button>
      </div>`;
    this.postContainer.append(div);
  }));
};

Ui.prototype.renderResponse = function (post) {
  const div = document.createElement('div');
  div.innerHTML = `<div class="row" id="${post.id}">
        <h4 class="col-12 mt-5 mb-3">${post.title}</h4>
        <h5 class="mb-3 font-italic col-12">${post.author}</h5>
        <p class="col-12">${post.text}</p>
        <button class="btn btn-primary btn-sm ml-3 mr-3" id="deleteButton">
          Delete
        </button>
        <button class="btn btn-primary btn-sm" id="editButton">
          Edit
        </button>
      </div>`;
  this.postContainer.append(div);
};
