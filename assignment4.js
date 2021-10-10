const express = require('express');
const port = 3000;
const app = express();



app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/login.html')
});

app.use(express.urlencoded({ extended: true }));

app.post('/login',(req,res)=>{
    var obj = req.body;

    var str = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');

    console.log(str);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));