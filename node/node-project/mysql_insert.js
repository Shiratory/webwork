// mysql_insert.js

const pool = require("./mysql")

// 2. SQL 실행
const data = {name:"붕어공주", email:"zzz@y.c", phone:"015"};
sql = "insert customers (name,email,phone) values (?,?,?)";

pool.query(sql, [data.name, data.email, data.phone], function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    // 3. 결과 처리
    console.log(results);
  });