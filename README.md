# nodets-auth
API de autenticação com Node, Typescript, Express, TypeORM, e Docker

### Para rodar o projeto é necessário estar dentro dessa pasta do projeto no terminal e ter o docker instalado, execute o seguinte comando:

`docker-compose up -d`

### Depois de rodar o docker você deve rodar as migration para criar as tabelas

`docker-compose run nodets_app npm run migration`

### Após feito isso você pode usar um SGBD de sua preferencia para acessar a base de dados, dados para conexão:
**HOST:** _0.0.0.0_
**PORT:** _3306_
**DATABASE:** _nodets_auth_
**USERNAME:** _root_
**PASSWORD:** _secret_

### Para testar se a api está acessível entre no endereço:

[http://localhost:3333](http://localhost:3333)
