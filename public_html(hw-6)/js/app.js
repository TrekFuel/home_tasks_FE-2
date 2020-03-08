function eventListeners() {
  // eslint-disable-next-line no-undef
  const rest = new Rest();
  // eslint-disable-next-line no-undef
  const ui = new Ui();

  ui.loadAllPostsButton.addEventListener('click', (event) => {
    event.preventDefault();
    rest.getAllPosts()
      .then(ui.renderResponses);
  });

  ui.loadPostByIdButton.addEventListener('click', (event) => {
    event.preventDefault();
    rest.getPost(ui.inputIdToGet())
      .then(ui.renderResponse)
      .then(ui.clearInputIdToGet);
  });

  ui.sendNewPostButton.addEventListener('click', (event) => {
    event.preventDefault();
    rest.sendNewPost(ui.inputData())
      .then(ui.clearInputData);
  });

  ui.deletePostByIdButton.addEventListener('click', (event) => {
    event.preventDefault();
    rest.deletePost(ui.inputIdToDel())
      .then(ui.clearInputIdToDel);
  });

  ui.editPostByIdButton.addEventListener('click', (event) => {
    event.preventDefault();
    rest.editPost(ui.inputIdToEdit(), ui.inputDataToEdit())
      .then(ui.clearInputDataToEdit);
  });
}

eventListeners();
