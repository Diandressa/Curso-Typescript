![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

# Curso de Typescript 
Curso de Typescript do CFBCursos

**Menu**

- [Configurar/Como usar](#🖥️-configurarcomo-usar)
- [Preparando o ambiente e instalando recursos (aula01)](#preparando-o-ambiente-e-instalando-recursos-aula01)
- [Entendendo as formas de compilar o Typescript gerar Javascript (aula 02)](#entendendo-as-formas-de-compilar-o-typescript-gerar-javascript-aula-02)
- [Criando arquivos de configurações para facilitar a compilação (aula 03)](#criando-arquivos-de-configurações-para-facilitar-a-compilação-aula-03)
- [Entendendo como funciona Type Inference em Typescript (aula 04)](#entendendo-como-funciona-type-inference-em-typescript-aula-04)



## 🖥️ Configurar/Como usar

### Preparando o ambiente e instalando recursos (aula01)

* Instalar o nodejs
ir em www.typescriptlang.org -> download -> Globally Installing Typescript
`npm install -g typescript`

* Instalar extenções no vscode:\
Javascript and Typescript Nightly;\
Live Server;\
Material Icon Theme

### Entendendo as formas de compilar o Typescript gerar Javascript (aula 02) 

Checar versões:
`node -v` / `npm -v` / `tsc --version`

Abrir terminal noVscode, podemos dividir o terminal, inserir um cmd (pra compilar) e outro powersheel (pra rodar o projeto)

Criar um arquivo arquivo.ts, precisamos compilar o arquivo ts para js.

Comando para compilar (gera o arquivo js):

`tsc nomearquivo.ts`

roda o js no terminal com o comando:

`node nomearquivo.js`

para compilar depois de feito alterações digita o comando novamente :

`tsc nomearquivo.ts`

### Criando arquivos de configurações para facilitar a compilação (aula 03)

Atualizar compilador no arquivo 
(ruim pq a cada compilação precisaria digitar o comando)
`nomearquivo.ts --target.ts --target "ES2016"`

ESNext pega a última versão do JS
`nomearquivo.ts --target.ts --target "ESNext"`

Quando compilamos ele compila para um versão js antiga,
podemos ajustar na hora de compilar:

#### Criar arquivo tsconfig.json:

no prompt 
`tsc + enter`
`tsc --init`

#### Atualizar versão no tsconfig.json
Muda a linha 14 para: "target": "ESNext", 
    
#### Remover os comentários feitos no arquivo ts quando compila para js
Linha 61 descomentar: "removeComments": true,  

#### Configurar onde serão salvos os arquivos js compilados 
Linha 60 descomentar: "outDir": "./",  

Cria pastinha build depois: "outDir": "./build",  

#### Configurar onde salvamos os arquivos ts
Linha 33 descomentar: "rootDirs": [],

Cria pastinha src, depois: "rootDirs": ["./src"],    

#### Compilar todos os arquivos de uma vez na pasta src e joga na pasta build
Comando:
`tsc`

### Entendendo como funciona Type Inference em Typescript (aula 04)

#### Ver arquivo nomearquivo.tsx

O watch serve para observar as alterações no arquivo e compilar automaticamente

no cmd digita 
`tsc --help` 

Procupar watch e digitar no cmd do vscode

`tsc --watch` ou `tsc -w`

#### Para rodar o arquivo :

no cmd node entra na pasta build:

`cd build`

`node nomearquivo.js`
