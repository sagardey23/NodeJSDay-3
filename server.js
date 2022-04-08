const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("Success Connected to postman")
})

app.post("/addUser", (req, res) =>{
    console.log(req.query);
    res.send("Success addUser")
})

app.put("/editUser/:id", (req, res) => {
    console.log(req.params);
    res.send("Success editUser")
})
app.listen(6001);