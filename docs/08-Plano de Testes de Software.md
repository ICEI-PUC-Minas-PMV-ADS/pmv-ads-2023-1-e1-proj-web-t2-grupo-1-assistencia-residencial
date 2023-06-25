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

<br>

| Caso de Teste        | CT-08 - Inserção de feedbacks |
|:---:|:---|
| Requisitos Associados| RF03 O site deve permitir a inserção de feedbacks dos usuários para as prestadoras de serviço  |
| Objetivo do Teste    | Verificar se o site permite a inserção de feedbacks dos usuários para as prestadoras de serviço. |
| Passos               | 1.  Acesso à página do profissional:<br> <ul><li>Abra o navegador da web e digite o URL da plataforma</li><li>Após fazer login como usuário, acesse o perfil do profissional desejado.</ul></li>2.  Teste de inserção de feedback:<ul><li>Abaixo das informações do profissional, como nome, meios de contato e portfólio, você encontrará os feedbacks mais recentes. </li><li>Em seguida, há uma caixa de texto onde você pode adicionar o seu próximo feedback</li><li>Além disso, você pode atribuir uma nota ao profissional, selecionando um número de estrelas de 1 a 5, de acordo com a sua satisfação com o serviço|
| Critérios de Êxito | O sistema deve permitir a inserção de feedbacks e atribuir ao perfil do profissional a nota dada pelo usuário, caso essa seja informada. |

<br>

| Caso de Teste        | CT-09 - Visualização de feedbacks  |
|:---:|:---|
| Requisitos Associados| RF04 O site deve realizar o acesso das prestadoras de serviço ao seu feedback mais recente   |
| Objetivo do Teste    | Verificar se o site permite às prestadoras de serviço terem acesso aos feedbacks mais recentes deixados pelos usuários. |
| Passos               | 1.  Acesso à página do profissional:<br> <ul><li>Abra o navegador da web e digite o URL da plataforma.</li><li>Após fazer login como prestadora de serviço, acesse seu perfil.</ul></li>2.  Teste de visualização de feedbacks:<ul><li>Abaixo das informações do profissional, como nome, meios de contato e portfólio, você encontrará os feedbacks mais recentes. </li><li>Após o acesso a página do seu perfil é exibido sua nota e o feedback mais recente.|
| Critérios de Êxito | O sistema deve permitir a visualização da sua nota e do feedback mais recente.  |

