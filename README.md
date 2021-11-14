<div align="center">
  <img alt="finances" title="finances" src="https://github.com/Jordaobm/finances/blob/main/android/app/src/main/ic_launcher-playstore.png" width="300px" />
</div>

[badge-branches]: https://github.com/Jordaobm/finances/blob/main/coverage/badge-branches.svg
[badge-functions]: https://github.com/Jordaobm/finances/blob/main/coverage/badge-functions.svg
[badge-lines]: https://github.com/Jordaobm/finances/blob/main/coverage/badge-lines.svg
[badge-statements]: https://github.com/Jordaobm/finances/blob/main/coverage/badge-statements.svg

![Badge-branches][badge-branches]
![Badge-functions][badge-functions]
![Badge-lines][badge-lines]
![Badge-statements][badge-statements]

<h1>🚀finances🚀</h1>

🚧⚠️ Aplicação em fase de testes ⚠️🚧

<h2>Sumário</h2>

<ul>
  <li><a href="#sobre">Sobre a aplicação</a></li>
  <li><a href="#guia">Guia rápido para executar o projeto</a></li>
  <li><a href="#guiaUso">Guia rápido de uso da aplicação</a>
  <ul>
    <li><a href="#guiaUsoHome">Tela inicial (Home)</a></li>
    <li><a href="#guiaUsoNavigation">Navegação</a></li>
    <li><a href="#guiaUsoCategorias">Categorias</a></li>
    <li><a href="#guiaUsoCartoes">Contas e cartões</a></li>
    <li><a href="#guiaUsoOperacoes">Operações</a></li>
    <li><a href="#guiaUsoAnalises">Análises e Gráficos</a></li>
    <li><a href="#guiaUsoHomeComOperacoes">Tela inicial com algumas operações cadastradas</a></li>
  </ul>
    
  </li>
</ul>

<h2 id="sobre">💡 Sobre a aplicação</h2>
Finances é um aplicativo de gerenciamento de contas onde o foco é simplificar a forma como você monta a sua planilha financeira de gastos. A ideia aqui é manter o usuário sempre informado do quanto gastou e quanto há entre seus gastos e ganhos.

O projeto foi desenvolvido com base em um protótipo que fiz no figma algumas semanas antes de iniciar o desenvolvimento. Alguns componentes da aplicação foram adptados entre o protótipo e a versão final da aplicação, no entanto a ideia e usabilidade não foram afetadas com as mudanças.

<a href="https://www.figma.com/file/IE93rSHrUNDIwVIhdqCFJL/Finances?node-id=0%3A1"> 💎 Protótipo no figma</a>

<h2 id="guia">🧪 Guia rápido para executar o projeto</h2>
Para iniciar o projeto, primeiro certifique-se de ter um ambiente android/IOS configurado em sua máquina ou um aparelho que possa ser usado via cabo.

Para o desenvolvimento desse projeto utilizei a última versão do `Android Studio` e segui o passo à passo do guia de instalação do mesmo, que você pode encontrar aqui:

<a href="https://developer.android.com/studio?hl=pt&gclid=Cj0KCQiA4b2MBhD2ARIsAIrcB-TAFgv26igH7mL4RniWL72Et7fszQXlQM3Scnqy0EYsGpmtaRd_WlIaAnQsEALw_wcB&gclsrc=aw.ds"> 📱 Android Studio</a>

Tenha instalado `node` e de preferência tenha também o `yarn` (pois o projeto conta com yarn.lock).

Clone este repositório usando o comando:

<!--sec data-title="Your first command: OS X and Linux" data-id="OSX_Linux_whoami" data-collapse=true ces-->

    git clone https://github.com/Jordaobm/finances.git

<!--endsec-->

Instale as dependências necessárias usando o comando:

<!--sec data-title="Your first command: OS X and Linux" data-id="OSX_Linux_whoami" data-collapse=true ces-->

    yarn || npm i

<!--endsec-->

Para iniciar o projeto, execute:

<!--sec data-title="Your first command: OS X and Linux" data-id="OSX_Linux_whoami" data-collapse=true ces-->

    yarn android || npm run android

<!--endsec-->

O projeto consta com implementação de testes em seus componentes, para atualizar executar os testes, execute:

<!--sec data-title="Your first command: OS X and Linux" data-id="OSX_Linux_whoami" data-collapse=true ces-->

    yarn coverage

<!--endsec-->

Esse comando irá atualizar os testes e gerar um novo arquivo de coverage que pode ser encontrado na raiz do projeto `./coverage`. Caso queira ver a porcentagem de abragência dos testes, basta entrar na pasta `./coverage/lcov-report` e abrir o arquivo `index.html` em seu navegador.

<h2 id="guiaUso">📝 Guia rápido de uso da aplicação</h2>

Para usar a aplicação (ainda em fase de testes), disponibilizei um APK (Android Package) dentro de `src/assets/document` com o nome de `finances.apk`. Ele pode ser facilmente instalado em celulares e emuladores Android e representa uma versão de testes da aplicação.

<a href="https://github.com/Jordaobm/finances/blob/main/src/assets/document/finances.apk"> 🔨 Versão de testes (APK) da aplicação</a>

<h3 id="guiaUsoHome" >Tela inicial (Home)</h3>

Ao acessar a aplicação pela primeira vez, o usuário será levado à tela inicial (Home)

