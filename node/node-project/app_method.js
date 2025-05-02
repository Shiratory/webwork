const express = require('express')


const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'c:/temp/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage })

// express instance 생성
const app  = express()
const port = 80

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

let boards = [{id:1, title:"갈비탕", content:"해물탕"},
              {id:2, title:"마라탕", content:"낙지탕탕이"},
              {id:3, title:"나비탕", content:"탕탕탕"}

  
] // id, title, content

// 로그 미들웨어 morgan
const morgan = require('morgan')
app.use(morgan(':date[iso] :url :remote-addr :referrer '))



// 라우트 설정
app.get('/download', (req, res, next) => {
  const filepath = 'C:/temp/uploads/doge.jpg';
  const downname = 'doge.jpg';  
  res.setHeader('Content-Disposition', `attachment; filename=${downname}`); // 이게 핵심 
  res.sendFile(filepath);
});  

app.post('/profile', upload.single('avatar'), function (req, res) {
  console.log(req.file.size);
  console.log(req.file.filename);
  console.log(req.file.originalname);
  res.send("OK");
  // 텍스트 필드가 있는 경우, req.body가 이를 포함할 것입니다.
})

app.get('/' , (req, res)=>{
  res.send("hello");
})

// 전체조회
app.get('/board', (req, res) => {
  res.send(boards);
})

// 단건조회

// 등록
app.post('/board', (req, res) => {
  const board = req.body; // = VO {}
  boards.push(board);
  console.log("받은 파라미터", board);
  res.send(board);
})
// 수정
app.put('/board/:id', (req, res) => {
  const id = req.params.id
  const board = req.body; // json, form-data

  // find -> idx
  const idx = boards.findIndex((board) => board.id == id);
  boards[idx] = board;
})

// 삭제
app.delete('/board/:id', (req, res) => {
  const id = req.params.id

  // find -> idx
  const idx = boards.findIndex( ele => ele.id == id )
  if(idx >= 0){
    boards = boards.filter( ele => ele.id != id )
    res.send(boards)
  } else{
    res.send("not found");
  }
})

let emps = [{id:0, name:"창섭"},{id:1, name:"순살"}]
//route() 같은 리소스(url) method 타입별로 묶어서 라우트 지정
app.route("/emp")
   .get((req,res) => { res.send(emps) })
 //.get((req,res) => { res.send(emps[req.query.id]) })
   .post((req,res) => { res.send(req.body) })
   .put((req,res) => { res.send(req.body)})
   .delete((req,res) => { res.send(req.body.id) })

// router를 이용하여 모듈(파일) 분리해서 리소스별로 라우트 지정
app.use('/product', require('./routers/product'))


app.listen(port, () => {
  console.log(`http://localhost:${port} 서버 실행됨`)
});