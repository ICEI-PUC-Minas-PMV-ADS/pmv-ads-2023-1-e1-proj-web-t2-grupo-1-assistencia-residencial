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

## Perfil Editável do Cliente
A tela editável de perfil do cliente permite ao usuário cliente alterar seus dados cadastrais.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/ffee2cc1-74cf-4b1b-b574-549e9a345165">
<p>Figura 22 - Perfil Editável do Cliente</p>

### Requisito Atendido:
RF-02
### Artefatos da Funcionalidade:
profile-edit.html e
profile-edit.js
### Estrutura de Dados:
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/c940dc6a-6e78-42bd-b7ef-ca45d3bd0e0f">

# 8. Plano de Testes de Software
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/a422e79d-5011-4e0f-b5c2-541f79ae92e8">

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/bad4d890-fbd4-4191-9984-3dd3808aa5d4">

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/db731a43-d79a-4f5b-9f84-3e08aba58b67">

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/277c0a6f-bc6f-4241-b0dd-0a87142296b9">

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/1682dadf-575f-4b36-8952-d14e50b0c75d">

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/fddfd90f-83d7-4f6e-b9e3-eb11106802fa">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/443284a7-0406-4a85-94c7-21c50447beb9">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/400db776-d067-4596-8b83-0fc4537c876f">

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/8e3a874b-6f5d-47a1-9624-0d8273de40a2">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/e08c57f2-3b8c-4b52-b1a1-d159c957b438">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/34d9da4b-88f3-4cc6-94a7-e508dd30a86d">

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/ca135da7-de1a-498f-9121-a23bba098918">

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/9d6b0578-3cf5-41cb-8b13-5685b9b851e1">

# 9. Registros de Testes de Software
Os resultados obtidos nos testes de software realizados são descritos abaixo.

## CT-01 - Login na Plataforma
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/d963a2f1-1441-4822-8782-a41a891991dd">
<p>Figura 23- Inserção de credenciais válidas de usuário cliente</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/24f8b555-c2d3-4740-ae4c-766436d5b222">
<p>Figura 24 - Usuário cliente logado com sucesso.</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/88835f9a-448b-4dfb-9239-71181214fc09">
<p>Figura 25 - Inserção de credenciais válidas de usuário prestador</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/0402fa0f-db61-4b68-ba87-a04118b39b43">
<p>Figura 26 - Usuário prestador logado com sucesso.</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/3c6a5dcf-3469-4702-8e48-f2fe8215a8a3">
<p>Figura 27 - Inserção de credenciais inválidas de usuário</p>

## CT-02 - Seletor de profissional

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/14d7a82a-ab54-4eb7-8254-774b71b1c655">
<p>Figura 28 - Seleção da categoria de serviço</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/c92be513-962b-497c-8727-899a726e1af7">
<p>Figura 29 - Listagem de profissionais que atendem na região</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/92b8cd3d-de13-4d83-869a-cad03f2e1621">
<p>Figura 30 - Perfil do profissional selecionado</p>

## CT-03 - Cadastro na Plataforma

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/15dc00d6-8448-422c-bdb8-a325e92b3796">
<p>Figura 31 - Inserção de credenciais válidas para cadastro da cliente</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/4afd439e-c7a3-494b-97bd-031045164881">
<p>Figura 32 - Confirmação do cadastro de cliente.</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/bf88fa8b-074d-453b-8b5a-eb369e5d5bba">
<p>Figura 33 - Inserção de credenciais inválidas de usuário.</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/6b6bf621-935f-45e2-abde-f740f809f296">
<p>Figura 34 - Confirmação do cadastro de prestadores de serviço.</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/97008d91-61fa-442a-9719-656260980e61">
<p>Figura 35 - Em caso de sucesso no cadastro, o usuário é redirecionado para a página de Login.</p>

## CT-04 Profissional Selecionado

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/e539affe-c494-46db-a864-6001afaaed07">
<p>Figura 36 - Acesso ao serviço selecionado com usuário logado.</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/1ca1efba-a362-4c14-b3d6-3a677fd20335">
<p>Figura 37 - Lista de profissionais na categoria selecionada com botão direcionável para acessar o perfil da prestadora.</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/96157bca-688e-4245-ae30-ad8b093276c0">
<p>Figura 38 - Página do perfil do profissional selecionado com informações da prestadora e campo de feedback.</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/ebfb6ecb-0b54-4847-ae3e-f90613c0aa39">
<p>Figura 39 - Novo feedback inserido.</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/a1ebe96b-16b5-4aa1-932f-1ebc86933515">
<p>Figura 40 - Redirecionamento via whatsapp para contato direto com a prestadora de serviços</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/9fa4f310-c0e5-42d6-a9fa-8ab6fc3ceb7c">
<p>Figura 41 - Redirecionamento via instagram para contato direto com a prestadora de serviços</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/0a098f77-80aa-418c-a1ea-06a58eed3a2b">
<p>Figura 42 - Redirecionamento via facebook para contato direto com a prestadora de serviços</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/d98929ec-6963-41e3-ac21-621373b97780">
<p>Figura 43 - Redirecionamento via linkedin para contato direto com a prestadora de serviços</p>

## CT-05 - Inserção de feedbacks 

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/ffef17f0-ba03-4b53-8ce8-98854a928595">
<p>Figura 44 - É exibido a área de texto para deixar feedback.</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/fbbc43f3-4484-4eb8-b0f2-9c6341de9646">
<p>Figura 45 – Após ser enviado o feedback é exibido logo em seguida no perfil da profissional.</p>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/b77d18ba-da10-41c7-a948-9a962ccae4cd">
<p>Figura 46 – Caso a área de texto não contenha nenhum caractere não é possível enviar o feedback.</p>

## CT-06 - Visualização de feedbacks 

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/ca12b2ae-3aeb-4258-b6ff-41b17a5c3c8b">
<p>Figura 47 – É exibido a nota e do feedback mais recente.</p>
























































   


