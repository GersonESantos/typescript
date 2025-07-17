import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

enum States{
    AC = 'Acre',
    AL = 'Alagoas',
    AP = 'Amapá',
    AM = 'Amazonas',
    BA = 'Bahia',
    CE = 'Ceará',
    DF = 'Distrito Federal',
    ES = 'Espírito Santo',
    GO = 'Goiás',       
    MA = 'Maranhão',
    MT = 'Mato Grosso',
    MS = 'Mato Grosso do Sul',
    MG = 'Minas Gerais',
    PA = 'Pará',
    PB = 'Paraíba',         
    PR = 'Paraná',
    PE = 'Pernambuco',
    PI = 'Piauí',
    RJ = 'Rio de Janeiro',
    RN = 'Rio Grande do Norte',
    RS = 'Rio Grande do Sul',
    RO = 'Rondônia',
    RR = 'Roraima',
    SC = 'Santa Catarina',
    SP = 'São Paulo',
    SE = 'Sergipe',
    TO = 'Tocantins'
    }

interface IProducts {
    id: number;
    name: string;
    price: number;
    quantity: number;
    address: IAddress;

}

interface IAddress {
    street: string;
    number: number;
    city: string;
    state: States;
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
        address: {
            street: 'Rua A',
            number: 123,
            city: 'Cidade B',
            state: States.AC
        }
    }

    produts.push(newProduct);
    return res.json(produts);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});