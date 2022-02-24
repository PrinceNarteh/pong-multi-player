const server = require("http").createServer();
const io = require("socket.io")(server);
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`🚀 Server up and running on port ${PORT}`);
});

io.on("connection", (socket) => {
  socket.emit("Hello");
});
