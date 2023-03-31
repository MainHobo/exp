import express from "express";

const app = express();
const port = 3000;
app.listen(process.env.PORT || port);
app.use(express.static("public"));

app.post("/api", (req, res) => {
  console.log(req.body);
});
