# Next.js 14

Para manter compatibilidade com o curso, e mesmo no Next.js 14 poder utilizar `getServerSideProps()` e `getStaticProps()`, ao criar o projeto deve-se responder negativamente ("No") à pergunta:

`Use App Router (recommended)?`

## Criando o projeto
```bash
$ npx create-next-app teste_next
```

- Would you like to use TypeScript with this project? `Yes`
- Would you like to use ESLint with this project? `Yes`
- Would you like to use Tailwind CSS with this project? `Yes`
- Would you like to use `src/` directory with this project? `No`
- Use App Router (recommended)? `No`
- Would you like to customize the default import alias? `No`

## Iniciando

O conteúdo estático passará a se comportar de forma estática somente depois de construído o build, conforme abaixo:

```bash
npm run build
npm start
```


Abaixo segue os comandos para executar o servidor em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Então abra [http://localhost:3000](http://localhost:3000) no navegador e veja o resultado.
