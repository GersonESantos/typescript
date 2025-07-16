# Projeto Express com TypeScript + React - DevClub 04

Este projeto demonstra como criar um servidor Express com TypeScript (backend) e um frontend React que consome a API, incluindo interfaces, enums e comunicação entre frontend e backend.

#### CURSO DE TYPESCRIPT NA PRÁTICA [YOUTUBE ](https://www.youtube.com/watch?v=w2BA05gabP0)

#### MEU TYPESCRIPT [Git ](https://github.com/GersonESantos/typescript/tree/main/DevClub/00)


#### typescriptlang.org [Link ](https://www.typescriptlang.org/)

**Repositório**: https://github.com/GersonESantos/typescript/tree/main/DevClub/03


**Repositório**: https://github.com/GersonESantos/typescript/tree/main/DevClub/04

## Estrutura do Projeto

```
C:\Repo2024\typescript\DevClub\04\
├── backend/
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── src/
    │   ├── services/
    │   │   └── api.ts
    │   ├── App.tsx
    │   └── main.tsx
    └── package.json
```

## Configuração do Backend

### 1. Inicializar o projeto backend

```bash
cd C:\Repo2024\typescript\DevClub\04\backend
npm init -y
```

### 2. Instalar dependências do backend

```bash
# Dependências de produção
npm install express cors

# Dependências de desenvolvimento
npm install --save-dev @types/express @types/cors @types/node typescript ts-node
```

### 3. Configurar TypeScript no backend

Crie o arquivo `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 4. Configurar scripts no package.json do backend

```json
{
  "scripts": {
    "dev": "ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

### 5. Criar o arquivo backend/src/index.ts

```typescript
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
    state: string;
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
```

## Configuração do Frontend

### 1. Criar projeto React com TypeScript

```bash
cd C:\Repo2024\typescript\DevClub\04
npm create vite@latest frontend -- --template react-ts
cd frontend
npm install
```

### 2. Instalar Axios para requisições HTTP

```bash
npm install axios
```

### 3. Criar arquivo de serviços da API

Crie o arquivo `src/services/api.ts`:

```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export default api;
```

### 4. Configurar App.tsx

```typescript
import { useEffect, useState } from 'react'
import api from './services/api'
import './App.css'

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

interface IAddress {
  street: string;
  number: number;
  city: string;
  state: string;
}

interface IProducts {
  id: number;
  name: string;
  price: number;
  quantity: number;
  address: IAddress;
}

function App() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get<IProducts[]>('/produtos');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Erro ao carregar produtos. Verifique se o backend está rodando.');
      } finally {
        setLoading(false);
      }
    }
    
    getProducts();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div style={{color: 'red'}}>{error}</div>;
  }

  if (products.length === 0) {
    return <div>Nenhum produto encontrado</div>;
  }

  return (
    <div>
      <h1>Produtos</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Address: {product.address.street}, {product.address.number} - {product.address.city}, {product.address.state}</p>
        </div>
      ))}
    </div>
  )
}

export default App
```

## Como executar

### 1. Executar o Backend

```bash
cd C:\Repo2024\typescript\DevClub\04\backend
npm run dev
```

### 2. Executar o Frontend

```bash
cd C:\Repo2024\typescript\DevClub\04\frontend
npm run dev
```

## Testando a aplicação

1. **Backend**: http://localhost:3000/produtos - Retorna JSON com produtos
2. **Frontend**: http://localhost:5173 - Interface React consumindo a API

## Funcionalidades

### Backend
- **CORS habilitado**: Permite requisições do frontend
- **Enum States**: Define todos os estados brasileiros
- **Interfaces TypeScript**: Tipagem forte para produtos e endereços
- **API REST**: Endpoint para criação e listagem de produtos

### Frontend
- **React com TypeScript**: Interface tipada
- **Axios**: Cliente HTTP para consumir a API
- **Estados gerenciados**: Loading, error e products
- **Componentização**: Estrutura organizada e reutilizável

## Comandos úteis

### Backend
- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Compila o TypeScript
- `npm start` - Executa a versão compilada

### Frontend
- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview da versão de produção

## Observações

- O backend deve estar rodando antes do frontend
- A rota `/produtos` cria um novo produto a cada requisição (não é REST ideal)
- Para produção, considere usar um banco de dados e autenticação
- O CORS está habilitado para desenvolvimento local