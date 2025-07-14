# Projeto Express com TypeScript

Este projeto demonstra como configurar um servidor Express básico usando TypeScript.

## Pré-requisitos

- Node.js instalado
- npm ou yarn

## Configuração do Projeto

### 1. Inicializar o projeto

```bash
cd C:\Repo2024\typescript\DevClub\01\backend
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

app.get('/', function (req, res) {
    res.send('API is running');
});

app.get('/produtos', (req: Request, res: Response) => {
    return res.send('Ja temos: produtos');
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
C:\Repo2024\typescript\DevClub\01\backend\
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
- **Rota produtos**: http://localhost:3000/produtos - Retorna "Ja temos: produtos"

## Rotas disponíveis

- `GET /` - Página inicial da API
- `GET /produtos` - Exibe mensagem sobre produtos

## Comandos úteis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Compila o TypeScript para JavaScript
- `npm start` - Executa a versão compilada
- `npm run clean` - Limpa arquivos compilados (se configurado)