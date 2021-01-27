const express = require('express');
const routes = require('./routes/taskRouter');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


// db connection
require('./database/dbConfg');


// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(routes);


app.listen(3000, () => console.log('server running in port 3000'));