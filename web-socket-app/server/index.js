const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("A user has connected");
  socket.on("message", (message) => {
    // This could be any custom event

    console.log(message);
    io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
  });
});

http.listen(8090, () => {
  console.log("listening on http://localhost:8090");
});
