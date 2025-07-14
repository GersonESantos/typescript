import express, { Request, Response } from 'express';

const app = express();
interface IProducts {
    id: number;
    name: string;
    price: number;
    quantity: number;
    address: {
        street: string;
        number: number;
        city: string;
        state: string;
    }
}
let produts: IProducts[] = [];


app.get('/', function (req, res) {
    res.send('API is running');
});

app.get('/produtos', (req: Request, res: Response) => {
    const newProduct: IProducts = {
        id: Math.random(),
        name: 'Produto ',
        price: 100,
        quantity: 10,
        address:{
            street: 'Rua A',
            number: 123,
            city: 'Cidade B',
            state: 'Estado C' 
        }
    }

    produts.push(newProduct);
    return res.json(produts);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});