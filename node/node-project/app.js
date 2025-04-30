const express = require('express')
const app = express()
const port = 3000

let data = [{
  "id": "2",
  "first_name": "Rikki",
  "last_name": "Red",
  "email": "rred1@nps.gov",
  "salary": "$9.96",
  "department_id": 20,
  "job_id": "sales"
},
{
  "id": "3",
  "first_name": "Datha",
  "last_name": "Loosemore",
  "email": "dloosemore2@behance.net",
  "salary": "$6.59",
  "department_id": 30,
  "job_id": "it"
},
{
  "id": "4",
  "first_name": "길동",
  "last_name": "Loton",
  "email": "eloton3@dagondesign.com",
  "salary": "$3.38",
  "department_id": 10,
  "job_id": "it"
},
{
  "id": "5",
  "first_name": "Emmalee",
  "last_name": "Laboune",
  "email": "elaboune4@salon.com",
  "salary": "$8.40",
  "department_id": 20,
  "job_id": "sales"
},
{
  "id": "6",
  "first_name": "Michal",
  "last_name": "Ivanyushkin",
  "email": "mivanyushkin5@hao123.com",
  "salary": "$8.21",
  "department_id": 10,
  "job_id": "it"
},
{
  "id": "7",
  "first_name": "Robb",
  "last_name": "Gauche",
  "email": "rgauche6@fc2.com",
  "salary": "$8.09",
  "department_id": 10,
  "job_id": "it"
},
{
  "id": "8",
  "first_name": "Ange",
  "last_name": "Leon",
  "email": "aleon7@ucla.edu",
  "salary": "$0.33",
  "department_id": 10,
  "job_id": "sales"
},
{
  "id": "",
  "first_name": "유미",
  "last_name": "김",
  "job_id": "it",
  "department_id": 20,
  "salary": "1000",
  "email": "a@a.a"
},
{
  "id": "10",
  "first_name": "퍼이",
  "last_name": "라이",
  "job_id": "sales",
  "department_id": "20",
  "salary": "10101",
  "email": "first@mail.com"
},
{
  "id": "11",
  "first_name": "안녕",
  "last_name": "방갑",
  "job_id": "it",
  "department_id": "20",
  "salary": "10101",
  "email": "hello@mail.com"
} ];

// 전체조회 REST
app.get('/emp', (req, res) => {
  res.send(data)
})

// 사원 하나만 단건조회
app.get('/emp/:id', (req, res) => {
  let id = req.params.id
  let result = data.find(emp => emp.id === id) // (function(emp{if(emp.id == id) return emp}))
  if(result)
    res.send(result)
  else
  res.send("not found")
})

// 부서가 10번인 첫번째 사원 find?department_id=10
app.get('/find', (req, res) => {
  let department_id = req.query.department_id
  let result = data.find(emp => emp.department_id == department_id);
  if(result)
    res.send(result)
  else
  res.send("not found")
})

// job_id가 'it'인 사원만 filter?job_id=it
app.get('/filter', (req, res) => {
  let job_id = req.query.job_id
  let result = data.filter(emp => emp.job_id === job_id);
  if(result.length > 0)
    res.send(result)
  else
  res.send("not found")
})

// firstname 순 정렬
app.get('/sort', (req, res) => {
  res.send('home hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
