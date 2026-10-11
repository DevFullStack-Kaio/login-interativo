🔐 Login Interativo
Sistema de autenticação desenvolvido com Node.js, Express e MongoDB Atlas.

[GIF de demonstração será adicionado em breve]

📑 Índice
#sobre-o-projeto
#funcionalidades
#tecnologias-utilizadas
#estrutura-do-projeto
[instalação
[Melhorias Futuras](#melhorias-futuras

📸 Demonstração
./frontend/assets/images/login.png

🖼️ Telas
Tela de Login
./frontend/images/login.png

Tela de Cadastro
./frontend/images/cadastro.png

Status
Node.js
MongoDBhttps://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black

📖 Sobre o Projeto
O Login Interativo é uma aplicação web Full Stack desenvolvida para praticar conceitos modernos de autenticação de usuários, integração entre Front-end e Back-end e persistência de dados com MongoDB Atlas.

A aplicação oferece uma interface dinâmica e responsiva, permitindo que usuários realizem cadastro e login de forma simples e intuitiva, com validações e feedback visual em tempo real.

🎯 Objetivos
Desenvolver um sistema de autenticação completo.
Aplicar conceitos de desenvolvimento Full Stack.
Integrar uma aplicação Node.js com MongoDB Atlas.
Implementar boas práticas de organização de código.
Criar uma interface moderna e responsiva.

🚀 Funcionalidades

✅ Cadastro de usuários
✅ Login de usuários
✅ Validação de formulários
✅ Feedback visual de erros e sucessos
✅ Interface Responsiva
✅ Persistência de dados no MongoDB Atlas
✅ Integração Front-end e Back-end
✅ Gerenciamento de variáveis de ambiente

🛠️ Tecnologias Utilizadas
-Front-end
- HTML5
- CSS3
- JavaScript

Back-end
- Node.js
- Express.js

Banco de Dados
- MongoDB Atlas

Ferramentas
- Git
- GitHub
- VS Code

📂 Estrutura do Projeto
```
login-interativo/
│
├── backend/
│   └── server.js
│
├── frontend/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── login_demo.gif
│   │
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

Descrição

Pasta/Arquivo	Função
backend	Servidor Node.js
server.js	Inicialização da API
frontend	Interface da aplicação
assets	Recursos visuais
icons	Ícones utilizados
images	Imagens e GIFs
index.html	Estrutura principal
style.css	Estilos da aplicação
script.js	Lógica do Front-end
.env	Variáveis de ambiente
package.json	Dependências e scripts

⚙️ Instalação
Clone o repositório:

git clone https://github.com/DevFullStack-Kaio/login-interativo.git
Acesse a pasta do projeto:

cd login-interativo
Instale as dependências:

Iniciar Aplicação
npm install

Iniciar o servidor
npm start

🔧 Configuração
Crie um arquivo .env baseado no arquivo .env.example:

cp .env.example .env
Preencha as variáveis com suas credenciais do MongoDB Atlas.

Exemplo:

PORT=3000
MONGODB_URI=sua_string_de_conexao

📸 Preview
preview.png

./frontend/images/preview.png

🔮 Melhorias Futuras
Recuperação de senha
Criptografia com bcrypt
Autenticação JWT
Dashboard do usuário
Dark Mode
Deploy em produção

🏗️ Arquitetura
Frontend (HTML/CSS/JS)
          │
          ▼
Node.js + Express
          │
          ▼
MongoDB Atlas

🔒 Segurança
Uso de variáveis de ambiente (.env)
Separação Front-end e Back-end
Validação dos dados enviados pelo usuário
Comunicação com MongoDB Atlas

👨‍💻 Autor
Vanderlei Silva

📌 Desenvolvedor Full Stack em formação

🌐 Portfólio: https://devfullstack-kaio.github.io/portfolio_atualizado/

🐙 GitHub: https://github.com/DevFullStack-Kaio

📄 Licença
Este projeto está sob a licença MIT.

⭐ Se este projeto ajudou você ou serviu de inspiração, deixe uma estrela no repositório.
