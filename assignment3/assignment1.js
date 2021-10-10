const express = require('express');
const port = 3000;
const app = express();

app.get('/',(req,res)=>{
    var obj = req.query;
    var str = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');

    console.log(str);
});

app.use(express.urlencoded({ extended: true }));

app.post('/',(req,res)=>{
    var obj = req.body;

    var str = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');

    console.log(str);
});

app.put('/',(req,res)=>{
    var obj = req.body;

    var str = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');

    console.log(str);
});

app.delete('/',(req,res)=>{
    var obj = req.body;

    var str = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');

    console.log(str);
})

app.listen(port, () => console.log(`Server listening on port ${port}!`));