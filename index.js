const express = require("express");
const jwt = require("jsonwebtoken");
const {userRouter} = require("./routes/userroute")
const {courseRouter} = require("./routes")
const app = express();



app.get("/course/purchase" , function(req, res){
    
})


app.get("/course" , function(req, res){
    
})



app.post("/admin-signup" , function(req, res){
    
})


app.post("/admin-signin" , function(req, res){
    
})

app.post("/create" , function(req, res){
    
})


app.delete("/delete" , function(req,res){

})

app.listen(3000);
