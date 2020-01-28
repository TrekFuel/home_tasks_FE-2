function Rest() {
  this.API = 'http://localhost:3006/';
  this.xhr = new XMLHttpRequest();
}

Rest.prototype.getAllPosts = function () {
  this.xhr.open('GET', `${this.API}posts`);
  this.xhr.send();

  this.xhr.responseType = 'json';

  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      return this.xhr.response;
    }
    return false;
  };
};

Rest.prototype.getPostById = function (id) {
  this.xhr.open('GET', `${this.API}posts/${id}`);
  this.xhr.send();

  this.xhr.responseType = 'json';

  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      return this.xhr.response;
    }
    if (this.xhr.status === 404) {
      return 'Not found';
    }
    return false;
  };
};

Rest.prototype.sendNewPost = function () {
  const data = {
    title: 'BMW',
    author: 'Nick',
    text: 'Hi',
  };

  this.xhr.open('POST', `${this.API}posts`);
  this.xhr.setRequestHeader('Content-Type', 'application/json');
  this.xhr.send(JSON.stringify(data));

  this.xhr.onload = () => {
    if (this.xhr.status === 201) {
      return this.xhr.response;
    }
    return false;
  };
};

Rest.prototype.deletePostById = function (id) {
  this.xhr.open('DELETE', `${this.API}posts/${id}`);
  this.xhr.send();

  this.xhr.onload = () => this.xhr.response;
};

Rest.prototype.editPostById = function (id) {
  const data = {
    title: 'BMW',
    author: 'Nick',
    text: 'Hi',
  };

  this.xhr.open('PUT', `${this.API}posts/${id}`);
  this.xhr.setRequestHeader('Content-Type', 'application/json');
  this.xhr.send(JSON.stringify(data));

  this.xhr.onload = () => this.xhr.response;
};
