const sqllist = {

  selectList : "SELECT * FROM comment WHERE bid=?",
  insertInfo : "INSERT comment (title, writer, content) VALUES (?,?,?)",
  deleteInfo : "DELETE FROM comment WHERE bid=?"
  }
  
  module.exports = sqllist;