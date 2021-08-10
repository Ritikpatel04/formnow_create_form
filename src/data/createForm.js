  const { read } = require('fs');
const firebase= require('../../firebase/firebase')

async function createForm(req,res,next){
    try{
        const result = await firebase.firestore().collection('forms').add(req.body);
        res.send(result).status(200);
    }
    catch(err){
        res.send({message: "couldn't add data "}).status(500);
    }

    console.log("create form  process done sucessfully ...");
    
    }

module.exports = createForm;