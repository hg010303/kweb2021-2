const express = require('express');
const port = 3000;
const app = express();

function factorial(num){
    if(num==1) return 1;
    else return num*factorial(num-1);
}

app.get('/factorial',(req,res)=>{
    const {number} = req.query;
    console.log(`${number}!=`+factorial(number));
});

app.get('/factorial/:number',(req,res)=>{
    const {number}=req.params;
    console.log(`${number}!=`+factorial(number));
})


app.listen(port, () => console.log(`Server listening on port ${port}!`));