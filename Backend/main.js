import express from 'express'
import bodyParser from 'body-parser'
const app = express()
const port = 3000
import cors from 'cors'
import mongoose from 'mongoose'
import information from '../models/form.js'


let a=  await mongoose.connect('mongodb://localhost:27017/FormInformation');

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
  
})

app.post('/',(req,res)=>{
  const data=req.body
  console.log(data)
  let inf=new information({'name':data.name, 'email':data.email,'country':data.country,'phone':data.phone,'check':data.checkbox})
  inf.save()

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})