<div align="center">
  <img alt="Tela inicial da aplicação" title="Tela inicial da aplicação" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/home.png" width="400px" />
</div>

Na tela inicial (Home), serão exibidas informações como:

<ul>
  <li>Data atual</li>
  <li>Período de datas que serão listadas as operações</li>
  <li>Valor total das operações de entrada no período selecionado</li>
  <li>Valor total das operações de saída no período selecionado</li>
  <li>Valor total entre as operações de entrada e as operações de saída no período selecionado</li>
  <li>Quando houver operações de saída, a tela mostrará um gráfico das operações de saída agrupadas por categoria </li>
</ul>

<h3 id="guiaUsoNavigation">Navegação</h3>

Na barra de navegação da aplicação, ordenados da esquerda para direita temos as seguintes rotas:

<ul>
  <li>Categorias</li>
  <li>Cartões</li>
  <li>Tela Inicial (Home)</li>
  <li>Operações</li>
  <li>Análises e gráficos</li>
</ul>

<h3 id="guiaUsoCategorias">Categorias</h3>

Dentro da aplicação as operações serão `categorizadas` e cada qual terá sua especificação. As categorias são uma forma de agruparmos os gastos e os ganhos em conjuntos semelhantes para que a aplicação possa apresentar gráficos relevantes sobre as operações.

⚠️ Atenção: É necessário ter uma categoria cadastrada para então cadastrar uma operação... (Todas as operações devem estar relacionadas à uma categoria).

Para acessar as categorias, basta clicar no primeiro ícone (da esquerda para a direita) na barra de navegação.

<div align="center">
  <img alt="Categorias" title="Categorias" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/categories.png" width="400px" />
</div>

Na tela de categorias serão exibidas informações como :

<ul>
  <li>Categorias cadastradas</li>
</ul>

<h3 id="guiaUsoCartoes">Contas e cartões</h3>

Contas e cartões são a forma mais prática de armazenar dinheiro atualmente. Contas virtuais ou cartões geralmente são usados e têm seu espaço especial dentro da aplicação. Não se preocupe, nenhuma informação sensível é usada por aqui. Contas e cartões, dentro da aplicação, servem somente para dizer o quanto você tem em cada um deles, como uma forma de controlar e saber exatamente quanto você possuí disponível.

Para acessar os Contas e cartões, basta clicar no segundo ícone (da esquerda para a direita) na barra de navegação.

<div align="center">
  <img alt="Contas e cartões" title="Contas e cartões" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/cards.png" width="400px" />
</div>

Na tela de cartões serão exibidas informações como:

<ul>
  <li>Carrosel horizontal que apresentará todos os cartões do usuário</li>
  <li>Cada cartão (quando selecionado) exibirá as operações relacionadas à ele</li>
  <li>Por padrão a aplicação traz a uma carteira previamente cadastrada. Essa carteira deve ser usada pelo usuário para representar o dinheiro que ele possuí em mãos mesmo (dinheiro físico)</li>
</ul>

<h3 id="guiaUsoOperacoes">Operações</h3>

Operações são operações 😅. Operação é a forma como dei, dentro da aplicação, para todo o tipo de entrada/saída/transferência que existe na aplicação. Operações são o núcleo de toda a aplicação. O usuário poderá inserir operações com nome, valor, categoria à qual ela pertence, data em que a operação ocorreu e à qual carteira/conta/cartão está vinculada.

Para acessar as operações, basta clicar no quarto ícone (da esquerda para a direita) na barra de navegação.

<div align="center">
  <img alt="Operações" title="Operações" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/operations.png" width="400px" />
</div>

Na tela de operações serão exibidas informações como:

<ul>
  <li>Filtro de operações</li>
  <li>Lista das operações filtradas</li>
</ul>

<h3 id="guiaUsoAnalises">Análises e Gráficos</h3>

Análises e gráficos terão como objetivo conscientizar o usuário de seus maiores gastos, os destaques do mês e indiciar o vilão de seu orçamento.

Para acessar as operações, basta clicar no quinto ícone (da esquerda para a direita) na barra de navegação.

<div align="center">
  <img alt="Análises" title="Análises" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/charts.png" width="400px" />
</div>

Na tela de Análises e Gráficos serão exibidas informações como:

<ul>
  <li>Gráficos comparativos e demonstrativos dos gastos agrupados por categoria e a listagem das categorias com seus valores</li>
  <li>Gráficos comparativos e demonstrativos dos gastos por cartão/carteira/conta</li>
</ul>

<h3 id="guiaUsoHomeComOperacoes">Tela inicial com algumas operações cadastradas</h3>

Aqui temos um demonstrativo de como fica a listagem de operações na tela inicial da aplicação.

<div align="center">
  <img alt="Tela inicial com listagem de operações" title="Tela inicial com listagem de operações" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/homeAndOperations.png" width="400px" />
</div>

### Autor

---

<a href="https://github.com/Jordaobm">
 <img style="border-radius: "50px";" src="https://avatars.githubusercontent.com/u/70074016?v=4" width="100px;" alt="Jordão"/>
 <br />
 <sub><b>Jordão Beghetto Massariol</b></sub></a> <a href="https://github.com/Jordaobm" title="Jordão">🚀</a>

Feito com ❤️ por Jordão Beghetto Massariol 👋🏽 Entre em contato!

<a href="https://twitter.com/JordoMass"><img alt="Twitter" src="https://img.shields.io/twitter/url?style=social"></a>
