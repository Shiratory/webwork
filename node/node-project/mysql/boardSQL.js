const sqllist = {

  selectList : "SELECT * FROM board",
  selectInfo : "SELECT * FROM board WHERE id=?",
  insertInfo : "INSERT board (title, writer, content) VALUES (?,?,?)",
  updateInfo : "UPDATE board " 
             + "SET title=?, writer=?, content=?"
             + "WHERE id = ?",
  deleteInfo : "DELETE FROM board WHERE id=?"
  }
  
  module.exports = sqllist;