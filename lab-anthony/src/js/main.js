'use strict';

const socket = io();

let messageForm = document.getElementById('message-form');
let messageInput = document.getElementById('message-input');
let usernameForm = document.getElementById('username-form');
let usernameInput = document.getElementById('username-input');
let messagesContainer = document.getElementById('messages');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let message = messageInput.value;
  socket.emit('send-message', {message: message});
});

socket.on('receive-message', (data) => {
  let message = new ChatMessage(data);
  message.render(messagesContainer);
});

usernameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let username = usernameInput.value;
  socket.emit('set-username', {username: username});
});
