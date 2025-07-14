# Projeto Express com TypeScript - DevClub 02

Este projeto demonstra como configurar um servidor Express com TypeScript, incluindo interfaces e manipulação de dados.

**Repositório**: https://github.com/GersonESantos/typescript/tree/main/DevClub/02

## Pré-requisitos

- Node.js instalado
- npm ou yarn

## Configuração do Projeto

### 1. Inicializar o projeto

```bash
cd C:\Repo2024\typescript\DevClub\02\backend
npm init -y
```

### 2. Instalar dependências

```bash
# Dependências de produção
npm install express

# Dependências de desenvolvimento
npm install --save-dev @types/express @types/node typescript ts-node
```

### 3. Configurar TypeScript

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

### 4. Configurar scripts no package.json

Adicione os scripts no `package.json`:

```json
{
  "scripts": {
    "dev": "ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

### 5. Criar estrutura de pastas

```bash
mkdir src
```

### 6. Criar o arquivo principal

Crie o arquivo `src/index.ts` com o seguinte conteúdo:

```typescript
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
```

## Como executar

### Modo desenvolvimento (com hot reload)
```bash
npm run dev
```

### Build para produção
```bash
npm run build
npm start
```

## Estrutura do projeto

```
C:\Repo2024\typescript\DevClub\02\backend\
├── src/
│   └── index.ts
├── dist/ (gerado após build)
├── package.json
├── tsconfig.json
└── README.md
```

## Testando a aplicação

Após executar `npm run dev`, acesse:
- **Rota principal**: http://localhost:3000 - Retorna "API is running"
- **Rota produtos**: http://localhost:3000/produtos - Cria e retorna produtos

## Rotas disponíveis

- `GET /` - Página inicial da API
- `GET /produtos` - Cria um novo produto e retorna a lista completa

## Funcionalidades

- **Interface TypeScript**: Define a estrutura dos produtos com tipagem forte
- **Gerenciamento de Estado**: Mantém uma lista de produtos em memória
- **Criação de Produtos**: Cada chamada para `/produtos` cria um novo produto
- **Resposta JSON**: Retorna dados estruturados em formato JSON

## Comandos úteis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Compila o TypeScript para JavaScript
- `npm start` - Executa a versão compilada
- `npm run clean` - Limpa arquivos compilados (se configurado)

## Observações

- A rota `/produtos` está usando GET para criar produtos (não é uma prática REST ideal)
- Os dados são armazenados em memória e serão perdidos quando o servidor for reiniciado
- Para produção, considere usar um banco de dados e seguir padrões REST