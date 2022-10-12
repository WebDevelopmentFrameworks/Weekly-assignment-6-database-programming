const express = require('express');
const cors = require('cors');
const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT);