const http = require("http");
const app = require("./app");
const WebSocket = require("ws");

const PORT = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// Store all connected clients
const wssClients = new Set();

wss.on("connection", (ws) => {
  console.log("🟢 WebSocket client connected");
  wssClients.add(ws);

  ws.on("close", () => {
    console.log("🔴 WebSocket client disconnected");
    wssClients.delete(ws);
  });
});

// Attach to Express app so controllers can use it
app.set("wssClients", wssClients);

// Start the combined server
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
