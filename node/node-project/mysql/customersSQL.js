const sqllist = {

selectList : "select * from customers",
selectInfo : "select * from customers where id=?",
insertInfo : "insert customers (name, email, phone) values (?,?,?)",
updateInfo : "update customers " 
           + "set name=?, email=?, phone=?, address=? "
           + "where id = ?",
deleteInfo : "delete from customers where id=?"
}

module.exports = sqllist;