# 💡 Login Lamp — Login Interativo

Aplicação web Full Stack com uma interface de login interativa inspirada em um abajur. Ao acionar a cordinha, a lâmpada muda de estado e o formulário de login é revelado.

O projeto foi desenvolvido para praticar HTML, CSS, JavaScript, Node.js, Express e integração com MongoDB Atlas.

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Demonstração](#-demonstração)
- [Objetivos](#-objetivos)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Arquitetura](#-arquitetura)
- [Segurança](#-segurança)
- [Melhorias Futuras](#-melhorias-futuras)
- [Autor](#-autor)
- [Licença](#-licença)

## 📖 Sobre o Projeto

O Login Lamp é uma aplicação web criada para explorar a interação entre elementos visuais e formulários de autenticação.

A interface utiliza uma lâmpada como elemento central. Ao clicar na cordinha, a iluminação do ambiente muda e o formulário de login torna-se visível.

O projeto também contém um backend desenvolvido com Node.js e Express, com rotas de cadastro e login e integração com MongoDB por meio do Mongoose.

## 📸 Demonstração

### 🌑 Lâmpada apagada

![Login Lamp com a lâmpada apagada](frontend/assets/images/apagada.png)

### 💡 Lâmpada acesa

![Login Lamp com a lâmpada acesa](frontend/assets/images/acessa.png)

### 🎬 Demonstração animada

![GIF de demonstração do Login Lamp](frontend/assets/images/login-demo.gif)

## 🎯 Objetivos

- Praticar desenvolvimento Full Stack.
- Criar uma interface interativa com HTML, CSS e JavaScript.
- Desenvolver rotas utilizando Node.js e Express.
- Aprender a integrar aplicações com MongoDB Atlas.
- Utilizar variáveis de ambiente para configurações sensíveis.
- Aplicar boas práticas de organização e documentação de código.

## 🚀 Funcionalidades

- Interface interativa com lâmpada animada.
- Efeito de iluminação ao acionar a cordinha.
- Exibição e ocultação visual do formulário.
- Formulário de login com campos de e-mail e senha.
- Rota de cadastro de usuários no backend.
- Hash de senhas utilizando bcrypt no cadastro.
- Verificação de senha com bcrypt na rota de login.
- Integração planejada entre frontend, backend e banco de dados.

**Observação:** a integração do formulário do frontend com as rotas do backend e a conexão com o MongoDB devem ser testadas antes de considerar o fluxo completo de autenticação concluído.

## 🛠️ Tecnologias Utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- Mongoose
- bcrypt

### Banco de dados
- MongoDB Atlas

### Ferramentas
- Visual Studio Code
- Git
- GitHub

## 📂 Estrutura do Projeto

```text
login-interativo/
├── backend/
│   └── server.js
├── frontend/
│   ├── assets/
│   │   └── images/
│   │       ├── acessa.png
│   │       ├── apagada.png
│   │       └── login-demo.gif
│   ├── index.html
│   ├── script.js
│   └── style.css
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

> O arquivo `.env` é utilizado localmente e não deve ser enviado ao repositório público. O `.gitignore` deve impedir seu versionamento.

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/DevFullStack-Kaio/login-interativo.git
```

Acesse a pasta:

```bash
cd login-interativo
```

Instale as dependências:

```bash
npm install
```

## 🔧 Configuração

Crie um arquivo `.env` com base no `.env.example`.

No Windows PowerShell, você pode copiar o arquivo de exemplo com:

```powershell
Copy-Item .env.example .env
```

Configure as variáveis de ambiente de acordo com seu ambiente:

```env
PORT=3000
MONGODB_URI=sua_string_de_conexao
```

Substitua `sua_string_de_conexao` pela URI válida do MongoDB Atlas. Nunca publique senhas ou credenciais reais.

## ▶️ Executando a aplicação

Se o `package.json` possuir o script `start`, execute:

```bash
npm start
```

Caso não possua, inicie o servidor diretamente:

```bash
node backend/server.js
```

Acesse no navegador:

```text
http://localhost:3000
```

O funcionamento do backend depende da configuração correta do MongoDB Atlas e das variáveis de ambiente.

## 🏗️ Arquitetura

```text
Frontend
HTML + CSS + JavaScript
          |
          v
Backend
Node.js + Express
          |
          v
Mongoose
          |
          v
MongoDB Atlas
```

## 🔒 Segurança

- Utilização de variáveis de ambiente.
- Senhas cadastradas armazenadas com hash via bcrypt.
- Verificação de senhas por comparação com o hash armazenado.
- Separação entre frontend e backend.

O projeto é educacional e precisa de validações adicionais, tratamento de erros, proteção contra tentativas repetidas e uma estratégia de sessão ou token antes de ser utilizado em produção.

## 🔮 Melhorias Futuras

- Concluir e testar a integração entre frontend e backend.
- Implementar autenticação persistente com sessões ou JWT.
- Adicionar recuperação de senha.
- Criar uma área autenticada para usuários.
- Melhorar as validações e o tratamento de erros.
- Publicar o frontend e o backend em serviços de hospedagem apropriados.
- Aprimorar a acessibilidade e a responsividade.

## 👨‍💻 Autor

**Vanderlei Silva**

Desenvolvedor Full Stack em formação.

- 🌐 [Portfólio](https://devfullstack-kaio.github.io/portfolio_atualizado/)
- 🐙 [GitHub](https://github.com/DevFullStack-Kaio)

## 📄 Licença

Este projeto está disponibilizado sob a licença MIT, conforme o arquivo de licença do repositório.

⭐ Se este projeto despertou seu interesse, considere deixar uma estrela no repositório.
