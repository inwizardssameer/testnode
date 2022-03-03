const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("hello world")
})
app.listen(8989, ()=>{
    console.log("server actived on port:8989")
})
