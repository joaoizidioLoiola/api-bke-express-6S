## Comandos

### Node

```
node -v #verifica a versão do node
npm -v #verifica a versão do npm
npm init  #cria o package.json

```

### Git

```
git config --global user.name "Seu Nome"
git config --global user.email "Seu Email"
git remote add origin  https://github.com/UsuarioGit/NomeDoRepositorio.git

```

### Prisma

```
npm i prisma -D (Instala prisma como dependencia de desenvolvimento)
npx prisma init (Inicializa o prisma no projeto prisma/schema.prisma e .env)
npm i @prisma/client  #Instala o cliente do prisma para importação no model
npx prisma db pull #Gera o modelo a partir do banco criado
npx prisma db push #Gera o banco a partur do modelo
npx prisma db generate #Cria as classes baseadas no modelo atual
```
