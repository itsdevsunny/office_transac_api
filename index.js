const express = require('express');
const app = express();
const port = 3002;

const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./models');

app.use(cors());

app.use(bodyParser.json());

app.use('/api/v1', require('./controller'));

app.listen(port, () => {
  console.log(`Assignment app listening at http://localhost:${port}`);
});