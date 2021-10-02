<h1>finances</h1>

⚠️ Este Readme está sendo escrito em desenvolvimento e não representa o projeto final, e sim um protótipo

https://whimsical.com/Rt77peGDS1p4hNwEU4Ditj

Finances é um aplicativo de gerenciamento de contas onde o foco é simplificar a forma como você monta a sua planilha financeira de gastos.

Fluxo da aplicação:

<h2>Home</h2>

O usuário entrará na aplicação e já estará na tela home.

A tela home exibirá as operações do usuário no mês atual. Entradas e saídas.

As entradas e saídas serão apenas do mês corrente.

O Valor atual será o calculo entre as Entradas e saídas juntamente com o fechamento do mês passado.
Exemplo: Sabendo que no mês de agosto, tivemos R$ 2.000,00 de entrada durante o mês, e R$ 1.900,00 de saída, sobraram R$ 100,00 do mês anterior. O valor total do mês de setembro começará com R$ 100,00 (do mês anterior);

<div align="center">
  <img alt="finances" title="finances" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/1.png" width="300px" />
</div>

No gráfico que está apresentado na home teremos uma relação dos itens "saída".

Exemplo: Você cadastrou até agora dois itens de "saída":

- Mercado - R$ 700,00
- Internet - R$ 400,00

Ou seja, até agora temos R$ 1.100,00 de saída... e o gráfico ficará responsável por mostrar o quanto cada item de saída é representado dentro do valor total de saída (R$ 1.100,00).

Mais abaixo temos uma listagem de operações. Nessa listagem ficarão as operações que ocorreram no mês corrente.

No fim da página, fixado, temos o menu de navegação.

<div align="center">
  <img alt="finances" title="finances" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/2.png" width="300px" />
</div>

<h2>Categorias</h2>

<div align="center">
  <img alt="finances" title="finances" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/03.png" width="300px" />
</div>

Na tela de categorias, serão mostradas todas as categorias cadastradas. A função das categorias é unificar gastos parecidos para conseguir aninhar melhor os dados para exibição na tela de gráficos. Unificando os gastos e entradas por categorias o entendimento é aperfeiçoado. Para adicionar uma nova categoria, basta clicar n botão "Adicionar +"

<div align="center">
  <img alt="finances" title="finances" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/04.png" width="300px" />
</div>

Para editar uma categoria basta clicar no card mostrado na tela de categorias e você será levado para a tela onde pode editar ou excluir a categoria

<div align="center">
  <img alt="finances" title="finances" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/05.png" width="300px" />
</div>

<h2>Contas e Cartões</h2>

<div align="center">
  <img alt="finances" title="finances" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/06.png" width="300px" />
</div>

Para adicionar operações é necessário ter uma carteira/cartão ou conta cadastrada. Por padrão o aplicativo disponibiliza a carteira, que é onde ocorre os lançamentos principais. É com base na carteira que a home exibe os dados. Como um centralizador de operações, a carteira é o local principal e é o foco das análises que veremos nas demais telas da aplicação. No entanto, todos nós, ou a maioria, possui cartões de crédito/contas bancárias, e é sempre importante manter esses caras por perto antes que fujam do controle. Na aba de Contas e Cartões podemos adicionar esses dados clicando na opção "Toque para adicionar um cartão", que nos levará à essa tela →

<div align="center">
  <img alt="finances" title="finances" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/07.png" width="300px" />
</div>

Nessa tela teremos que preencher dados como o nome da instituição financeira, que aparecerá no cartão após o cadastro, nome presente no cartão e valor disponível na conta. As cores são meramente ilustrativas, no entanto é importante escolher cores de contraste para melhor experiência.

<div align="center">
  <img alt="finances" title="finances" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/08.png" width="300px" />
</div>

Ao adicionar um cartão, ele passará a ser listado dessa forma. Com um movimento de swipe para a esquerda em cima do cartão atual é possível alterar para o outro cartão cadastrado. As operações recentes seguem a mesma lógica da tela home, apareceram as operações do mês corrente

<div align="center">
  <img alt="finances" title="finances" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/09.png" width="300px" />
</div>

Ao lado do ultimo cartão da lista ficará disponível um espaço para adicionar um novo cartão.

<h2>Operações</h2>

