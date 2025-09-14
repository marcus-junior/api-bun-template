# 🚀 GS App - Full Stack TypeScript Application

Um aplicativo full-stack moderno construído com **Elysia.js** no backend e **React + Vite** no frontend, utilizando **TypeScript** e **npm workspaces**.

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Desenvolvimento](#-desenvolvimento)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [API Endpoints](#-api-endpoints)
- [Configurações](#-configurações)

## 🎯 Visão Geral

O GS App é uma aplicação full-stack que demonstra a integração entre:
- **Backend API**: Construído com Elysia.js, oferecendo uma API REST com documentação OpenAPI
- **Frontend UI**: Interface React moderna com Vite e TailwindCSS
- **Monorepo**: Gerenciado com npm workspaces para facilitar o desenvolvimento

## 🛠 Tecnologias

### Backend (API)
- **[Elysia.js](https://elysiajs.com/)** - Framework web ultrarrápido para Bun
- **[@elysiajs/openapi](https://elysiajs.com/plugins/swagger)** - Documentação automática da API
- **[@elysiajs/cors](https://elysiajs.com/plugins/cors)** - Configuração de CORS
- **TypeScript** - Tipagem estática
- **Bun Runtime** - Runtime JavaScript de alta performance

### Frontend (UI)
- **[React](https://react.dev/)** v19.1.1 - Biblioteca para interfaces de usuário
- **[Vite](https://vitejs.dev/)** - Build tool e dev server ultrarrápido
- **[TailwindCSS](https://tailwindcss.com/)** v4.1.13 - Framework CSS utilitário
- **[@elysiajs/eden](https://elysiajs.com/eden/overview)** - Cliente type-safe para API
- **TypeScript** - Tipagem estática

### Ferramentas de Desenvolvimento
- **npm workspaces** - Gerenciamento de monorepo
- **ESLint** - Linting de código
- **TypeScript** - Compilador e verificação de tipos

## 📁 Estrutura do Projeto

```
gs_app_ts/
├── 📦 packages/
│   ├── 🔧 api/                    # Backend API
│   │   ├── src/
│   │   │   └── index.ts          # Entrada principal da API
│   │   ├── package.json          # Dependências da API
│   │   └── tsconfig.json         # Configuração TypeScript da API
│   │
│   └── 🎨 ui/                     # Frontend UI
│       ├── src/
│       │   ├── App1.tsx          # Componente principal
│       │   ├── main.tsx          # Entrada do React
│       │   └── assets/           # Recursos estáticos
│       ├── public/               # Arquivos públicos
│       ├── package.json          # Dependências do UI
│       ├── vite.config.ts        # Configuração do Vite
│       └── tsconfig.json         # Configuração TypeScript do UI
│
├── 📄 package.json               # Configuração do workspace
├── 🔧 bunfig.toml               # Configuração do Bun
└── 📖 README.md                 # Este arquivo
```

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **[Node.js](https://nodejs.org/)** (versão 18 ou superior)
- **[npm](https://www.npmjs.com/)** (vem com Node.js)
- **[Bun](https://bun.sh/)** (para execução da API)

### Instalação do Bun
```bash
# Linux/macOS
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"
```

## 🚀 Instalação

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd gs_app_ts
```

2. **Instale as dependências:**
```bash
npm install
```

## 💻 Desenvolvimento

### Iniciar ambos os serviços (recomendado)
```bash
npm run dev
```
- **API**: http://localhost:3000
- **UI**: http://localhost:5173
- **Documentação da API**: http://localhost:3000/swagger

### Iniciar apenas a API
```bash
npm run dev:api
```
Acesse: http://localhost:3000

### Iniciar apenas o UI
```bash
npm run dev:ui
```
Acesse: http://localhost:5173

## 📜 Scripts Disponíveis

### Scripts do Workspace Raiz
- `npm run dev` - Inicia API e UI simultaneamente
- `npm run dev:api` - Inicia apenas a API
- `npm run dev:ui` - Inicia apenas o UI
- `npm install` - Instala dependências de todos os pacotes

### Scripts da API (`packages/api`)
- `npm run dev` - Inicia a API com hot reload (Bun)

### Scripts do UI (`packages/ui`)
- `npm run dev` - Inicia servidor de desenvolvimento (Vite)
- `npm run build` - Build de produção
- `npm run lint` - Executa ESLint
- `npm run preview` - Preview do build de produção

## 🔌 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Endpoints Disponíveis

#### `POST /api/user`
Cadastra um novo usuário.

**Request Body:**
```json
{
  "name": "string",
  "email": "string", 
  "username": "string",
  "password": "string"
}
```

**Response (200):**
```json
{
  "message": "Usuário cadastrado com sucesso! {...}"
}
```

### 📖 Documentação Interativa
Acesse a documentação completa da API em: **http://localhost:3000/api/openapi**

## ⚙️ Configurações

### CORS
A API está configurada com CORS habilitado para permitir requisições do frontend.

### TypeScript
Ambos os pacotes utilizam TypeScript com configurações otimizadas para:
- **API**: Compatibilidade com Bun e Elysia
- **UI**: Compatibilidade com React e Vite

### Workspaces
O projeto utiliza npm workspaces para:
- Compartilhar dependências entre pacotes
- Permitir referências entre pacotes (`@gs_app/api` ↔ `@gs_app/ui`)
- Facilitar comandos de desenvolvimento

### Integração Type-Safe
O frontend utiliza **Eden** para comunicação type-safe com a API:
```typescript
import { treaty } from '@elysiajs/eden'
import type { App } from '@gs_app/api'

const api = treaty<App>('http://localhost:3000')
```

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ usando Elysia.js + React + TypeScript**