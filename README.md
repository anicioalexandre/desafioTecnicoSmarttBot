# desafioTecnicoSmarttBot 
[![Linkedin Badge](https://img.shields.io/badge/-alexandre-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alexandre-anicio/)](https://www.linkedin.com/in/alexandre-anicio/)

### `Descrição`
Esse aplicativo permite ao usuário visualizar diversas informações ( cotações, variação, volume, book de ofertas) de criptomoedas em tempo real em um ambiente amigável e intuitivo. Pode-se navegar para um ranking de criptomoedas que dispões de informações chave de cada par e permite ao usuário fazer comparações e ordenações das moedas de acordo com sua performance nas últimas 24 horas. 

Se o usuário desejar ver mais informações sobre determinada moeda é possível buscá-la pelo seu nome ou clicar na respectiva linha na tabela de ranking. O aplicativo também dispõe de um gráfico personalizável para cada ativo, que permite ao usuário visualizar informações sobre a performance do ativo em diferentes circunstâncias e intervalos de tempo.

### `Instalação`
Após o clone do repositório, deve-se acessar a pasta:
```bash
cd desafioTecnicoSmarttBot/desafio-criptomoedas-smarttbot/
```
Nesta pasta, deve-se instalar as dependências do projeto (é necessário ter o NodeJS instalado):
```bash
npm install
```
E iniciar o aplicativo React em modo de desenvolvimento ([http://localhost:3000](http://localhost:3000)):
```bash
npm start
```
### `Testes (Jest + React Testing Library)`
Os testes da aplicação foram desenvolvidos em Jest e React Testing Library (RTL). A escolha por utilizar os dois em conjunto foi pautada principalmente pelo fato dos princípios de funcionamento do RTL serem semelhantes à maneira como o usuário encontra elementos na página. Desse modo consegue-se testar a aplicação de uma forma mais efetiva e coerente com as possíveis interações feitas pelo usuário.

Para executar os testes, dentro da pasta correta do repositório (desafioTecnicoSmarttBot/desafio-criptomoedas-smarttbot/):
```bash
npm test
```
Para visualizar a cobertura total de testes na aplicação:
```bash
npm run test-coverage
```
### `Gerenciamento de estado`
O gerenciamento de estado foi feito, majoritariamente, através do [Redux](https://redux.js.org/) (utilizando o middleware Thunk) de modo que todas as requisições à API foram gerenciadas por ele. Em componentes que não pecisavam de compatilhamento de estado foi utilizado o estado local do componente (utilizando o Hook useState()). 

No caso da página que continha o gráfico (/src/pages/CriptoChart.jsx), utilizei o [ContextAPI](https://reactjs.org/docs/context.html) para transmitir o estado desse componente para seus filhos (botões de personalização do gráfico). Nesse caso, optei pelo Context por possuir uma sintaxe mais simples (utilizando o hook useContext()) e principalmente porque era um tipo de estado que não necessitava estar disponível para a aplicação inteira.

### `Desafios durante o desenvolvimento`
O tratamento de erros fornecedo pela [API](https://docs.poloniex.com/#introduction) é um pouco confuso e possuia casos em que, quando requisição falhava, a API não retornava um caso de erro corretamente. Isso tornou o tratamento de erros um pouco mais subjetivo de se fazer.

A falta de paginação das chamadas da API (pelo menos não encontrei uma forma de fazer requisições com limite de dados) não permitiu desenvolver uma paginação mais efetiva, dividindo por requisições com dados menores.

### `Bibliotecas externas`
As bibliotecas externas utilizadas no aplicativo foram:
- StyledComponents: é uma biblioteca de CSS que permite criar componentes (JavaScript) que permitem receber código CSS, utilizando tagged template literals. Desse modo os elementos de estilo se tornam componentes (parecidos com componentes do React) e a estilização se torna muito mais dinâmica e acessível.
- ReactTooltip: um componente customizável que permite adicionar avisos na página e facilita a navegação do usuário.
- Rechart: um componente de gráfico altamente personalizável, confiável (tem boa estabilidade) e com ótima performance.
