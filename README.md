# Web_Chat_App
A web chat application built with Node.js and Socket.io allows users to send and receive messages in real-time. This setup ensures quick updates and smooth interactions in the chat.

Overview :-
A web chat app enables real-time communication between users within a web browser interface. It facilitates interaction by allowing users to send and receive text messages, potentially with additional features like file sharing, emojis, and user presence indicators.

Features :-
Here are some core features you might consider:
•	Messaging: Send and receive text messages in real-time using WebSockets for a seamless experience.
•	User List: Display a list of currently online users to see who's available to chat with.
•	Usernames: Assign usernames to users for identification and personalization.
•	Chat History (Optional): Store past messages for reference or retrieval, potentially using a database like MongoDB.
•	File Sharing (Optional): Integrate file sharing functionality to allow users to send images, documents, or other files.


Technology Used :-
•	HTML: Provides the basic structure and content of the web page, including the chat interface elements.
•	CSS: Styles the HTML elements to create a visually appealing and user-friendly chat interface.
•	JavaScript: Handles client-side interactions, such as sending messages, updating the chat history, and managing user input.
•	Node.js: Acts as the server-side component, creating a WebSocket server that facilitates real-time communication between clients.
•	WebSockets: Enables bi-directional communication between the web browser and the server, allowing for real-time updates without constant page refreshes.


Setup Instructions :-
1.	Project Setup:
o	Create a project directory (e.g., web-chat-app).
o	Initialize a Node.js project using npm init -y.

2.	Install Dependencies:
o	Install required packages using npm:
Bash
npm install express socket.io
o	Express.js: A popular Node.js framework for simplifying server-side development.
o	Socket.IO: A library that simplifies WebSocket communication on both the client and server sides.

3.	Server-Side Code (index.js):
o	Create an Express.js server and handle WebSocket connections using Socket.IO.

4.	Client-Side Code (chat.html and chat.js):
o	Create an HTML file for the chat interface and a JavaScript file to handle client-side logic like connecting to the WebSocket server, sending messages, displaying received messages, and updating the user list.

5.	Run the Server:
o	Open a terminal in the project directory and run the Node.js server using node index.js.


Usage :-
1.	Access the App:
o	Open a web browser and navigate to http://localhost:3000 (or the port you specified in your server code).

2.	Start Chatting:
o	Enter a username and potentially join a chat room (if implemented).
o	Type your messages and press Enter or click a Send button to send them to other users.

