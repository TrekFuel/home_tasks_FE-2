function Ui() {
  this.loadAllPostsButton = document.getElementById('loadAllPostsButton');
  this.loadPostByIdButton = document.getElementById('loadPostByIdButton');
  this.sendNewPostButton = document.getElementById('sendNewPostButton');
  this.deletePostByIdButton = document.getElementById('deletePostByIdButton');
  this.editPostByIdButton = document.getElementById('editPostByIdButton');
  this.postContainer = document.getElementById('postContainer');
  this.postTitle = document.getElementById('postTitle');
  this.postAuthor = document.getElementById('postAuthor');
  this.postText = document.getElementById('postText');
  this.postTitleToEdit = document.getElementById('postTitleToEdit');
  this.postAuthorToEdit = document.getElementById('postAuthorToEdit');
  this.postTextToEdit = document.getElementById('postTextToEdit');
  this.postIdToGet = document.getElementById('postIdToGet');
  this.postIdToDel = document.getElementById('postIdToDel');
  this.postIdToEdit = document.getElementById('postIdToEdit');
}

Ui.prototype.inputIdToGet = function () {
  return this.postIdToGet.value;
};

Ui.prototype.inputIdToDel = function () {
  return this.postIdToDel.value;
};

Ui.prototype.inputIdToEdit = function () {
  return this.postIdToEdit.value;
};

Ui.prototype.clearInputIdToGet = function () {
  this.postIdToGet.value = '';
};

Ui.prototype.clearInputIdToDel = function () {
  this.postIdToDel.value = '';
};

Ui.prototype.inputData = function () {
  return {
    title: this.postTitle.value,
    author: this.postAuthor.value,
    text: this.postText.value,
  };
};

Ui.prototype.inputDataToEdit = function () {
  return {
    title: this.postTitleToEdit.value,
    author: this.postAuthorToEdit.value,
    text: this.postTextToEdit.value,
  };
};

Ui.prototype.clearInputData = function () {
  this.postTitle.value = '';
  this.postAuthor.value = '';
  this.postText.value = '';
};

Ui.prototype.clearInputDataToEdit = function () {
  this.postIdToEdit.value = '';
  this.postTitleToEdit.value = '';
  this.postAuthorToEdit.value = '';
  this.postTextToEdit.value = '';
};

Ui.prototype.renderResponses = function (res) {
  res.forEach(((post) => {
    const div = document.createElement('div');
    div.innerHTML = `<div class="row" id="${post.id}">
        <h4 class="col-12 mt-5 mb-3">${post.title}</h4>
        <h5 class="mb-3 font-italic col-12">${post.author}</h5>
        <p class="col-12">${post.text}</p>
        <p class="col-12" style="border-bottom: 2px solid blue">Id - ${post.id}</p>
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
        <p class="col-12" style="border-bottom: 2px solid blue">Id - ${post.id}</p>
      </div>`;
  this.postContainer.append(div);
};
