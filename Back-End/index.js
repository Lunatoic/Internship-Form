const express = require('express');
require ('./db/config');
const User = require('./db/user');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', async (req,res) =>{
    let user = new User(req.body);
    let result = await user.save();
    console.log('dataSaved');
    res.send(result);
})

app.listen(5000);