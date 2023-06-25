# 8. Plano de Testes de Software

| Caso de Teste        | CT-01 Login de usuário cliente |
|:---:|:---|
| Requisitos Associados| RF06 O site deve permitir login de usuários (cliente, prestador) cadastrados no sistema |
| Objetivo do Teste    | Verificar se o site permite o login de usuários cadastrados no sistema. |
| Passos               | 1. Teste de login de usuário cliente:<br> <ul><li>Insira as credenciais válidas de um usuário cadastrado.</li><li>Clique no botão de login.</li><li>Verifique se o sistema aceita as credenciais corretas e autentica o usuário com sucesso.</li><li>Verifique se o usuário é redirecionado para a página correta após o login.</li></ul> |
| Critérios de Êxito | O sistema deve permitir o login bem-sucedido de usuários cadastrados. |

<br>

| Caso de Teste        | CT-02 Login de usuário profissional |
|:---:|:---|
| Requisitos Associados| RF06 O site deve permitir login de usuários (cliente, prestador) cadastrados no sistema |
| Objetivo do Teste    | Verificar se o site permite o login de usuários profissionais cadastrados no sistema.  |
| Passos               | 1. Teste de login de usuário prestador de serviços:<br> <ul><li>Insira as credenciais válidas de um usuário prestador de serviços cadastrado.</li><li>Clique no botão de login.</li><li>Verifique se o sistema aceita as credenciais corretas e autentica o usuário com sucesso.</li><li>Verifique se o usuário é redirecionado para a página correta após o login.</li></ul> |
| Critérios de Êxito | O sistema deve permitir o login bem-sucedido de usuários profissionais cadastrados. |

<br>

| Caso de Teste        | CT-03 Credenciais inválidas no Login |
|:---:|:---|
| Requisitos Associados| RF06 O site deve permitir login de usuários (cliente, prestador) cadastrados no sistema |
| Objetivo do Teste    | Verificar se o site não permite o login com credenciais inválidas.  |
| Passos               | 1. Teste de credenciais inválidas:<br> <ul><li>Insira credenciais inválidas, como um nome de usuário ou senha incorretos.</li><li>Clique no botão de login.</li><li>Verifique se o sistema exibe uma mensagem de erro apropriada indicando que as credenciais são inválidas.</li><li>Verifique se o sistema não permite o acesso à plataforma com credenciais inválidas.</li></ul> |
| Critérios de Êxito | O sistema não deve permitir o login bem-sucedido de usuários com credenciais inválidas. |

<br>

| Caso de Teste        | CT-04 - Seletor de profissional  |
|:---:|:---|
| Requisitos Associados| RF09 O site deve permitir que o cliente acesse uma lista de profissionais no serviço selecionado <br> RF05 O site deve permitir navegação pela barra de serviços para encontrar um profissional na categoria selecionada |
| Objetivo do Teste    | Verificar se ao selecionar uma categoria de serviço na página inicial, é listado os profissionais que atendem na região. |
| Passos               | 1.  Acesso à página de login:<br> <ul><li>Abra o navegador da web e digite o URL da plataforma.</li><li>Verifique se a página de login está carregada corretamente.</li><li>Verifique se os campos de entrada de dados, como nome de usuário e senha, estão visíveis.</ul></li>2.  Selecionar alguma categoria de serviço na página inicial. <br> 3.  Verificar se abriu uma lista de profissionais <br> 4.  Selecionar a profissional de sua preferência. <br> 5.  Clicar no botão ‘’entrar em contato’’. <br> 6.  Abrir o perfil da profissional selecionada onde há informações de contato. |
| Critérios de Êxito | <ul><li>O sistema deve listar lista de profissionais na categoria selecionada de acordo com a região/endereço da cliente.</li><li>Ao selecionar a profissional, deve abrir a página de perfil com informações de contato. |

<br>

| Caso de Teste        | CT-05 - Cadastro de usuário prestador de serviço na plataforma  |
|:---:|:---|
| Requisitos Associados| RF01  O site deve permitir o cadastro e manutenção de dados de prestador (nome, e-mail, senha, localização, adicionar fotos). |
| Objetivo do Teste    | Verificar se o site permite o cadastro de novos usuários prestadores de serviço no sistema. |
| Passos               | 1.  Acesso à página de cadastro:<br> <ul><li>Ao entrar no site, o usuário pode ser direcionado a página de cadastro através do botão “Cadastre-se” no header ou pelo banner com o botão “Junte-se a nós” ao fim da página inicial.</li><li>Verifique se a página está carregada corretamente.</ul></li>2.  Teste de cadastro de usuário prestador de serviço:<ul><li>Na página de cadastro, você encontrará os campos para preencher os dados pessoais.</li><li>Insira seu nome completo no campo designado</li><li>Forneça seu número de celular no formato correto.</li><li>Digite seu endereço de e-mail válido.</li><li>Crie uma senha para acessar sua conta e confirme-a digitando-a novamente em um campo separado.</li><li>Role a página para baixo e você encontrará a seção para preencher os dados profissionais.</li><li>Selecione a categoria relevante para os serviços que você oferece, marcando a caixa de seleção apropriada.</li><li>Utilize um espaço fornecido para contar um pouco sobre você e seus serviços, deixando uma breve descrição.</li><li>Verifique se todos os campos foram preenchidos e clique no botão ”Cadastrar”.</ul></li>3.  Teste de credenciais inválidas:<ul><li>Insira credenciais inválidas, como um nome de usuário ou senha incorretos ou deixe de preencher um campo.</li><li>Clique no botão “Cadastrar”.</li><li>Verifique se o sistema exibe uma mensagem de erro apropriada indicando que as credenciais são inválidas ou sinalizando qual campo deixou de preencher.</li><li>Verifique se o sistema não permite o cadastro à plataforma com credenciais inválidas.</ul></li>4.  Teste de credenciais válidas:<ul><li>O sistema deve permitir o cadastro bem-sucedido de usuários clientes ou prestadores de serviço e o mesmo deve redirecionar o usuário para a página de login ao finalizar o processo.|
| Critérios de Êxito | <ul><li>O sistema deve permitir o cadastro bem-sucedido de usuários prestadores de serviço que preencham corretamente os campos.</li><li>O sistema deve rejeitar credenciais inválidas e exibir uma mensagem de erro apropriada. |

