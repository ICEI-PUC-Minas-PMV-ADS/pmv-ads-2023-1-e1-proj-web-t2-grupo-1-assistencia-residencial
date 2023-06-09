# Especificações do Projeto

O embasamento da escolha do problema exposto se deu por meio de pesquisa de dados reais. Foi estabelecido por meio de entrevistas realizadas pelos integrantes do grupo com a participação dos usuários. As particularidades coletadas nesse processo foram fundamentadas em forma de personas e histórias de usuários.

## Personas

Maísa Romagnolli tem 26 anos, é estudante de enfermagem e busca por serviços de reparos domésticos que sejam atendidos de forma ágil e exclusivamente por mulheres, levando em conta a insegurança de contratar um homem desconhecido para ir até sua casa.

|Motivações| Frustrações|
|--------------------|------------------------------------|
|Falta de tempo  | Insegurança|
|Preferência por profissional do sexo feminino | Homens em domínio na área |  


Janaína Alves tem 34  anos e trabalha como autônoma. Busca promover a divulgação do próprio trabalho em novas plataformas além das já utilizadas como Instagram e grupos de Facebook, a fim de captar novos clientes. Atualmente tem dificuldade em se promover como prestadora de serviços do sexo feminino, já que o mercado é majoritariamente composto por homens.

|Motivações| Frustrações|
|--------------------|------------------------------------|
|Divulgação do seu próprio trabalho e de outras prestadoras desses serviços|Falta de um canal que conecte mulheres que necessitam e prestam serviços de manutenção em residência|
|Ter um canal centralizado exclusivo para mulheres| Homens em domínio na área |  




## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Contratar profissionais exclusivamente do sexo feminino         | Não me sinto segura em ficar sozinha com um homem desconhecido para realizar esse serviço.              |
|Usuário do sistema  |Um canal de comunicação para encontrar facilmente profissionais qualificadas e confiáveis que prestam serviços de manutenção domiciliar.  |Necessito de uma profissional para montar um móvel. Tenho uma rotina cheia e não tenho expertise nesse tipo de serviço              |
|Administrador       | Procuro uma plataforma que dê a possibilidade de que as clientes enviem feedback referente ao trabalho realizado. | Aumentar minha visibilidade como profissional para que seja mais fácil ser contratada. Noção de melhorias no serviço para melhor experiência do cliente. |
|Administrador       |Divulgar meu trabalho e de outras profissionais que executam pequenos reparos de manutenção domiciliar, exclusivamente para mulheres.| Área ocupada por homens em sua maioria, um canal voltado somente para o público feminino trás mais segurança para todas nós. |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID       | Descrição do Requisito  | Prioridade |
|---------|-----------------------------------------|----|
| RF-001  |O site deve permitir o cadastro e manutenção de dados de prestador (nome, e-mail, senha, região que atende, certificações, adicionar fotos)| ALTA | 
| RF-002  |O site deve permitir o cadastro e manutenção de dados de cliente (nome, senha, e-mail)  | ALTA |
| RF-003  |O site deve permitir a inserção de feedbacks dos usuários para as prestadoras de serviço | MÉDIA | 
| RF-004  |O site deve realizar o acesso das prestadoras de serviço aos seus feedbacks| MÉDIA |
| RF-005  |O site deve permitir pesquisas utilizando filtro para encontrar prestadores de serviço específicos| ALTA | 
| RF-006  |O site deve permitir login de usuários (cliente, prestador) cadastrados no sistema | ALTA |

### Requisitos não Funcionais


|ID    | Descrição do Requisito  | Prioridade |
|------|-------------------------|----|
|RNF-001|O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages)| ALTA | 
|RNF-002|O site deverá ser responsivo permitindo a adaptação do layout de acordo com o tamanho da tela do dispositivo utilizado. | ALTA |
|RNF-003|O site deve ter bom nível de contraste entre os elementos da tela em conformidade | MÉDIA | 
|RNF-004|O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)| MÉDIA |
|RNF-005|O site deve incluir informações sobre a política de privacidade e termos de serviço, garantindo a proteção dos dados dos usuários e fornecendo as informações necessárias para utilização do serviço.| ALTA | 


## Restrições

|ID    | Descrição do Requisito  |
|------|-------------------------|
|RF-001|O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 25/06/2023.| 
|RF-002|O aplicativo deve se restringir às tecnologias básicas da Web no Frontend|
|RF-003|A equipe não pode subcontratar o desenvolvimento do trabalho. |

