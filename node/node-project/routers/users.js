const express = require("express");
const router = express.Router();

// 로그인 정보
router.get("/info", (req, res) => {
  res.send({email: req.session.email})
});

// 로그인
router.post("/login", (req, res) => {
  // const email = req.query.email
  // const pw = req.query.pw
  const {email, pw} = req.body
  // 로그인 처리
  req.session.email = email;
  req.session.save(err => {
    if(err) throw err;
    res.send({code:"success"});
  });
});

// 로그아웅
router.post("/logout", (req, res) => {
  req.session.destroy();
  res.send("logout success");
});

module.exports = router;