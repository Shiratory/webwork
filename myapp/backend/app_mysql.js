//app_mysql.js

const express = require('express');
//const session = require('express-session');
//const fileStore = require('session-file-store')(session);

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

app.use("/api/book", require("./routers/book"))

app.listen(port, () => {
  console.log(`http://localhost:${port} 서버 실행됨`)
});