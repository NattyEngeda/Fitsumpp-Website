const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const TelegramBot = require('node-telegram-bot-api');
// const database = require('./database')

// Telegram Bot Api
const token = '5644966336:AAHMsG4oWCU9osAXcNDp5VSaPBPdbhgSLhQ';

const port = 5000;
const app = express()

app.use(cors());
app.use(bodyParser.json());

const bot = new TelegramBot(token, {polling: true});

// Valid IDs for Telegram Bot 
const natty = 359753050;
const fitsum = '';
const teamr = '';


app.get("/api", (req, res) =>{
    res.send('Home page');
})

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Welcome');
    bot.sendMessage(msg.chat.id,"<b>Name: </b>" + msg.chat.first_name + "\n <b>Id:</b> "+ msg.chat.id, {parse_mode: "HTML"});
})

// Order Route
app.post('/api/order', (req, res, next)=>{    
    let name = req.body.name;
    let phone_number = req.body.phone_number;
    let email = req.body.email;
    let product = req.body.product;
    let quantity = req.body.quantity;
    let description = req.body.description;

    // Send Message to telegram bot
    bot.sendMessage(
        natty,
        "<b>Order</b> \n <b>Name: </b>" + name + "\n <b>Phone Number: </b>"+ phone_number + "\n <b>Email: </b>" + email + "\n <b>Product: </b>" + product + "\n <b>Quantity: </b>" + quantity + "\n <b>Description: </b>" + description,
        {parse_mode: "HTML"}
    )
    res.send('success');  
})

// Message Route
app.post('/api/message', (req, res, next) =>{
    console.log(req.body);
    let name = req.body.name;
    let phone_number = req.body.phone_number;
    let email = req.body.email;
    let message = req.body.message;

    // Send Message to telegram bot
    bot.sendMessage(
        natty,
        "<b>Message</b> \n <b>Name: </b>" + name + "\n <b>Phone Number: </b>"+ phone_number + "\n <b>Email: </b>" + email + "\n <b>Message: </b>" + message,
        {parse_mode: "HTML"}
    )
    res.send('success'); 
})

app.listen(port, () => {
    console.log("server started")
   
});