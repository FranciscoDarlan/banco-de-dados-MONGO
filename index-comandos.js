COMANDOS BANCO DE DADOS MONGO DB

criando nosso primeiro banco de dados!

vamos no site mongodb.com
clica no tryfree(testegratis)
na tela de cadastro tem 2 opções: logar com goolge ou digitar email senha etc..

entrei com email do google mesmo !

aceitar os termos ..
welcome!!!

vai aparecer uma pesquisa interna, qual seu objetivo !
 vai para tela de pagamentos
queremos o gratuito! Mzero - M0
nome: do banco o meu vou criar com (USERS)
vai perguntar qual localidade, quanto mais perto colocar vai funcionar mais rapido!
temos somente o brazil/ são paulo
click em craete deployme

vai perguntar o username com password
coloca seu nome e senha 
guarda o nome e senha do banco de dados
click crate user
click closecriate

JÁ CRIOU O BANCO DE DADOS
_______________________________________________________________________-
 SÓ QUE O BANCO DE DADOS SOMENTE ESTÁ NO SITE, temos que conectar ao nosso 
codigo/projeto node!
para facilitar, não vamos fazer tudo do zero 
  vamos utilizar biblioteca para fazer essa conexão!

biblioteca que vamos utilizar é o PRISMA!

no site => prisma.io
1 - vou dar um get started
2 - lado esquerdo start from scretch (começar do zero )
________________________________________________________________________________________________________
3 - MongoDB
vamos seguir os passos 
trocar a linguagem de typescript para javascript ..
  ele fala para criar o projeto do zero com ->    npm init -y     ok
depois intalar o prisma  - >>>>   npm install prisma --save-dev   ok
vai instalar na pack.json

 "dependencies": {
    "express": "^4.19.2"          ( temos essa curiosidade, oque está aqui na dependencies são coisas que 
                                          quando chegar no servisor precisa instlar para funcionar)
  },
  "devDependencies": {
    "nodemon": "^3.1.4",          ( devDependencies são coisa que so precisar está no ambiente do desenvolvedor )
    "prisma": "^5.16.1"
  }

( NA DÚVIDA DE NÃO SABER QUAL É QUAL, COLOCA TUDO NA DEPENDENCIES .. ) !!!!!!!!!!!!!!

continua dando comnado no terminal  - >>>>  npx prisma init        ok

vai criar arquivos :
gitignore
prisma
.env
para uma melhor visualização podemos instalar extensão para deixar o código mais colorido.
      prima e
      prisma - insider 
      os 2

ok vai ficar colorido, mais fácil de visualizar os codigos !
 vamos para o próximo passo !
________________________________________________________________________________________________________
4 - connect you database (MongoDB)
constinuamos seguindo a documentação ...
novamente troco para linguagem javascript
no arquivo schema.prisma tenho que copiar e colar la esse código da documentação!

datasource db {
  provider = "mongodb"              //-> coloca esse codigo lá!
  url      = env("DATABASE_URL")
}

por padrão ele vem com o postgre, tem que apagar ele e usar o mongo!

datasource db {
  provider = "postgresql"      //-> por padraão vem esse ! tem que apagar para usar o Mongodb
  url      = env("DATABASE_URL")
}

vou agora para o arquivo .env
la no site mongoDb vou no date base, conect
driver e escolhe pega a conectividade

no arquivo .env presico apagar o que esta dentro das aspas deixando somente assim :
DATABASE_URL=""

e colocar dentro das aspas o que copiei no site!
ficando assim : 
DATABASE_URL="mongodb+srv://darlan:<password>@users.q0qkzst.mongodb.net/?retryWrites=true&w=majority&appName=Users"
          mongodb+srv://darlan: (aqui apago) @users.q0qkzst.mongodb.net/ (aqui o nome tabela banco)  ?retryWrites=true&w=majority&appName=Users
                            (E COLOCO MINHA SENHA)                     (NOME DA TABELA BANCO DE DADO)
 TEM QUE TROCAR ESSAS INFOMAÇÕES !!!!!!!!!!!!!!!!!!!
__________________________________________________________________________________________________________
VAMOS PARA O CREATING THE PRISMA SCHEMA
