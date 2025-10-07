// server.js
const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer(app);


// Attach io to app so routes/controllers can access it
app.set("io", io);

io.on("connection", (socket) => {
  console.log("🟢 Frontend connected:", socket.id);

  socket.on("subscribe", (UnitId) => {
    console.log(`Socket ${socket.id} subscribed to inverter ${UnitId}`);
    socket.join(UnitId);
  });

  socket.on("disconnect", () => {
    console.log("🔴 Frontend disconnected:", socket.id);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


