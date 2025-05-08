const sqllist = {

  selectList : "SELECT * FROM book",
  selectInfo : "SELECT * FROM book WHERE bookid=?",
  // insertInfo : "INSERT board (title, writer, content) VALUES (?,?,?)",
  // updateInfo : "UPDATE board " 
  //            + "SET title=?, writer=?, content=?"
  //            + "WHERE id = ?",
  // deleteInfo : "DELETE FROM board WHERE id=?"
  }
  
  module.exports = sqllist;