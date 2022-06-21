## Lab-de-projetos-e-Software-2022-1
#Requisitos funcionais
#Paciente
- Executar a visualização e exclusão de exames.
- Capacidade de visualizar os exames na web.
- Possibilidade de compartilhar esses exames de forma segura.
- Habilidade de alterar a senha quando necessário.
- Capacidade de fazer e dar manutenção em um cadastro.
# Médico/Laboratório
- Capacidade de fazer e dar manutenção em um cadastro.
- Possibilidade de gerar chaves de api.
- Possibilidade de fazer chamadas da api para enviar exames associado ao paciente.
- Possibilidade de cadastrar novos usuários no sistema caso ele não esteja no cadastro.
# Sistema
- Exames serão salvos em um ambiente seguro e de fácil acesso ao paciente.
- Controle do envio de exames para que estes sejam feitos apenas por entidades a quem isso compete.
- Armazenamento e possibilidade de o usuário visualizar a entidade que gerou os exames.
- Organização dos exames por ano.

# Requisitos não funcionais
- Armazenamento das informações cadastrais em um banco de dados.
- Front end responsivo para fácil visualização tanto em ambientes desktop quanto móbile.
- Implementação do backend em Laravel.


## Instruções Projeto (WSL + Docker)... Utilize WSL com ubuntu
- clone
- cd {{FolderName}}
- cp .env.example .env
- cp -R _sail/vendor/ ./
- ./vendor/bin/sail up -d
- http://laravel.test

- Para conectar ao container 
- docker ps -a para listar container 
- docker exec -it {{nome do container ou id}} /bin/bash


## Docker incompleto ( Nâo funciona 100%)

## Video apresentação 1: 
https://youtu.be/cp1HtYDx2rY


## Front em interface/e-xames-ts/

## Relatório:
https://docs.google.com/document/d/1yMDMYWEmUKIkpmWvLS5pwebQfWEgEBnm/edit

## Vídeo apresentação 2: 
https://youtu.be/5qDtKp5lj8I

## Zip laragon:
https://drive.google.com/file/d/1KcukoDa10HRNZyOkbTOKt5jhdm2LdQAW/view?usp=sharing
No larago abrir terminal na pasta do front (interface/e-xames-ts/) executar npm run dev

## Drive projeto:
https://drive.google.com/drive/folders/1PDcKq5aydNOmz9oz9q6tF7PyjFB4PT8w
