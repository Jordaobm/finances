import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  Container,
  Content,
  IconFlag,
  ImageWraper,
  TextTitle,
  InputValueSalary,
  ArrowDown,
  HeaderImage,
  TitleExpenseCategory,
  ContentxpenseCategory,
  Goals,
  Goal,
  GoalIconWraper,
  GoalText,
  Category,
  IconCategory,
  CategoryName,
  IconArrow,
  Categories,
  IconCategoryWraper,
  IconWraper,
  IconArrowWraper,
  Name,
  CategoryTitle,
  ButtonAddCategory,
  IconAddExpense,
  Next,
  AddCategory,
  AddCategoryButtonWraper,
  ActionsContent,
  ActionsText,
  Actions,
  ButtonContent,
  ButtonText,
  Gradient,
  Salary,
  InputContainer,
  ExpenseValue,
  Value,
  History,
  HistoryTitle,
  ExpenseContent,
  ExpenseValueInput,
  ExpenseContainer,
  ExpenseIconWraper,
  ExpenseIcon,
  ExpenseName,
  ExpenseIconContainer,
} from './styles';
import Header from '../../components/Header';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import addSalary from '../../assets/addsalary.png';
import removeSalaty from '../../assets/removesalary.png';
import arrowDown from '../../assets/arrowDown.png';
import ArrendamentosEdividendos from '../../assets/ArrendamentosEdividendos.png';
import basicServices from '../../assets/basicServices.png';
import creditosESeguros from '../../assets/creditosESeguros.png';
import cartoesDeCredito from '../../assets/cartoesDeCredito.png';
import other from '../../assets/other.png';
import pencil from '../../assets/pencil.png';
import gas from '../../assets/gas.png';
import luz from '../../assets/luz.png';
import agua from '../../assets/agua.png';
import cash from '../../assets/cash.png';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Graphic } from '../Home/styles';
import { useMyExpenses } from '../../hooks/MyExpense';
import { IExpense, IExpenseCategory } from '../../dtos/types';
import Input from '../../components/Input';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { exp } from 'react-native-reanimated';

const YourSalary: React.FC = () => {
  const navigation = useNavigation();
  const { setSalary } = useMyExpenses();

  const [inputCoin, setInputCoin] = useState('0');
  const [salaryValue, setSalaryValue] = useState(0);

  const handleConfirmSalaryValue = useCallback((salaryValue: number) => {
    setSalary(salaryValue);
    navigation.navigate('MyExpenses');
  }, []);

  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: 30 }}>
        <Content>
          <ImageWraper colors={['#67E799', '#4AD07E']} start={{ x: 0.9, y: 0 }}>
            <IconFlag source={addSalary} />
          </ImageWraper>
          <TextTitle>Estabeleça seu salário ou outra renda</TextTitle>
          <InputValueSalary
            type={'money'}
            value={inputCoin}
            maxLength={18}
            onChangeText={(value) => {
              setInputCoin(value);
              value = value.replace('R$', '');
              value = value.replace('.', '');
              value = value.replace(',', '.');
              setSalaryValue(Number(value));
            }}
          />
        </Content>
        <Button
          onPress={() => handleConfirmSalaryValue(salaryValue)}
          iconColor="white"
          textColor="white"
          icon="arrow-right"
          colors={{ initial: '#4AD07E', finished: '#67E799' }}
        >
          Continuar
        </Button>
      </ScrollView>
    </Container>
  );
};

