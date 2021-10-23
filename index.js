const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();


mongoose.connect("mongodb+srv://"+process.env.NAME+":"+process.env.PASSWORD+"@cluster0.mdjqz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>console.log("your connection string..."))
.catch((err)=>console.log(err))

const app = express();
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(jsonParser)

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(cors())

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello 🤤🎈')
    .end();
});



const User = require('./routes/User')
app.use('/user', User);


const Messenger = require('./routes/Messenger')
app.use('/messenger', Messenger);


// Start the server
const PORT = process.env.PORT || 3011;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});