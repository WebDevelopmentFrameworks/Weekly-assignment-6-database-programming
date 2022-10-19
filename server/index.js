const express = require('express');
const cors = require('cors');
const router = require('./routes/router.js');
const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', router);

// Middleware for centralized error handling
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({error: err.message});
    return;
})

app.listen(PORT);


/*
// Old code, all server functionality was inside single index.js. -> now it's split up + structured

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

app.delete('/delete/:id', async function (req,res) {
    try {
        const connection = await mysql.createConnection(config.db);
        await connection.execute('delete from task where id = ?', [req.params.id]);

        res.status(200).json({id:req.params.id})
    } catch (err) {
        res.status(500).send(err.message);
    }
})
*/