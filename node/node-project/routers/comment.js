const express = require("express");
const router = express.Router();
const query = require("../mysql");
const sqllist = require("../mysql/commentSQL");
const { updateInfo } = require("../mysql/commentSQL");

// 댓글목록
router.get("", async (req,res) => {
  const result = await query('comment', "selectList", null);
  res.send(result);
});

// 등록 req.body, req.params, req.query, req.file
router.post("", async (req, res) => {
  const result = await query('comment', "insertInfo", [req.body.title, req.body.writer, req.body.content]);
  res.send(result);
});


// 삭제
router.delete("/:id", async (req, res) => {
  const result = await query('comment', "deleteInfo", req.params.bid);
  res.send(result);
});

module.exports = router;