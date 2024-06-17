# Trabalho2 do 2° Bimestre (Programação Avançada para WEB)

### **Alunas:** Beatriz Brito e Cecilia Barros  
### **Professor:** Wagner de Andrade Perin  
### **Turma:** CC5MB  

## Music Inc

### Contexto
Em nossa disciplina, desenvolvemos APIs de backend utilizando Node.js/Fastify com banco de dados não-relacionais (MongoDB) para o 1° Bimestre. Fizemos um app de músicas. Agora, nesse novo projeto, criamos uma interface frontend utilizando Next.js para realmente podermos visualizar os dados que colocamos na API.

### Recursos Implementados

#### Tela Pública (Página Inicial)
- Desenvolvemos uma página inicial que é acessível publicamente.
- Ela contém uma introdução sobre a aplicação.
- Inclui navegação para a página de login.

#### Página de Login
- Desenvolvemos uma página de login que permite aos usuários cadastrados no backend se autenticarem.
- Uma mensagem de erro é exibida para tentativas de logins mal-sucedidos.

#### Página de Cadastro
- Desenvolvemos uma página em que é possível cadastrar novos álbuns de músicas e artistas atualizando assim nosso backend.

#### Página de Listagem
- Depois que o login é feito, o usuário é redirecionado para a nossa página principal, onde mostramos álbuns de música. Também é possível atualizar, cadastrar ou deletar esses itens.

### Baixando Todas as Dependências
Antes de iniciar nosso projeto, não se esqueça de instalar todas as dependências que nosso projeto precisa para funcionar corretamente. Para isso:
1. Faça um `cd` para a pasta `MySpotWiki` e execute `npm install`.
2. Faça um `cd` para a pasta `my-app` e execute `npm install`.

Se esta etapa for feita da maneira correta, já podemos rodar nossa aplicação.

### Para Rodar o Servidor e o Projeto

Em um terminal: Faça um `cd` para a pasta `MySpotWiki` e execute `npm run dev` para iniciar o servidor.

Em outro terminal: Faça um `cd` para a pasta `my-app` e execute `npm run dev` para iniciar o frontend.

### Como Visualizar as Páginas
- A página Home todos podem visualizar.
- Em seguida, temos a página de login.

#### Para Login é Necessário:
- Username ou email e senha.

**Nota:** Se o usuário não estiver previamente cadastrado no nosso banco de dados, ele não será aceito.

### Lista de Usuários Cadastrados

- **Username:** bia  
  **Email:** bia@hotmail.com
- **Username:** ana  
  **Email:** ana@abc.com
- **Username:** Cissa  
  **Email:** cissa@gmail.com
- **Username:** clarissa  
  **Email:** claris@hotmail.com.br
- **Username:** juana  
  **Email:** juana@gmail.com
  
**Qualquer senha pode ser usada.**  
Passando o login, temos nossa página de listagem de álbuns, onde é possível cadastrar álbuns novos, editar e deletar os já existentes, também possui um filtro para buscar álbuns por artista.

Na página de cadastro de álbum também é possível adicionar nossos artistas

