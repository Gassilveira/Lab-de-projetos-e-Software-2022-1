# Lab-de-projetos-e-Software-2022-1

Link drive: https://docs.google.com/document/d/1yMDMYWEmUKIkpmWvLS5pwebQfWEgEBnm/edit?usp=sharing&ouid=107802155896415085125&rtpof=true&sd=true


Requisitos

1 - Clínica

a - Acesso a uma API para envio dos exames, está que salvará os exames para acesso futuro

b - Caso seja um novo paciente a clínica deverá receber como retorno também uma senha para acesso

c - Possibilidade de a clínica se cadastrar e gerar uma chave de api para o envio dos exames

2 - Usuário final

a - Possibilidade de acessas o sistema e verificar os exames

b - Possibilidade de compartilhar os exames via um QR Code

c - Este QR code deverá apontar para uma página de acesso livre na web disponível por um tempo determinado para que a pessoa com quem o exame está sendo compartilhado possa visualizalo


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
