// D:\my-portfolio\backend\server.js

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable Cross-Origin requests from frontend
app.use(cors());

// Sample project data
const projects = [
  { id: 1, title: "Portfolio Website", description: "My personal website" },
  { id: 2, title: "ToDo App", description: "React + Node.js task manager" }
];

// API route to return projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// Default route to show it's working
app.get("/", (req, res) => {
  res.send("Portfolio API is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
