import express, { Request, Response} from 'express';
import cors from 'cors';

const app = express();
//app.use(express.json());
app.use(cors());
enum Estados {
    MG = 'Minas Gerais',
    SP = 'São Paulo',
    RJ = 'Rio de Janeiro',
    ES = 'Espírito Santo',
    PR = 'Paraná',
    SC = 'Santa Catarina',
    RS = 'Rio Grande do Sul',
    MS = 'Mato Grosso do Sul',
    MT = 'Mato Grosso',
    GO = 'Goiás',
    DF = 'Distrito Federal',
    TO = 'Tocantins',
    PA = 'Pará',
    AP = 'Amapá',
    RO = 'Rondônia',
    AC = 'Acre',
    AM = 'Amazonas',
    RR = 'Roraima',
    CE = 'Ceará',
    RN = 'Rio Grande do Norte',
    PB = 'Paraíba',
    PE = 'Pernambuco',
    AL = 'Alagoas',
    SE = 'Sergipe',
    BA = 'Bahia',
    PI = 'Piauí',
    MA = 'Maranhão'
}
interface IProdutos
     {
    id: number;
    nome: string;
    preco: number;
    endereco: {
        rua: string;
        numero: number;
        bairro: string;
        cidade: string;
        estado?: Estados;
             }
    }
let produtos: IProdutos[] = []

app.get('/produtos', (req: Request, res: Response) => {

  const newProdutos=({
        id: Math.random(),
        nome: 'Batedeira de Bolo walita', 
        preco: 10,
        endereco:
                {
                rua: 'Arceburgo',
                numero: 20,
                bairro: 'Bomfim',
                cidade: 'Belo Horizonte',
                estado: Estados.MG
                }
              }
              );
              produtos.push (newProdutos);
              return res.json(produtos);
        });

app.listen(8080, () => 
    {
    console.log('Rodando app listening at http://localhost:8080');
   } );