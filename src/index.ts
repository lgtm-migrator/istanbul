import express, { Application } from 'express';
import api from './routes/api';

const app: Application = express();
const port = 3000;

app.use('/api', api);
app.listen(port, (err) => {
    if (err) return console.error(err);
    return console.log('Working on port', port);
});
