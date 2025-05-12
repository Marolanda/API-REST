# 📱 API de Contatos – Web + Android

Este projeto integra **Node.js**, **MySQL**, um **formulário web** e um **aplicativo Android**. Ele permite cadastrar contatos via frontend e salvar os dados no banco de dados usando uma API REST.

---

## 🚀 Tecnologias utilizadas

### 🔧 Backend – Node.js + MySQL
- API REST com rotas `GET` e `POST` para manipulação de contatos
- Conexão com banco de dados MySQL usando `mysql2`
- Uso de `nodemon` no ambiente de desenvolvimento

### 🌐 Frontend Web – HTML5 + W3.CSS
- Formulário simples para cadastrar contatos
- Envio de dados para a API utilizando `fetch`

### 📱 Frontend Mobile – Android (Java + Volley)
- Tela de registro de contatos no app Android
- Comunicação com a API usando biblioteca `Volley`

---

## 📁 Estrutura do Projeto
api-contatos/
├── index.js # Arquivo principal da API
├── db/ # Configuração da conexão com o banco
├── routes/ # Definição das rotas
├── controllers/ # Lógica das requisições
├── public/ # Formulário HTML + W3.CSS
├── package.json

---

## ⚙️ Como rodar o projeto localmente

### Pré-requisitos

- Node.js instalado
- Banco de dados MySQL ativo
- Android Studio (caso deseje testar o app)

### Passos para iniciar a API

```bash
git clone https://github.com/seu-usuario/api-contatos.git
cd api-contatos
npm install
