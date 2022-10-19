const db = require('./db.js');
const helper = require('../helper.js');

async function getAllTasks() {
    const rows = await db.query('select * from task');
    return helper.emptyOrNot(rows);
}

async function addTask(task) {
    const result = await db.query(`insert into task (description) values ('${task.description}')`);
    task.id = result.insertId;
    return task;
}

