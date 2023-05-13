import cors from "cors";
import express from "express";
import router from "./routers";

const PORT = 1337;
const app = express();

app.use([cors(), express.json()]);

app.get("/", (req, res) => {
  res.send("Hello From Express!");
});

app.use("/api", router);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
