
const express = require('express');
const app = express();
const dotenv=require('dotenv');
dotenv.config();

const port=process.env.PORT;

const githubdata={
    "name":"Ishan",
    "age":21,
    "role":'developer'
}
app.get('/', (req, res) => {
  res.send('Hello Worlld!')
})
app.get('/github', (req, res) => {
  res.json(githubdata)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})