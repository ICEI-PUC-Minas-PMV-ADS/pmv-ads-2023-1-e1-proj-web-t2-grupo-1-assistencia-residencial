# Alteração de escopo
Durante o desenvolvimento do projeto, houve algumas alterações no escopo inicial. A seguir, as modificações feitas nos requisitos funcionais iniciais são detalhadas.
## RF-01 (Alteração):
Requisito inicial: O site deve permitir o cadastro e manutenção de dados de prestador (nome, e-mail, senha, região que atende, certificações, adicionar fotos).
Alteração realizada: "O site deve permitir o cadastro e manutenção de dados de prestador (nome, e-mail, senha, localização, adicionar fotos)." Nesta alteração, a informação sobre a região que o prestador atende foi removida, restringindo-se apenas à localização onde o prestador reside.
## RF-04 (Alteração):
Requisito inicial: O site deve realizar o acesso das prestadoras de serviço aos seus feedbacks.
Alteração realizada: "O site deve realizar o acesso das prestadoras de serviço ao seu feedback recente." Essa modificação limita o acesso ao feedback mais recente dos prestadores de serviço.
## RF-05 (Alteração):
Requisito inicial: O site deve permitir pesquisas utilizando filtro para encontrar prestadores de serviço específicos.
Alteração realizada: "O site deve permitir navegação pela barra de serviços para encontrar um profissional na categoria selecionada." Nesta alteração, o filtro utilizado para pesquisar prestadores de serviço específicos foi removido, sendo substituído pela funcionalidade de navegação por meio da barra de serviços.
## RF-07 (Inserção):
O cliente deve ser capaz de acessar o perfil da prestadora de serviços e visualizar sua nota, feedback mais recente, nome, localização e fotos.
## RF-08 (Inserção):
O cliente deve ser capaz de entrar em contato com a prestadora de serviços na página do profissional.
## RF-09 (Inserção):
O site deve permitir que o cliente acesse uma lista de profissionais no serviço selecionado
É importante documentar essas alterações no escopo do projeto para manter todos os envolvidos cientes das mudanças realizadas nos requisitos funcionais. Isso ajuda a garantir transparência e clareza sobre as funcionalidades atualizadas do sistema. As modificações nas telas serão detalhadas na seção de Funcionalidades do Sistema.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/b4258731-9a63-4138-9398-9267a032021c)

#  7. Funcionalidades do Sistema (Telas)
Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL), requisitos atendidos, artefatos da funcionalidade, estrutura de dados e outras orientações de acesso são descritas na sequência. 

##  Cadastro de Prestador de Serviço
Essa tela permite o cadastro de prestadoras de serviços. Os dados são armazenados no LocalStorage com estrutura de dados baseada em JSON. Um exemplo da tela é apresentado na Figura 15.

 <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/cadff88f-92b9-44b0-b9fb-b7db479caf19">
<p>Figura 15 - Tela de Cadastro da Profissional</p> 

### Requisito Atendido:
RF-01
### Artefatos da Funcionalidade:
signin.html,
signin.js e 
signin.css
### Estrutura de Dados:
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/6f4224a1-6233-4f98-9c85-217d6b1b27ce">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/001d3c38-e4b2-44fa-9bd5-29a67cb48332)">

## Cadastro de Cliente
Essa tela permite o cadastro de clientes. Os dados são armazenados no LocalStorage com estrutura de dados baseada em JSON. Um exemplo da tela é apresentado na Figura 16.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/6e3b7c7e-9b44-4149-9574-c1836de2bcf1">
<p>Figura 16 - Tela de Cadastro da Cliente</p>

### Requisito Atendido:
RF-02
### Artefatos da Funcionalidade:
signin.html,
signin.js e 
signin.css
### Estrutura de Dados:
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/0b5132e9-3ea7-4d5d-8cf0-25dfb3968415">

## Perfil do Profissional
Essa tela permite ao usuário acessar os dados da profissional de um serviço específico. As informações são carregadas de uma espécie de banco de dados criado em um arquivo JSON.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/9a8c9e7b-56cd-4963-b512-459721d08ad5">
<p>Figura 17 - Tela Seletor de Profissional</p>

### Requisitos Atendidos:
RF-03,
RF-07 e 
RF-08
### Artefatos da Funcionalidade:
professional-profile.html,
professional-profile.js,
professional-profile.css e
usersDatabase.js
### Estrutura de Dados:
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/a34013b0-d170-4f81-ac4e-04f5cb807bb6">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/c2d50e88-8f01-47cd-b280-6fa7708db7a4">

## Login do Usuário
Essa tela permite ao usuário cliente ou profissional realizar login na plataforma através dos dados previamente cadastrados.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/f21f9448-6d42-4d8e-9320-f7bd4b4dd465">
<p>Figura 18 - Tela de Login</p>

### Requisito Atendido:
RF-06
### Artefatos da Funcionalidade:
login.html,
login.js e
login.css
### Estrutura de Dados:
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/812091b1-22cc-4061-a8a2-6b519f225cc1">

## Seletor de Profissional
Ao acessar um serviço na barra de seleção, o site lista profissionais cadastrados com botão direcionável para o perfil da prestadora.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/84b41257-8a73-4971-adb7-58c892de1206">
<p>Figura 19 - Tela Seletor de Profissional</p>

### Requisito Atendido:
RF-09
### Artefatos da Funcionalidade:
select-professional.html,
select-professional.js e
select-professional.css
### Estrutura de Dados:
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/04e48faf-8b92-4b0b-8066-631f8dbc060f">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/0c403e1c-ed49-4a12-b547-bbe2ed98c042">

## Home Page
A tela inicial permite navegação pelos serviços encontrados na plataforma, além de direcionamento para a tela de cadastro, tela de login e mais informações sobre a empresa fictícia.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/1a773551-281f-47a5-a3a8-0cc4acd0adaf">
<p>Figura 20 - Home Page</p>

### Requisito Atendido:
RF-05
### Artefatos da Funcionalidade:
index.html,
index.js,
constant.js,
home.js e 
home.css

## Perfil Editável do Profissional
A tela do profissional editável permite ao usuário prestador de serviço alterar seus dados cadastrais e acessar o último feedback recebido

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/b38cd431-3d3c-4b24-99a3-37e5c33ccacc">
<p>Figura 21 - Perfil Editável do Profissional</p>

### Requisitos Atendidos:
RF-01 e
RF-04
### Artefatos da Funcionalidade:
profile-edit.html e
profile-edit.js
### Estrutura de Dados:
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/ad52c838-3ec1-4a78-bb3f-213f775ea34a">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/ed5a4c9f-9769-486a-bbf3-8a436e405441">




























   


