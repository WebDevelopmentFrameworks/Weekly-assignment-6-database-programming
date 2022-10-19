const express = require('express');
const router = express.Router();
const dbFunctions = require('../services/functions');

router.get('/', async function (req, res, next) {
    try {
        res.status(200).json(await dbFunctions.getAllTasks());
    } catch (error) {
        next(error);
    }
})

router.post('/new', async function (req, res, next) {
    try {
        res.status(200).json(await dbFunctions.addTask(req.body));
    } catch (error) {
        next(error);
    }
})

router.delete('/delete/:id', async function (req, res, next) {
    try {
        res.status(200).json(await dbFunctions.removeTask(req.params.id));
    } catch (error) {
        next(error);
    }
})

router.put('/edit', async function (req, res, next) {
    try {
        res.status(200).json(await dbFunctions.updateTask(req.body));
    } catch (error) {
        next(error);
    }
})

module.exports = router;