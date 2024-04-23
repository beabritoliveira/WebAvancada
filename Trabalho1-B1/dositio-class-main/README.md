## Trabalho 1 (do primeiro bimestre)
 ####  Contexto
 Em nossa disciplina estamos desenvolvendo as API’s de backend utilizando Node.js/Fastify
 com bancos de dados não-relacionais (MongoDB). Nosso projeto prático, "Dositio",
 atualmente apresenta um CRUD de produto e uma rota de autenticação (`/auth`). Até este
 ponto, juntos, implementamos as rotas: GET `/products` e `/products/:id`, POST `/products`,
 PUT `/products/:id` e DELETE `/products/ :id`.

#### Recursos de implementação obrigatórios 
 * GET **`/categories`**: Deve retornar a lista de categorias de produtos existentes na
 aplicação.
 * POST **`/categories`**: Deve criar uma nova categoria no banco de dados. Garanta a
 validação dos campos (apenas `name` e `img_url`). Deve retornar status 201 sem
 conteúdo.
 * PUT **`/categories/:id`**: Deve atualizar os dados de uma categoria específica.
 * DELETE **`/categories/:id`**: Deve remover a categoria.
 * GET **`/categories/:id/products`**: Deve retornar todos os produtos de uma categoria
 específica.
 * POST **`/register`**: Deve criar um novo usuário. Garanta validação dos campos

#### Recursos de implementação adicionais/opcionais
 * Aprimore o modelo do usuário adicionando uma propriedade **`isAdmin`**. Utilize esta
 propriedade para restringir a criação, atualização e remoção de produtos e
 categorias apenas a usuários administradores. Isto envolverá a modificação de rotas
 existentes para verificar privilégios administrativos.

#### Utilização prática da aplicação 
* ##### Download e inserção de dados
1) É necessario, primeiramente, com que seja feito o download da pasta completa
2) Em seguida, ao abrir no editor de código (foi utilizado durante a criação do código o Visual Studio Code) é necessário abrir o terminal e inserir o comando **`npm install`**, em que, por exemplo, será instalado todas as funcionalidades necessárias que estão descritas no package.json e a pasta node-modules
3) Em seguida, faremos a inserção dos dados no banco de dados, para isso, se faz necessário primeiro de tudo criar as collections  e o database no MongoDB. Assim, a database deve ser denominada como **dositio** enquanto as collections dentro dela devem ser nomeadas como **users**, **products** e **categories**.
4) Seguindo com esse intuito, esse é o momento de baixar os arquivos presentes na pasta **`mongoDB_ex/dositio-class-main`**. Para inserção efetiva se é necessário ir a cada coleção do banco clicar em **ADD DATA** e depois em **Import JSON or CSV file** selecionar o arquivo baixado correspondente e realizar o mesmo para as outras collections.

* ##### Utilização e comprovação da eficácia do código
1) É indicado caso deseje manipular as informações, através do CRUD, a utilização do Thunder Client para testar a API.
   * 1) Para que isso seja possível, é essencial rodar no terminal o **`node serve.js`** ou **`npm run dev`** ou **`nodemon server.js`**, dessa maneira o servidor estara rodando e já é possível realizar as requisições desejadas
     2) Em alguns casos como no POST (criação), menos no **`/register`**, PUT (atualização) e DELETE (deletar/excluir) é imperativo com que o usuário fazendo a requisição seja administrador, fazendo essa verificação atráves de um x-access-token no header da requisição, nos ultimos 2 casos se faz tambem necessário passar o id dos produtos ou categorias no parametro da requisição.
     3) Durante o POST e o PUT também é necessario repassar as informações no body de acordo com o requisitado nos **`schemas`** de cada rota
     4) Enquanto isso, o GET (busca) é possível ser feito por qualquer user e sem passar nenhum elemento no body.
2) É possível também fazer a manipulação do CRUD através do **test.js**
   * 1) Nele se tem rotas para testar o servidos, autenticadas e não autenticadas, não apenas de sucesso como também de erro (de diversas maneiras).
     2) Antes de testar, é necessário a criação de um arquiv **´.env`** em que se tem que informar dados como:
        * STAGE
        * PORT 
        * HOST
        * JWT_SECRET
        * DB_URL
     3) Assim, é de caráter fundamental inserir no terminal **`npm run test`**.
     4) Ele vai retornar todas as rotas como compativeis com o status code esperado, caso contrário apontará um erro e em qual teste.



