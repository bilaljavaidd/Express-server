import express from 'express'

const app = express();
const PORT = 3000;

app.get('/',(req, res)=>{
    res.send('abhi ap home page pe hein' + new Date())
})

app.get('/about',(req, res)=>{
    res.send('abhi ap about page pe hein' + new Date())
})

app.get('/contact',(req, res)=>{
    res.send('abhi ap contact page pe hein' + new Date())
})

app.get('/dashboard',(req, res)=>{
    res.send('abhi ap dashboard page pe hein' + new Date())
})

app.listen(PORT,()=>{
    console.log(`apka port okay chl rha ha number ${PORT} pe`)
})
