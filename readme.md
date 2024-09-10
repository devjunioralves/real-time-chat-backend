## REAL-TIME-CHAT-BACKEND

This project is a node microservice whose solution is to create chat rooms and exchange messages between users

### How to run the project?

You will need to configure your `.env` file with the information for your MongoDB database. After that, you should run the command `docker compose up -d`, which will start the 3 containers necessary for the application.

### What would I improve on this project?

##### In this project there is a lot to be improved, I leave here some points that in my opinion are very far from my liking.

- Unit tests, there is no test at all, neither unit nor integration, in my opinion it is very susceptible to errors.
- Error handling, the project contains some error handling, but it is superficial and unmapped
- SSE architecture, the project contains a socket to work with sending and receiving event-driven messages. However, in my opinion, it is not well structured in architecture, it depends too much directly on the socket.io library
