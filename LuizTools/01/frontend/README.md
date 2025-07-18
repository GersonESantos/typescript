# React + TypeScript + Vite - LuizTools 01

Este template fornece uma configuração mínima para executar React com Vite, incluindo HMR e algumas regras do ESLint.

## Estrutura do Projeto

O Vite criou um template básico de React com TypeScript que inclui:

```
LuizTools/01/frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Principais arquivos criados

### 1. **package.json**
- Scripts para desenvolvimento (`dev`), build (`build`), preview (`preview`)
- Dependências do React, TypeScript e Vite
- Dependências de desenvolvimento (ESLint, tipos TypeScript)

### 2. **Configurações TypeScript**
- `tsconfig.json` - Configuração principal do TypeScript
- `tsconfig.app.json` - Configuração específica para a aplicação
- `tsconfig.node.json` - Configuração para ferramentas Node.js

### 3. **Configurações de ferramentas**
- `vite.config.ts` - Configuração do Vite
- `eslint.config.js` - Configuração do ESLint
- `.gitignore` - Arquivos ignorados pelo Git

### 4. **Arquivos fonte**
- `src/main.tsx` - Ponto de entrada da aplicação
- `src/App.tsx` - Componente principal
- `src/vite-env.d.ts` - Tipos específicos do Vite

### 5. **Arquivos públicos**
- `public/vite.svg` - Favicon e assets públicos
- `index.html` - Template HTML principal

## Principais funcionalidades incluídas

- **Hot Module Replacement (HMR)** - Atualização rápida durante desenvolvimento
- **TypeScript** - Tipagem estática para maior segurança
- **ESLint** - Análise de código e padrões
- **Vite** - Build tool rápido e moderno
- **React 18** - Versão mais recente do React

## Como usar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Build para produção
```bash
npm run build
```

### Preview da build
```bash
npm run preview
```

### Lint do código
```bash
npm run lint
```

## Plugins disponíveis

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh

## Observações

O template é bem minimalista e pronto para desenvolvimento, fornecendo uma base sólida para começar um projeto React com TypeScript usando Vite como build tool.

### Vantagens do Vite:
- **Início rápido** - Servidor de desenvolvimento instantâneo
- **Build otimizado** - Usa Rollup para produção
- **HMR eficiente** - Atualização rápida de módulos
- **Suporte nativo ao TypeScript** - Sem configuração