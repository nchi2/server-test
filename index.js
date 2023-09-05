const express = require("express");
const ip = require("ip");

const app = express();

app.get("/", (req, res) => {
  console.log(res);
  res.send(`Hello from server ${ip.address()}`);
});

app.get("/api", (req, res) => {
  //database 접속
  //데이터 가져오기
  //가져온 데이터를 json으로 변환해서 보내기
    res.json({ message: "Hello from server", ip: ip.address(), port:3000 });
});


app.listen(3000, () => {
    console.log(`Server is running on http://${ip.address()}:3000`);
 });