const YourSpending: React.FC = () => {
  const { categories, setCategory_id, expenses } = useMyExpenses();
  const navigation = useNavigation();
  const handleNextPageCategory = useCallback(
    (route: string, category_id: number) => {
      navigation.navigate(route);
      setCategory_id(category_id);
    },
    [navigation, setCategory_id],
  );

  const handleNextPage = useCallback(
    (route: string) => {
      navigation.navigate(route);
    },
    [navigation],
  );

  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <ScrollView>
        <Content>
          <ImageWraper colors={['#F97474', '#E15050']} start={{ x: 0.9, y: 0 }}>
            <IconFlag source={removeSalaty} />
          </ImageWraper>
          <TextTitle>Insira suas despesas constantes </TextTitle>
        </Content>

        {categories &&
          categories.map((category) => (
            <Categories key={categories.indexOf(category)}>
              <Category>
                <CategoryTitle>
                  <IconWraper>
                    <IconCategoryWraper color={category.color}>
                      <IconCategory source={category.icon} />
                    </IconCategoryWraper>
                  </IconWraper>
                  <Name>
                    <CategoryName>{category.name}</CategoryName>
                  </Name>
                  <IconArrowWraper>
                    <IconArrow name="chevron-down" size={20} />
                  </IconArrowWraper>
                </CategoryTitle>

                {expenses
                  .filter(
                    (expense) => expense.idExpenseCategory === category.id,
                  )
                  .map((expense) => (
                    <ExpenseContainer key={expense.id}>
                      <ExpenseIconContainer>
                        <ExpenseIconWraper color={expense.color}>
                          <ExpenseIcon source={expense.icon} />
                        </ExpenseIconWraper>
                      </ExpenseIconContainer>
                      <ExpenseName>{expense.name}</ExpenseName>
                      <ExpenseValue>
                        <ExpenseValueInput
                          editable={false}
                          type={'money'}
                          value={expense.ValueExpense}
                        />
                      </ExpenseValue>
                    </ExpenseContainer>
                  ))}

                <ButtonAddCategory>
                  <Button
                    colors={{ finished: '#E7F5ED', initial: '#E7F5ED' }}
                    icon="plus"
                    onPress={() =>
                      handleNextPageCategory('AddExpense', category.id)
                    }
                  >
                    Adicionar despesa
                  </Button>
                </ButtonAddCategory>
              </Category>
            </Categories>
          ))}

        <AddCategoryButtonWraper>
          <AddCategory>
            <Button
              icon="plus"
              onPress={() => handleNextPage('ExpenseCategory')}
            >
              Criar categoria
            </Button>
          </AddCategory>
        </AddCategoryButtonWraper>
      </ScrollView>

      <Next>
        <Button
          iconColor="white"
          textColor="white"
          icon="arrow-right"
          onPress={() => handleNextPage('MyExpenses')}
          colors={{ initial: '#4AD07E', finished: '#67E799' }}
        >
          Continuar
        </Button>
      </Next>
    </Container>
  );
};

const AddExpense: React.FC = () => {
  const navigation = useNavigation();
  const { setExpenseDetailPageState } = useMyExpenses();
  const handleNavigateExpenseDetailPage = useCallback(
    (color: string, name: string, icon: object) => {
      navigation.navigate('ExpenseDetail');
      setExpenseDetailPageState({ name, color, icon });
    },
    [navigation, setExpenseDetailPageState],
  );

  return (
    <Container>
      <HeaderImage>
        <ArrowDown source={arrowDown} />
      </HeaderImage>
      <ScrollView>
        <ContentxpenseCategory>
          <TitleExpenseCategory>Adicionar uma Despesa</TitleExpenseCategory>

          <Goals>
            <Goal
              style={styles.container}
              onPress={() =>
                handleNavigateExpenseDetailPage(
                  '#F0F7FD',
                  'Personalizado',
                  other,
                )
              }
            >
              <GoalIconWraper color={'#F0F7FD'}>
                <Graphic source={other} />
              </GoalIconWraper>
              <GoalText>Personalizado</GoalText>
              <IconAddExpense source={pencil} />
            </Goal>

            <Goal
              style={styles.container}
              onPress={() =>
                handleNavigateExpenseDetailPage('#FFEFEF', 'Gás', gas)
              }
            >
              <GoalIconWraper color={'#FFEFEF'}>
                <Graphic source={gas} />
              </GoalIconWraper>
              <GoalText>Gás</GoalText>
            </Goal>

            <Goal
              style={styles.container}
              onPress={() =>
                handleNavigateExpenseDetailPage('#FFF6D9', 'Luz', luz)
              }
            >
              <GoalIconWraper color={'#FFF6D9'}>
                <Graphic source={luz} />
              </GoalIconWraper>
              <GoalText>Luz</GoalText>
            </Goal>

            <Goal
              style={styles.container}
              onPress={() =>
                handleNavigateExpenseDetailPage('#E5F4FF', 'Água', agua)
              }
            >
              <GoalIconWraper color={'#E5F4FF'}>
                <Graphic source={agua} />
              </GoalIconWraper>
              <GoalText>Água</GoalText>
            </Goal>
          </Goals>
        </ContentxpenseCategory>
      </ScrollView>
    </Container>
  );
};

