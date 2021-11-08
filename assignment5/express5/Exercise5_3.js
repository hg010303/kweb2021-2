const express = require('express');
const {runQuery} = require('./database');

const app = express();
const port = 3000;

app.get('/fare',async(req,res,net)=>{
    try{
        const {uid} = req.query;
        const sql = 'select users.name, Sum(Round(types.fare_rate * trains.distance / 1000)) as total ' +
        'from tickets, users, trains, types ' +
        'where tickets.user = users.id AND users.id = ? and tickets.train = trains.id and trains.type = types.id'
        const {name, total} = (await runQuery(sql,[parseInt(uid,10)]))[0];
        return res.send(`Total fare of ${name} is ${total} KRW.`);
    } catch(err){
        console.error(err);
        return res.sendStatus(500);
    }

});

app.get('/train/status',async(req,res,net)=>{
    try{
        const {tid} = req.query;
        const sql='select Count(tickets.id) as occupied, types.max_seats as maxi '+
        'from tickets, trains,types '+
        'where trains.id = tickets.train and tickets.train=? and trains.type = types.id'
        const {occupied, maxi} = (await runQuery(sql,[parseInt(tid,10)]))[0];
        if(occupied<maxi) return res.send(`Train ${tid} is not sold out`);
        else return res.send(`Train ${tid} is sold out`);
    } catch(err){
        console.error(err);
        return res.sendStatus(500);
    }
})

app.listen(port, () => console.log(`Server listening on port ${port}!`));
