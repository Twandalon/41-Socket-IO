'use strict';

class ChatMessage {
  constructor(data) {
    this.username = data.username  + ': ';
    this.timestamp = data.timestamp;
    this.message = data.message;
  }

  render(parentElement){
    let container = document.createElement('div');
    let timestamp = document.createElement('div');
    let username = document.createElement('div');
    let message = document.createElement('div');

    message.classList.add('message-text');

    container.classList.add('message');
    timestamp.classList.add('timestamp');
    username.classList.add('username');

    username.textContent = this.username;
    message.textContent = this.message;
    timestamp.textContent = this.timestamp;

    container.appendChild(username);
    container.appendChild(message);
    container.appendChild(timestamp);

    parentElement.appendChild(container);
  }
}
