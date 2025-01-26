import express, { Request, Response} from 'express';
const app = express();

interface IProdutos {
    nome: string;
    preco: number;
    endereco: {
        rua: string;
        numero: number;
    }
}
let produtos: IProdutos[] = []

app.get('/produtos', (req, res) => {

  produtos.push({
                nome: 'produto1', 
                preco: 10,
                endereco:
                {
                    rua: 'rua1',
                    numero: 1
                }
              }
    //res.send('meus produtos!');
  });

app.listen(8080, () => {
    console.log('Rodando app listening at http://localhost:8080');
  });