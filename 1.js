const express=require('express');

const app=express();

app.get('/',(request,response)=>{
response.send('hello ajax');
})

app.listen(8000,()=>{
    console.log("go");
})