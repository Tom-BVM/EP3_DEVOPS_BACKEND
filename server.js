const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend OK", service: "EP3" });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
