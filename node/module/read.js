const fs = require('fs')
fs.readFileSync("c:/temp/data.txt", "UTF-8", function(err, data){
  console.log(data);
})
console.log("the end")