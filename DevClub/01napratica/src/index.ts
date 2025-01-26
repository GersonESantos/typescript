import express, { Request, Response} from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
interface IProdutos
     {
    id: number;
    nome: string;
    preco: number;
    endereco: {
        rua: string;
        numero: number;
        bairro: string;
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
                bairro: 'Bomfim'
                }
              }
              );
              produtos.push (newProdutos);
              return res.send(produtos);
        });

app.listen(8080, () => 
    {
    console.log('Rodando app listening at http://localhost:8080');
   } );