# nodets-auth
API de autenticação com Node, Typescript, Express, TypeORM, e Docker

### Para rodar o projeto é necessário estar dentro dessa pasta do projeto no terminal e ter o docker instalado, execute o seguinte comando:

`docker-compose up`

### Depois de rodar o docker abra outra aba do terminal na mesma pasta para rodar as migration para criar as tabelas com o seguinte comando:

`docker-compose run nodets_app npm run migration`

### Após feito isso você pode usar um SGBD de sua preferencia para acessar a base de dados, dados para conexão:
**HOST:** _0.0.0.0_
**PORT:** _3306_
**DATABASE:** _nodets_auth_
**USERNAME:** _root_
**PASSWORD:** _secret_

### Para testar se a api está acessível entre no endereço:

[http://localhost:3333](http://localhost:3333)

Você pode importar as rotas para o seu postman, importando o arquivo da raiz do projeto routes_api.postman.json
