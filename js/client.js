const socket = io('http://192.168.103.244:8000');

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

const form = document.getElementById('send-container');
const messageInput = document.getElementById('msgInput');
const messageContainer = document.querySelector('.wrapper');
var audio = new Audio('assests_notify.mp3');

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('msg');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if (position === 'left') {
        audio.play();
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    console.log('Sending message:', message);
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
});

const name = prompt("Enter your name to join");
console.log('User name:', name);
socket.emit('new-user-joined', name);

socket.on('user-joined', (name) => {
    console.log('User joined:', name);
    append(`${name} joined the chat`, 'right');
});

socket.on('receive', (data) => {
    console.log('Received message:', data);
    append(`${data.name}: ${data.message}`, 'left');
});

socket.on('left', (name) => {
    console.log('User left:', name);
    append(`${name} left the chat!`, 'left');
});
