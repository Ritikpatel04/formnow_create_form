const firebase= require('./firebase/serviceAccountkey.json');
const express = require('express');
const bodyParser= require('body-parser');
const createForm = require('./src/data/createForm');
const authMiddleware = require('./src/auth/authMiddleware');
const app = express();
app.use(bodyParser.json());
app.use('*',authMiddleware);


app.post('/create-form', createForm);

app.listen(process.env.PORT , ()=>{
    console.log('listning at port 3001')
});