//app_mysql.js

const express = require('express');

// dotenv
require ("dotenv").config({path : "./mysql/.env"})
const app = express();
const port = 3000;

// cors
const cors = require('cors')
app.use(cors());

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json())


// 라우트 설정
    // 엔드포인트
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/customers", require("./routers/customers"))
app.use("/board", require("./routers/board"))
app.use("/comment", require("./routers/comment"))

app.listen(port, () => {
  console.log(`http://localhost:${port} 서버 실행됨`)
});