const express = require("express");
const router = express.Router();
const query = require("../mysql");
const sqllist = require("../mysql/customersSQL");
const { updateInfo } = require("../mysql/customersSQL");

// 전체조회
router.get("", async (req,res) => {
  const result = await query('customers', "selectList", null);
  res.send(result);
});

// 등록 req.body, req.params, req.query, req.file
router.post("", async (req, res) => {
  const result = await query('customers', "insertInfo", [req.body.name, req.body.email, req.body.phone]);
  res.send(result);
});

// 단건조회
router.get("/:id", async (req, res) => {
  const result = await query('customers', "selectInfo", req.params)
  res.send(result)
});

// 수정
router.put("/:id", async (req, res) => {
  const result = await query('customers', "updateInfo", [req.body.name, req.body.email, req.body.phone, req.body.address, req.params.id]);
  res.send(result);
});

// 삭제
router.delete("/:id", async (req, res) => {
  const result = await query('customers', "deleteInfo", req.params.id);
  res.send(result);
});

module.exports = router;