const ExpenseDetail: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {
    expenseDetailPageState,
    setExpenses,
    expenses,
    category_id,
  } = useMyExpenses();
  const navigation = useNavigation();
  const handleAddExpense = useCallback(
    (data: IExpense) => {
      const id = new Date().getTime();
      const expense: IExpense = {
        id,
        name: expenseDetailPageState.name,
        color: expenseDetailPageState.color,
        icon: expenseDetailPageState.icon,
        NameExpense: data.NameExpense,
        DescriptionExpense: data.DescriptionExpense,
        ValueExpense: data.ValueExpense,
        idExpenseCategory: category_id,
      };

      setExpenses([...expenses, expense]);
      navigation.navigate('YourSpending');
    },
    [
      expenseDetailPageState.name,
      expenseDetailPageState.color,
      expenseDetailPageState.icon,
      expenses,
      setExpenses,
      navigation,
      category_id,
    ],
  );

  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <Content>
        <ImageWraper
          colors={[expenseDetailPageState.color, expenseDetailPageState.color]}
          start={{ x: 0.9, y: 0 }}
        >
          <IconFlag source={expenseDetailPageState.icon} />
        </ImageWraper>
      </Content>
      <ScrollView contentContainerStyle={{ paddingTop: 40 }}>
        <Form onSubmit={handleAddExpense} ref={formRef}>
          <InputContainer>
            <Input name="NameExpense" placeholder="Nome da despesa" />
            <Input
              name="DescriptionExpense"
              placeholder="Descrição"
              multiline={true}
              numberOfLines={5}
              style={{ textAlignVertical: 'top' }}
            />
            <Input name="ValueExpense" placeholder="Valor" />
          </InputContainer>
          <Button
            onPress={() => {
              formRef.current?.submitForm();
            }}
            iconColor="white"
            textColor="white"
            icon="arrow-right"
            colors={{ initial: '#4AD07E', finished: '#67E799' }}
          >
            Continuar
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
};

const ExpenseCategory: React.FC = () => {
  const navigation = useNavigation();
  const { addCategoryInExpenses } = useMyExpenses();
  const handleselectCategory = useCallback(
    (color: string, name: string, icon: object) => {
      const id = new Date().getTime();
      const category: IExpenseCategory = {
        id,
        color,
        name,
        icon,
      };
      addCategoryInExpenses(category);
      navigation.navigate('YourSpending');
    },
    [addCategoryInExpenses, navigation],
  );

  return (
    <Container>
      <HeaderImage>
        <ArrowDown source={arrowDown} />
      </HeaderImage>
      <ScrollView>
        <ContentxpenseCategory>
          <TitleExpenseCategory>Categoria de despesas</TitleExpenseCategory>

          <Goals>
            <Goal
              onPress={() =>
                handleselectCategory(
                  '#E7F8EE',
                  'Arrendamentos e dividendos',
                  ArrendamentosEdividendos,
                )
              }
              style={styles.container}
            >
              <GoalIconWraper color={'#E7F8EE'}>
                <Graphic source={ArrendamentosEdividendos} />
              </GoalIconWraper>
              <GoalText>Arrendamentos e dividendos </GoalText>
            </Goal>

            <Goal
              onPress={() =>
                handleselectCategory(
                  '#FFEDFA',
                  'Serviços básicos',
                  basicServices,
                )
              }
              style={styles.container}
            >
              <GoalIconWraper color={'#FFEDFA'}>
                <Graphic source={basicServices} />
              </GoalIconWraper>
              <GoalText>Serviços básicos</GoalText>
            </Goal>

            <Goal
              onPress={() =>
                handleselectCategory(
                  '#E5F4FF',
                  'Créditos e Seguros',
                  creditosESeguros,
                )
              }
              style={styles.container}
            >
              <GoalIconWraper color={'#E5F4FF'}>
                <Graphic source={creditosESeguros} />
              </GoalIconWraper>
              <GoalText>Créditos e Seguros</GoalText>
            </Goal>

            <Goal
              onPress={() =>
                handleselectCategory(
                  '#FFE9E3',
                  'Cartões de Crédito',
                  cartoesDeCredito,
                )
              }
              style={styles.container}
            >
              <GoalIconWraper color={'#FFE9E3'}>
                <Graphic source={cartoesDeCredito} />
              </GoalIconWraper>
              <GoalText>Cartões de Crédito</GoalText>
            </Goal>

            <Goal
              onPress={() => handleselectCategory('#F0F7FD', 'Outros', other)}
              style={styles.container}
            >
              <GoalIconWraper color={'#F0F7FD'}>
                <Graphic source={other} />
              </GoalIconWraper>
              <GoalText>Outros</GoalText>
            </Goal>
          </Goals>
        </ContentxpenseCategory>
      </ScrollView>
    </Container>
  );
};

