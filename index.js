import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Hello From Server" });
});
app.get("/health", (req, res) => {
  res.send("OK");
});
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
