const express = require('express');
const port = 3000;
const app = express();

app.get('/board/page/:page',(req,res)=>{
    console.log(`This is page #${req.params.page}`);
});


app.listen(port, () => console.log(`Server listening on port ${port}!`));