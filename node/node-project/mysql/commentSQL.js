const sqllist = {

  selectList : "SELECT * FROM comment WHERE bid=?",
  insertInfo : "INSERT comment (bid, writer, content) VALUES (?,?,?)",
  deleteInfo : "DELETE FROM comment WHERE id=?"
  }
  
  module.exports = sqllist;