const MyExpenses: React.FC = () => {
  const { salary, expenses, categories, balanceAvailable } = useMyExpenses();
  const navigation = useNavigation();
  const handleNextPage = useCallback(
    (route: string) => {
      navigation.navigate(route);
    },
    [navigation],
  );

  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <ScrollView>
        <Content>
          <ImageWraper colors={['#67E799', '#4AD07E']} start={{ x: 0.9, y: 0 }}>
            <IconFlag source={cash} />
          </ImageWraper>
          <TextTitle>Saldo Disponível</TextTitle>
          <Salary editable={false} type={'money'} value={balanceAvailable()} />
          <ActionsContent>
            <ActionsText>Ações</ActionsText>
            <Actions>
              <Gradient
                colors={['#4AD07E', '#67E799']}
                start={{ x: 0.1, y: 1 }}
              >
                <ButtonContent onPress={() => handleNextPage('YourSalary')}>
                  <ButtonText>Alterar salário</ButtonText>
                </ButtonContent>
              </Gradient>

              <Gradient
                colors={['#EB5757', '#FF6969']}
                start={{ x: 0.1, y: 1 }}
              >
                <ButtonContent onPress={() => handleNextPage('YourSpending')}>
                  <ButtonText>Adicionar despesa</ButtonText>
                </ButtonContent>
              </Gradient>
            </Actions>

            <History>
              <HistoryTitle>Histórico de ações</HistoryTitle>
              <ExpenseContent>
                {categories &&
                  categories.map((category) => (
                    <Categories key={categories.indexOf(category)}>
                      <Category>
                        <CategoryTitle>
                          <IconWraper>
                            <IconCategoryWraper color={category.color}>
                              <IconCategory source={category.icon} />
                            </IconCategoryWraper>
                          </IconWraper>
                          <Name>
                            <CategoryName>{category.name}</CategoryName>
                          </Name>
                          <IconArrowWraper>
                            <IconArrow name="chevron-down" size={20} />
                          </IconArrowWraper>
                        </CategoryTitle>

                        {expenses
                          .filter(
                            (expense) =>
                              expense.idExpenseCategory === category.id,
                          )
                          .map((expense) => (
                            <ExpenseContainer key={expense.id}>
                              <ExpenseIconContainer>
                                <ExpenseIconWraper color={expense.color}>
                                  <ExpenseIcon source={expense.icon} />
                                </ExpenseIconWraper>
                              </ExpenseIconContainer>
                              <ExpenseName>{expense.name}</ExpenseName>
                              <ExpenseValue>
                                <ExpenseValueInput
                                  editable={false}
                                  type={'money'}
                                  value={expense.ValueExpense}
                                />
                              </ExpenseValue>
                            </ExpenseContainer>
                          ))}
                      </Category>
                    </Categories>
                  ))}
              </ExpenseContent>
            </History>
          </ActionsContent>
        </Content>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
  },
});

export {
  MyExpenses,
  YourSpending,
  ExpenseCategory,
  AddExpense,
  YourSalary,
  ExpenseDetail,
};
