
# Instalação

Clone esse repositório e então use o [yarn](https://classic.yarnpkg.com/en/docs/install) para instalar as dependências do projeto.

```bash
$ yarn
```

### Versões

Versão NodeJS: **15.14.0**
Versão Yarn: **1.22.10**

## Rodando o projeto

Para rodar o projeto, use o comando abaixo:

```bash
yarn start
```

## Observação #1

Em ambientes que não sejam de desenvolvimento, a variável de ambiente **REACT_APP_LIVE** deve ser setada como **true**, a plataforma do Netlify já possuí como fazer essa configuração, caso não, renomeie o arquivo **.env.example** para **.env**. e faça o upload novamente para a hospedagem, o mesmo dele conter o valor abaixo:

```bash
REACT_APP_LIVE=true
```

## Observação #2

Caso a url para acessar o backend venha a mudar, o valor 'https://abare-project.herokuapp.com' deve ser alterado no arquivo **/src/services/api.ts** para a nova url.


## Autor(Alterar isso depois)

[Antony Luan](https://github.com/antonylrds)


## Licença
[MIT](https://choosealicense.com/licenses/mit/)