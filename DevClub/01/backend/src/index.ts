import express, { Request, Response } from 'express';

const app = express();


app.get('/', function (req, res) {
    res.send('API is running');
});

app.get('/produtos', (req: Request, res: Response) => {
    return res.send('Ja temos: produtos');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});