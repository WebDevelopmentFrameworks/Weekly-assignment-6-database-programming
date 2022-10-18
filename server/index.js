const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const config = require('./config');
const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', async function (req, res) {
    try {
        const connection = await mysql.createConnection(config.db);
        const [result] = await connection.execute('select * from task');

        if (!result) result=[];
        res.status(200).json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

app.post('/new', async function (req,res) {
    try {
        const connection = await mysql.createConnection(config.db);
        const [result] = await connection.execute('insert into task (description) values (?)', [req.body.description]);

        res.status(200).json({id:result.insertId})
    } catch (err) {
        res.status(500).send(err.message);
    }
})

app.listen(PORT);