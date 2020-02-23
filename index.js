require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


const getMembers = require('./routes/getMembers');
const addTask = require('./routes/addTask');
const getTasks = require('./routes/getTasks');

app.use(cors());
app.use(bodyParser.json());

app.use('/getMembers', getMembers);
app.use('/addTask', addTask);
app.use('/getTasks', getTasks);

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("Connected to DB")
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port: ${process.env.PORT}`)
});



