COMANDOS BANCO DE DADOS MONGO DB
CRIANDO PRIMEIRO BANCO DE DADOS...

 (PRISMA É UMA BIBLIOTECA QUE AJUDA NA COMUNICAÇÃO ENTRE BANCO DE DADOS E APLICAÇÃO) - VAMOS UTILIZAR ELE.

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

DATABASE_URL="mongodb+srv://darlan:darlan123mongodb@users.q0qkzst.mongodb.net/Users?retryWrites=true&w=majority&appName=Users"

mongodb+srv://darlan: (aqui apago) @users.q0qkzst.mongodb.net/ (aqui o nome tabela banco)  ?retryWrites=true&w=majority&appName=Users
                            (E COLOCO MINHA SENHA)                     (NOME DA TABELA BANCO DE DADO)
 TEM QUE TROCAR ESSAS INFOMAÇÕES !!!!!!!!!!!!!!!!!!!
__________________________________________________________________________________________________________
VAMOS PARA O CREATING THE PRISMA SCHEMA:
BASICAMENTE É O FORMATO QUE OS DADOS VÃO FICAR!

despoi do meu banco de dados, tenho que criar os meus schemas = esquemas!
copio o modelo do site prisma.
 tem outros, mas no nosso projeto vamos usar esse:

model User {
  id      String   @id @default(auto()) @map("_id") @db.ObjectId         //( autmaticamente o primsa vai gerar um id único para cada usuario)
  email   String   @unique       // (@unique = significa valor único)
  name    String?            ////(? = opcional, não precisa preencher)
  address Address        // sem interrogação é obrigatório preencher.
  posts   Post[]
}

posso trocas os valores caso queira - colcoar idade/ !! etc ...
cola la no código dentro da pasta prisma / schema.prisma

__________________________________________________________________________________________________________

Próximo passo ->  Install Prisma Client

npm install @prisma/client     OK

cola la no terminal, instalação rápida!

DEPOIS PRECISA DAR O SEGUINTE COMANDO:

 npx prisma db push      ok

esse cara não é um devDepensencies, ele precisa está junto do projeto na hora que  for para o servidor! IMPORTATNE!!!!

para verificar o banco de dado na tela o prisma tem um comando para isso, no terminal vamos colocar:

npx prisma studio      ok

vai direcionar para port 5555
e mostrar o modelo de banco de dados!
nessa interface podemos criar manualmente ...
 
caso apareça erro em algum lugar, errei em algum passo, verificar novamente!
NOVAMENTE !!!!!
 (PRISMA É UMA BIBLIOTECA QUE AJUDA NA COMUNICAÇÃO ENTRE BANCO DE DADOS E APLICAÇÃO) - VAMOS UTILIZAR ELE.
__________________________________________________________________________________________________________

para verificar o cadastro vamos no site mongoDb na nossa data base
1- database
2- Browse Collections
3- User   (nome do banco de dados)

vai aparecer todos os usuarios!!
__________________________________________________________________________________________________________
na documentação do prisma ele ensina como enviar os dado para o banco de dados e buscar os dados 
com codigos ..
__________________________________________________________________________________________________________
__________________________________________________________________________________________________________
__________________________________________________________________________________________________________
 PARTE 2 
MANDANDO INFOMAÇÃOA E BUSCANDO COM CÓDIGOS!!!!
na parte Queryng the database:
vamos colar esse código lá no porjeto:

 import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

dentro do meu POST vou colocar o codigo para criar o usuario:

app.post('/usuarios', (request, response) =>{
          prisma.user.create({
             data:{
              email: request.body.email,
               age: request.body.age,
              name: request.body.name
             }
          });
}
__________________________________________________________________________________________________________
async / await   sempre que vou acessar alçgo externo .. rpeciso colocar eles!!!!! para avisar que é uma promise!!
O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

 app.post('/usuarios', async (request, response) =>{
 await prisma.user.create({
             data:{
              email: request.body.email,
               age: request.body.age,
              name: request.body.name
             }
          });


  quando eu for no meu front end enviar os dados o metodo post mandará para o banco de dados!
  e consigo ir la no site do mongo Db e acessar esses dados!
__________________________________________________________________________________________________________
 BOA PRÁTICA É COLOCAR UMA VARIAVEL!

       const user = app.post('/usuarios', async (request, response) =>{
 await prisma.user.create({
             data:{
              email: request.body.email,
               age: request.body.age,
              name: request.body.name
             }
          });
            response.send(201).json(user);
  __________________________________________________________________________________________________________
   mostrando no metodo GET as infomações!!!!
         IMPORTANTE NÃO POSSO ESQUECER DO ASYNC / AWAIT
 
 //tipo GET - mostrar
app.get('/usuarios', async (request, response) =>{

    const users = await prisma.user.findMany();

    response.status(200).json(users);
})
 AGORA ELE RETORNA AS INFOMAÇÕES DO BANCO DE DADOS!!!!! 
