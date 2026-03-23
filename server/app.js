import express from "express";
import "dotenv/config";
import http from "http";
import cors from "cors";
import codeRoutes from "./routes/codeRoutes.js";

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.json());

app.get("/check/api", (req, res, next) => {
  res.send("server is running");
});

app.use(codeRoutes);

server.listen(3001, () => {
  console.log("server is running");
});
