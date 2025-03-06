# Desafio Técnico – Vaga de Estágio

Crie uma página de login utilizando **Next.js** (cliente) e **NestJS** (servidor).  

Este repositório contém duas pastas principais:
- **client**: Aplicação front-end feita com Next.js  
- **server**: Aplicação back-end feita com NestJS  

---

## Requisitos

- [Node.js](https://nodejs.org/) instalado (versão recomendada: 16 ou superior)
- Git instalado para clonar o repositório

---

## Passo a Passo de Instalação

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/Lip3Bazinga/AppLogin.git
   ```

2. **Entrar no diretório do projeto**

   ```bash
   cd AppLogin
   ```

3. **Instalar dependências do front-end (client)**

   ```bash
   cd client
   npm install
   ```
   
   Após concluir a instalação, volte à raiz do projeto:

   ```bash
   cd ..
   ```

4. **Instalar dependências do back-end (server)**

   ```bash
   cd server
   npm install
   ```

---

## Como Executar o Projeto

### 1. Executando a Aplicação Front-end (Next.js)

No terminal, dentro do diretório `client`:

```bash
cd client
npm run dev
```

Isso iniciará o front-end em modo de desenvolvimento (por padrão em [http://localhost:3000](http://localhost:3000)).

### 2. Executando a Aplicação Back-end (NestJS)

Abra um **outro terminal** (ou uma nova aba) e, dentro do diretório `server`:

```bash
cd server
npm run start:dev
```

Isso iniciará o back-end em modo de desenvolvimento (por padrão em [http://localhost:8000](http://localhost:8000)).

---

## Testando o Login

Para acessar a tela de login, abra seu navegador no endereço:  
[http://localhost:3000](http://localhost:3000)

Use os seguintes dados para login de teste:

```
email: teste@teste.com
password: 123456
```

---

## Criando um Novo Usuário

Para criar um novo usuário, é necessário fazer uma requisição `POST` via API. Siga o exemplo abaixo no [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) ou qualquer outra ferramenta de sua preferência:

- **Method**: POST  
- **URL**: `http://localhost:8000/auth/register`
- **Body** (JSON – raw):
  ```json
  {
    "name": "Nome do usuário",
    "email": "Email do usuário",
    "password": "Senha do usuário"
  }
  ```

### Visualizando os Usuários

Para visualizar todos os usuários cadastrados, execute no diretório **server**:

```bash
npx prisma studio
```

O Prisma Studio abrirá no navegador, permitindo que você veja e edite os registros no banco de dados (incluindo os usuários criados).

---



