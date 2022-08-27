const express = require('express')
const app = express()

let port = 5000;

app.get("/api", (req, res) =>{
    res.send ('Home page');
})


app.listen(port, () => {
    console.log("server started")
});