<br>

| Caso de Teste        | CT-06 - Cadastro de usuário cliente  |
|:---:|:---|
| Requisitos Associados| RF02 O site deve permitir o cadastro e manutenção de dados do cliente (nome, senha, e-mail). |
| Objetivo do Teste    | Verificar se o site permite o cadastro de novos usuários clientes no sistema. |
| Passos               | 1.  Acesso à página de cadastro:<br> <ul><li>Ao entrar no site, o usuário pode ser direcionado a página de cadastro através do botão “Cadastre-se” no header ou pelo banner com o botão “Junte-se a nós” ao fim da página inicial.</li><li>Verifique se a página está carregada corretamente.</ul></li>2.  Teste de cadastro de usuário cliente:<ul><li>Na página de cadastro, você encontrará os campos para preencher os dados pessoais.</li><li>Insira seu nome completo no campo designado.</li><li>Forneça seu número de celular no formato correto.</li><li>Digite seu endereço de e-mail válido.</li><li>Crie uma senha para acessar sua conta e confirme-a digitando-a novamente em um campo separado.</li><li>Verifique se todos os campos foram preenchidos e clique no botão ”Cadastrar”.</ul></li>3.  Teste de credenciais inválidas:<ul><li>Insira credenciais inválidas, como um nome de usuário ou senha incorretos ou deixe de preencher um campo.</li><li>Clique no botão “Cadastrar”.</li><li>Verifique se o sistema exibe uma mensagem de erro apropriada indicando que as credenciais são inválidas ou sinalizando qual campo deixou de preencher.</li><li>Verifique se o sistema não permite o cadastro à plataforma com credenciais inválidas.</ul></li>4.  Teste de credenciais válidas:<ul><li>O sistema deve permitir o cadastro bem-sucedido de usuários clientes ou prestadores de serviço e o mesmo deve redirecionar o usuário para a página de login ao finalizar o processo.|
| Critérios de Êxito | <ul><li>O sistema deve permitir o cadastro bem-sucedido de usuários clientes que preencham corretamente os campos.</li><li>O sistema deve rejeitar credenciais inválidas e exibir uma mensagem de erro apropriada. |

<br>

| Caso de Teste        | CT-07 - Profissional Selecionado |
|:---:|:---|
| Requisitos Associados| <ul><li>RF07 O cliente deve ser capaz de acessar o perfil da prestadora de serviços e visualizar sua nota, feedback mais recente, nome, localização e fotos</li><li>RF08 O cliente deve ser capaz de entrar em contato com a prestadora de serviços na página do profissional</ul></li> |
| Objetivo do Teste    | Verificar se a tela de profissional selecionado permite ao cliente visualizar informações relevantes, como nota, feedback mais recente, nome, localização e fotos da prestadora de serviços, além de permitir a inserção de feedbacks e entrar em contato com a prestadora de serviços. |
| Passos               | 1.  Acesso à tela de profissional selecionado:<br> <ul><li>Com o usuário logado, acesse um serviço na home page.</li><li>Escolha um profissional da lista.</li><li>Clique no perfil da prestadora de serviços para acessar a tela de profissional selecionado.</li><li>Verifique se a tela está carregada corretamente e exibe as informações relevantes.</ul></li>2.  Visualização das informações:<ul><li>Verifique se o nome da prestadora de serviços é exibido corretamente na tela.</li><li>Verifique se a localização da prestadora de serviços é exibida corretamente na tela.</li><li>Verifique se a nota da prestadora de serviços é exibida corretamente na tela.</li><li>Verifique se o feedback mais recente recebido pela prestadora de serviços é exibido corretamente na tela.</li><li>Verifique se as fotos da prestadora de serviços são exibidas corretamente na tela.</ul></li>3.  Entrar em contato com a prestadora de serviços:<ul><li>Verifique se há um botão ou link disponível para entrar em contato com a prestadora de serviços na tela.</li><li>Clique no botão ou link para entrar em contato com a prestadora de serviços.</li><li>Verifique se o sistema abre um meio de comunicação adequado, como um formulário de contato ou informações de contato diretas.|
| Critérios de Êxito | <ul><li>O cliente deve ser capaz de visualizar corretamente o nome, a localização e a nota da prestadora de serviços na tela do profissional selecionado.</li><li>O cliente deve ser capaz de visualizar corretamente o feedback mais recente recebido pela prestadora de serviços.</li><li>As fotos da prestadora de serviços devem ser exibidas corretamente na tela.</li><li>O cliente deve ser capaz de entrar em contato com a prestadora de serviços através de um meio de comunicação adequado. |




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
