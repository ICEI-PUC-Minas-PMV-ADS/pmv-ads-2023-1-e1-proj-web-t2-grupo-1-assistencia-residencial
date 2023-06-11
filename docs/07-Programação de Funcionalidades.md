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

##  Cadastro de Prestador de Serviço (RF-01)
Essa tela permite o cadastro de prestadoras de serviços. Os dados são armazenados no LocalStorage com estrutura de dados baseada em JSON. Um exemplo da tela é apresentado na Figura 15.

<figure align="center">
 <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-1-assistencia-residencial/assets/109107020/cadff88f-92b9-44b0-b9fb-b7db479caf19">
<p align="center">Figura 15 - Tela de Cadastro da Profissional</p> 
</figure>

   


