const http = require("http");
const { Server } = require("socket.io");

const app = require("./src/app");
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`🚀 Server up and running on port ${PORT}`);
});

io.on("connection", (socket) => {
  socket.emit("Hello");
});
