const express = require("express");
const router = express.Router();
const query = require("../mysql");
const sqllist = require("../mysql/boardSQL");
const { updateInfo } = require("../mysql/boardSQL");

// 전체조회
router.get("", async (req,res) => {
  const result = await query('board', "selectList", null);
  res.send(result);
});

// 등록 req.body, req.params, req.query, req.file
router.post("", async (req, res) => {
  const result = await query('board', "insertInfo", [req.body.title, req.body.writer, req.body.content]);
  res.send(result);
});

// 단건조회
router.get("/:id", async (req, res) => {
  const result = await query('board', "selectInfo", req.params.id)
  res.send(result)
});

// 수정
router.put("/:id", async (req, res) => {
  const result = await query('board', "updateInfo", [req.body.title, req.body.writer, req.body.content, req.params.id]);
  res.send(result);
});

// 삭제
router.delete("/:id", async (req, res) => {
  const result = await query('board', "deleteInfo", req.params.id);
  res.send(result);
});

module.exports = router;