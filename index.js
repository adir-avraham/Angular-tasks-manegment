require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


const getAllMembers = require('./routes/getAllMembers');
const addTask = require('./routes/addTask');
const getTasks = require('./routes/getTasks');
const getOneMember = require('./routes/getOneMember');

app.use(cors());
app.use(bodyParser.json());

app.use('/getAllMembers', getAllMembers);
app.use('/addTask', addTask);
app.use('/getTasks', getTasks);
app.use('/getOneMember', getOneMember);


mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("Connected to DB")
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port: ${process.env.PORT}`)
});



