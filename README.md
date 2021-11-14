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

<h2 id="start">Sumário</h2>

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
    <li><a href="#guiaUsoConfigs">Configurações</a></li>
  </ul>
  </li>
  <li><a href="#tecs">Tecnologias utilizadas na aplicação</a>
  <li><a href="#fim">Considerações finais</a>
  <li><a href="#creditos">Créditos</a>

</ul>

<h2 id="sobre">💡 Sobre a aplicação</h2>
Finances é um aplicativo de gerenciamento de contas onde o foco é simplificar a forma como você monta a sua planilha financeira de gastos. A ideia aqui é manter o usuário sempre informado do quanto gastou e quanto há entre seus gastos e ganhos.

O projeto foi desenvolvido com base em um protótipo que fiz no figma algumas semanas antes de iniciar o desenvolvimento. Alguns componentes da aplicação foram adaptados entre o protótipo e a versão final da aplicação, no entanto a ideia e usabilidade não foram afetadas com as mudanças.

<a href="https://www.figma.com/file/IE93rSHrUNDIwVIhdqCFJL/Finances?node-id=0%3A1"> 💎 Protótipo no figma</a>

<h2 id="guia">🧪 Guia rápido para executar o projeto</h2>
Para iniciar o projeto, primeiro certifique-se de ter um ambiente android/IOS configurado em sua máquina ou um aparelho que possa ser usado via cabo.

Para o desenvolvimento desse projeto utilizei a última versão do `Android Studio` e segui o passo à passo do guia de instalação do mesmo, que você pode encontrar aqui:

<a href="https://developer.android.com/studio?hl=pt&gclid=Cj0KCQiA4b2MBhD2ARIsAIrcB-TAFgv26igH7mL4RniWL72Et7fszQXlQM3Scnqy0EYsGpmtaRd_WlIaAnQsEALw_wcB&gclsrc=aw.ds"> 📱 Android Studio</a>

Tenha instalado `node` e de preferência tenha também o `yarn` (pois o projeto conta com yarn.lock).

Clone este repositório usando o comando:

<!--sec data-title="" data-id="" data-collapse=true ces-->

    git clone https://github.com/Jordaobm/finances.git

<!--endsec-->

Instale as dependências necessárias usando o comando:

<!--sec data-title="" data-id="" data-collapse=true ces-->

    yarn || npm i

<!--endsec-->

Para iniciar o projeto, execute:

<!--sec data-title="" data-id="" data-collapse=true ces-->

    yarn android || npm run android

<!--endsec-->

O projeto conta com implementação de testes em seus componentes, para atualizar os testes, execute:

<!--sec data-title="" data-id="" data-collapse=true ces-->

    yarn coverage

<!--endsec-->

Esse comando irá atualizar os testes e gerar um novo arquivo de coverage que pode ser encontrado na raiz do projeto em `./coverage`. Caso queira ver a porcentagem de abragência dos testes, basta entrar na pasta `./coverage/lcov-report` e abrir o arquivo `index.html` em seu navegador.

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

Operações são operações 😅. Operação é o nome que atribuí, dentro da aplicação, para todo o tipo de entrada/saída/transferência que existe na aplicação. Operações são o núcleo de toda a aplicação. O usuário poderá inserir operações com nome, valor, categoria à qual ela pertence, data em que a operação ocorreu e à qual carteira/conta/cartão está vinculada.

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

<h3 id="guiaUsoConfigs">Configurações</h3>

Na tela de configurações o usuário poderá escolher o período que deseja utilizar para listar suas operações e realizar os cálculos dos gráficos das demais áreas da aplicação.

Para acessar as operações, basta clicar no ícone de engrenagem presente na tela inicial da aplicação no canto superior direito.

<div align="center">
  <img alt="Tela de configurações" title="Tela de configurações" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/config.png" width="400px" />
</div>

A tela de configurações conta também com uma funcionalidade de importação / exportação de dados:

<div align="center">
  <img alt="Tela de configurações" title="Tela de configurações" src="https://github.com/Jordaobm/finances/blob/main/src/assets/document/importExportData.png" width="400px" />
</div>

Como funciona o backup ❓❔

<h4>❤️ Exportar dados</h4>

Para exportar os dados da aplicação, clique em exportar dados. A aplicação irá gerar um arquivo `.json` com todos os dados cadastrados pelo usuário até então. Esse arquivo ficará salvo em `Android/Download`. Por padrão a aplicação irá realizar a ação de buscar dados assim que finalizar a exportação, mostrando ao usuário que o arquivo foi criado e já pode ser importado.

<h4>💚 Buscar dados</h4>

