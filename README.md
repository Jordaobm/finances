# Finances 

Finances é um app desenvolvido para Android com React-Native com objetivo de aperfeiçoar minhas habilidades em React e em algumas libs. Nessa aplicação uso conceitos de componentização, gerenciamento de estados com ContextAPI do React e seus ReactHooks para controlar suas finanças.

# 💡 Ideia

Em finances você pode controlar suas finanças pessoais estipulando saldos, adicionando, editando e removendo rendas e despesas, tendo um feedback visual das coisas que há para fazer. A primeira funcionalidade de finances é o **controle de minhas despesas** que tem como objetivo organizar as despesas do usuário em categorias e mostrá-las em um calendário mensal, afim de cientificar o usuário das rendas, despesas e saldos que ele possui.

### Ferramentas e bibliotecas utilizadas no projeto:

- react-native (framework de desenvolvimento)
- @react-native-async-storage/async-storage(banco sqlite local)
- @react-navigation/native e @react-navigation/stack (navegação entre páginas)
- @unform/core e @unform/mobile (formulários)
- react-native-linear-gradient (gradiente de cores para botões)
- react-native-masked-text (máscara para input de tipo monetário e datas)
- react-native-splash-screen (splashscreen em produção)
- react-native-vector-icons (icones)
- styled-components (estilização)
- react-native-shimmer-placeholder (animação de placeholder)
- react-native-calendar-picker (calendário na pagina Home page de controle de despesas)

### Demais ferramentas e sites que auxiliaram na construção da UI:

- Figma(UI design)

## Funcionalidades:

- [x]  Poder inserir um saldo disponível
- [x]  Poder criar novas despesas
- [x]  Editar despesas
- [x]  Deletar despesas
- [x]  Poder criar novas rendas
- [x]  Editar rendas
- [x]  Deletar rendas
- [x]  Poder agrupar as despesas em grupos, facilitando a visualização do usuário;

 

# Refatorando código

- [x]  Separar os diversos componentes que estão dentro de MyExpenses
- [x]  Espaçar mais o botão "Criar categoria" na página de YourExpenses
- [x]  Criar componentes de rendas, despesas e diversos itens que se repetem em tela
- [ ]  Otimizar o context afim de reduzir o numero de renderizações;
- [ ]  Separar as funcionalidades get e set dos contextos, fazendo com que sejam chamadas ainda na splashscreen da aplicação.

# Coisas à fazer:

- [x]  Implementar o modo dark e light
- [ ]  Implementar notificação quando for dia de pagamento de contas.
- [ ]  Implementar os testes automatizados