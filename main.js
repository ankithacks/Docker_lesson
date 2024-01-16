const express= require('express')
const app= express()

const PORT =process.env.PORT || 8000

app.get('/', (req, res)=>{
    console.log("hey this is dockerization of node server ")
})

app.listen(PORT, ()=>{
    console.log("server started on port ")
})