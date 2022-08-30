const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const database = require('./database')

const port = 5000;
const app = express()

app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) =>{
    res.send('Home page');
})

app.post("/api/order", (req,res) =>{

    const currentDate = new Date();
        let data = {
            name: req.body.name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            product: req.body.product,
            desc: req.body.desc,
            seen: false,
            created_at: currentDate,
            updated_at: currentDate,
        }    
    // let sql = `INSERT INTO orders('name', 'email', 'phone_number', 'desc', 'seen', 'created_at', 'updated_at') VALUES ("${f_name}","${email}","${phone_number}","${desc}",${false},${currentDate},${currentDate})`;
        let sql = 'INSERT INTO orders SET ?'
        database.query(sql, data, function(err, result){
            if(err) throw err;
            console.log("record Inseted");
        })
        res.send('success')
        console.log(req.body)
        
})
app.post("/api/message", (req,res) => {

    const currentDate = new Date();
    let data ={
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        seen: false,
        created_at: currentDate,
        updated_at: currentDate,
    }

    let sql = 'INSERT INTO feedback SET ?'
    database.query(sql, data, function(err, result){
        if(err) throw err;
        console.log("Feedback Sent")
    })
    res.send('success');
    console.log(req.body);
})
app.listen(port, () => {
    console.log("server started")
   
});