const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

// middle ware must
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));

const data = [
  {
    name: "abc",
    profe: "web-dev",
    gender: "male",
  },
  {
    name: "abc",
    profe: "web-dev",
    gender: "male",
  },
  {
    name: "abc",
    profe: "web-dev",
    gender: "male",
  },
  {
    name: "abc",
    profe: "web-dev",
    gender: "male",
  },
  {
    name: "abc",
    profe: "web-dev",
    gender: "male",
  },
];

app.get("/", (req, res) => {
  res.json(data);
});
app.get("/data", (req, res) => {
  res.send("more data is comming soooooooooooooon");
});
app.post("/go-login", async (req, res) => {
  const data = req;
  console.log(data);
  res.send("hello");
});
app.post("/register", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send(data);
});

//save a room in database
app.post("/rooms", async (req, res) => {
  const room = req.body;
  //  console.log(room);
  console.log(room);
  res.send("rooms");
});
app.post("/create-product", async (req, res) => {
  const product = req.body;
   console.log(product);
  console.log(product);
  res.send(product);
});

app.listen(port, () => {
  console.log(`my frist server is running ${port}`);
});