Ao clicar em buscar dados, a aplicação fará uma varredura pela pasta`Android/Download` em, busca de arquivos de backup e listará os arquivos que encontrar logo abaixo.

✅ Para importar os dados, basta clicar em cima do nome do arquivo que deseja importar e será exibido ao usuário um modal de confirmação da importação, caso prossiga com a importação a aplicação fará a importação e recarregará os dados da sessão.

❌ Para excluir um arquivo de backup basta clicar no ícone em vermelho que aparecerá na listagem ao lado direito do nome do arquivo. A aplicação exibirá um modal de confirmação da exclusão e caso o usuário prossiga a exclusão será executada. Assim que a exclusão for finalizada, a ação de buscar dados será disparada, listando os arquivos novamente, mostrando ao usuário que o arquivo foi excluído.

<h2 id="tecs">🛠 Tecnologias utilizadas na aplicação</h2>

<ul>
 <li>@react-native-picker/picker: ^2.1.0</li>
  <li>@react-navigation/native: ^6.0.2</li>
  <li>@react-navigation/native-stack: ^6.1.0</li>
  <li>@types/react-native-autocomplete-input: ^5.0.0</li>
  <li>@types/react-native-snap-carousel: ^3.8.4</li>
  <li>@types/react-native-svg-charts: ^5.0.9</li>
  <li>date-fns: ^2.23.0</li>
  <li>jest-coverage-badges: ^1.1.2</li>
  <li>react: 17.0.2</li>
  <li>react-native: 0.65.1</li>
  <li>react-native-autocomplete-input: ^5.0.2</li>
  <li>react-native-draggable: ^3.3.0</li>
  <li>react-native-fs: ^2.18.0</li>
  <li>react-native-linear-gradient: ^2.5.6</li>
  <li>react-native-masked-text: ^1.13.0</li>
  <li>react-native-picker-select: ^8.0.4</li>
  <li>react-native-safe-area-context: ^3.3.2</li>
  <li>react-native-screens: ^3.7.1</li>
  <li>react-native-snap-carousel: ^3.9.1</li>
  <li>react-native-splash-screen: ^3.2.0</li>
  <li>react-native-svg-charts: ^5.4.0</li>
  <li>react-native-svg: ^12.1.1</li>
  <li>react-native-svg-icon: ^0.10.0</li>
  <li>react-native-toast-message: ^1.6.0</li>
  <li>realm: ^10.8.0</li>
  <li>styled-components: ^5.3.1</li>
</ul>

<h2 id="fim">👷 Considerações finais</h2>

A aplicação é fruto de um estudo e conhecimento acerca de aplicações offline-first. Essa foi minha primeira aplicação utilizando este conceito aliado ao RealmDB (banco não-relacional offline).

<a href="https://realm.io/">🗄 RealmDB</a>

Pude aprender muito sobre o Realm e sobre o conceito com a construção dessa aplicação, além de construir uma aplicação que vai me auxiliar no dia-a-dia à manter as contas em dia e o controle total de meus ganhos e gastos.

<h2 id="creditos">👨‍🎓 Créditos</h2>

Durante o desenvolvimento do protótipo do projeto e da aplicação como um todo, utilizei imagens, ícones, Svgs e vetores encontrados na internet disponíveis gratuitamente pelos sites:

<ul>
  <li><a href="https://www.figma.com/file/bs8jWz3okbV4vR3G814Fpr/Figma">Icones utilizados - Figma</a></li>
  <li><a href="https://www.flaticon.com/br/">Icones utilizados - Flaticon</a></li>
  <li><a href="https://br.freepik.com/vetores/negocio">Negócio vetor criado por vectorpouch - br.freepik.com</a></li>
  <li><a href="https://www.freepik.com/vectors/gold">Gold vector created by macrovector - www.freepik.com</a></li>
  <li><a href="https://www.freepik.com/vectors/business">Business vector created by pikisuperstar - www.freepik.com</a></li>  
</ul>

<a href="#start">👆 Voltar ao Sumário</a>

### Autor

---

<a href="https://github.com/Jordaobm" target="_blank">
 <img src="https://avatars.githubusercontent.com/u/70074016?v=4" width="100px;" alt="Jordão"/>
 <br />
 <sub><b>Jordão Beghetto Massariol</b></sub></a> <a href="https://github.com/Jordaobm" title="Jordão">🚀</a>

Feito com ❤️ por Jordão Beghetto Massariol 👋🏽 Entre em contato!

<a href="https://www.linkedin.com/in/jord%C3%A3o-beghetto-massariol-9a9800105/"><img alt="Linkedin" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
