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
    rest.getPost(ui.inputId())
      .then(ui.renderResponse)
      .then(ui.clearInputId);
  });

  ui.sendNewPostButton.addEventListener('click', (event) => {
    event.preventDefault();
    rest.sendNewPost(ui.inputData())
      .then(ui.clearInputData);
  });
}

eventListeners();
