import express, { Request, Response } from 'express';

const app = express();
app.get('/', (req: Request, res: Response) => {
    res.send('CURSO DE TYPESCRIPT NA PRÁTICA');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});