O coração da aplicação. As operações são o alimentador do aplicativo. Com as operações conseguimos auxiliar você a controlar seus gastos.
Para criar uma operação, você pode, na tela home, clicar no botão "adicionar +" que estará ao lado de "Operações recentes", ou navegar pelo menu até o icone de dinheiro.

Navegando pelo menu, você será levado para essa tela. Aqui as operações serão listadas conforme o filtro aplicado pelo usuário. O usuário poderá filtrar pela data da operação e pelo nome. Aqui também o usuário poderá adicionar uma operação através do botão "adicionar +", ao lado de "Operações encontradas"

<div align="center">
  <img alt="finances" title="finances" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/10.png" width="300px" />
</div>

<div align="center">
  <img alt="finances" title="finances" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/11.png" width="300px" />
</div>

Para adicionar uma nova operação, primeiro precisamos categorizá-las. Trata-se de uma entrada/saida ou uma poupança? É bem simples, entrada entrará na conta como uma soma. Saída entrará na conta como uma subtração, e poupança depende hehe... para poupança a tela muda um pouco de visual...

<div align="center">
  <img alt="finances" title="finances" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/12.png" width="300px" />
</div>

Caso a operação seja de poupança, significa que estamos retirando de algum lugar (geralmente da carteira para algum cartão/conta), então o aplicativo registrará duas operações. O aplicativo registrará uma operação de saída no item selecionado no input "De", e registrará uma operação de entrada no item selecionado no input "Para".

Continuando com a explicação do formulário como um todo, o campo Nome conterá o nome da sua operação, Ex: Mercado, padaria, panificadora, ônibus etc.

O Valor da sua operação deverá ser preenchido obrigatóriamente

A Categoria da sua operação... você até pode criar uma operação sem categoria, porém não recomendamos, pois uma operação pode ser classificada em alguma categoria, já que a categoria serve para fazer o usuário pensar nos gastos que ele possui. A categoria também servirá mais adiante para conscientizar o usuário de seus gastos.

A Data, geralmente do dia em que ocorreu a operação.

Vincular operação é um dado que estará presente nas operações de entrada e saída, para que saibamos em qual conta o usuário estará fazendo a operação.

Para editar/excluir uma operação, basta o usuário clicar nela e ele será levado para essa tela

<div align="center">
  <img alt="finances" title="finances" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/13.png" width="300px" />
</div>

## 🛠 Tecnologias

   - "@react-native-picker/picker": "^2.1.0",
   - "@react-navigation/native": "^6.0.2",
   - "@react-navigation/native-stack": "^6.1.0",
   - "@types/react-native-autocomplete-input": "^5.0.0",
   - "@types/react-native-snap-carousel": "^3.8.4",
   - "@types/react-native-svg-charts": "^5.0.9",
   - "date-fns": "^2.23.0",
   - "react": "17.0.2",
   - "react-native": "0.65.1",
   - "react-native-autocomplete-input": "^5.0.2",
   - "react-native-draggable": "^3.3.0",
   - "react-native-linear-gradient": "^2.5.6",
   - "react-native-masked-text": "^1.13.0",
   - "react-native-picker-select": "^8.0.4",
   - "react-native-safe-area-context": "^3.3.2",
   - "react-native-screens": "^3.7.1",
   - "react-native-snap-carousel": "^3.9.1",
   - "react-native-splash-screen": "^3.2.0",
   - "react-native-svg": "^12.1.1",
   - "react-native-svg-charts": "^5.4.0",
   - "react-native-svg-icon": "^0.10.0",
   - "react-native-toast-message": "^1.6.0",
   - "realm": "^10.8.0",
   - "styled-components": "^5.3.1"


### Autor
---

<a href="https://github.com/Jordaobm">
 <img style="border-radius: "50px";" src="https://avatars.githubusercontent.com/u/70074016?v=4" width="100px;" alt="Jordão"/>
 <br />
 <sub><b>Jordão Beghetto Massariol</b></sub></a> <a href="https://github.com/Jordaobm" title="Jordão">🚀</a>


Feito com ❤️ por Jordão Beghetto Massariol 👋🏽 Entre em contato!

<a href="https://twitter.com/JordoMass"><img alt="Twitter" src="https://img.shields.io/twitter/url?style=social"></a>
