# Lab-de-projetos-e-Software-2022-1

Link drive: https://docs.google.com/document/d/1yMDMYWEmUKIkpmWvLS5pwebQfWEgEBnm/edit?usp=sharing&ouid=107802155896415085125&rtpof=true&sd=true


Requisitos funcionais
Paciente
- Executar a visualização e exclusão de exames.
- Capacidade de visualizar os exames na web.
- Possibilidade de compartilhar esses exames de forma segura.
- Habilidade de alterar a senha quando necessário.
- Capacidade de fazer e dar manutenção em um cadastro.
Médico/Laboratório
- Capacidade de fazer e dar manutenção em um cadastro.
- Possibilidade de gerar chaves de api.
- Possibilidade de fazer chamadas da api para enviar exames associado ao paciente.
- Possibilidade de cadastrar novos usuários no sistema caso ele não esteja no cadastro.
Sistema
- Exames serão salvos em um ambiente seguro e de fácil acesso ao paciente.
- Controle do envio de exames para que estes sejam feitos apenas por entidades a quem isso compete.
- Armazenamento e possibilidade de o usuário visualizar a entidade que gerou os exames.
- Organização dos exames por ano.

Requisitos não funcionais
- Armazenamento das informações cadastrais em um banco de dados.
- Front end responsivo para fácil visualização tanto em ambientes desktop quanto móbile.
- Implementação do backend em Laravel.


Instruções Projeto (WSL + Docker)... Utilize WSL com ubuntu
- clone
- cp .env.example .env
- cp -R _sail/vendor/ ./
- ./vendor/bin/sail up -d
- http://localhost
