import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { IExpense, IExpenseCategory, IIncome } from '../../dtos/types';
import { useMyExpenses } from '../../hooks/MyExpense';
import { addSalary, cash } from '../../utils/images';
import Button from '../Button';
import {
  Container,
  BackgroundIcon,
  IconImg,
  ValueAndDate,
  Name,
  Date,
  Value,
  IconArrowDown,
  Expense,
  ExpenseContainer,
  Content,
  BackgroundIconExpense,
  IconImgExpense,
  ButtonAddCategory,
  ExpenseValueInput,
  BackgroundIconIncome,
  Income,
  IncomeValueInput,
} from './styles';

interface CardProps {
  category?: IExpenseCategory;
  expense?: IExpense;
  income?: IIncome;
}

const Card: React.FC<CardProps> = ({ expense, income, category }) => {
  const navigation = useNavigation();
  const {
    setDetailsCategoryState,
    expenses,
    setCategory_id,
    setEditExpenseState,
    setEditIncomeState,
  } = useMyExpenses();
  const handleDetailsCategory = useCallback(
    (category: IExpenseCategory) => {
      navigation.navigate('DetailsCategory');
      setDetailsCategoryState(category);
    },
    [navigation, setDetailsCategoryState],
  );
  const handleNextPageCategory = useCallback(
    (route: string, category_id: number) => {
      navigation.navigate(route);
      setCategory_id(category_id);
    },
    [navigation, setCategory_id],
  );

  const handleEditExpense = useCallback(
    (expense: IExpense) => {
      navigation.navigate('EditExpense');
      setEditExpenseState(expense);
    },
    [navigation, setEditExpenseState],
  );
  const handleEditIncome = useCallback(
    (income: IIncome) => {
      navigation.navigate('EditIncome');
      setEditIncomeState(income);
    },
    [navigation, setEditIncomeState],
  );

  if (expense) {
    return (
      <Expense onPress={() => handleEditExpense(expense)}>
        <BackgroundIconExpense color={expense.color}>
          <IconImgExpense source={expense.icon} />
        </BackgroundIconExpense>
        <Name>{expense.NameExpense}</Name>
        <Value>
          <ExpenseValueInput
            editable={false}
            type={'money'}
            value={expense.ValueExpense}
          />
          <Date>{expense.DateExpense}</Date>
        </Value>
      </Expense>
    );
  }

  if (income) {
    return (
      <Income onPress={() => handleEditIncome(income)}>
        <BackgroundIconIncome>
          <IconImgExpense source={cash} />
        </BackgroundIconIncome>
        <Name>{income.NameIncome}</Name>
        <Value>
          <IncomeValueInput
            editable={false}
            type={'money'}
            value={income.ValueIncome}
          />
          <Date>{income.DateIncome}</Date>
        </Value>
      </Income>
    );
  }
  if (category) {
    return (
      <Container>
        <Content onPress={() => handleDetailsCategory(category)}>
          <BackgroundIcon color={category.color}>
            <IconImg source={category.icon} />
          </BackgroundIcon>
          <Name>{category.name}</Name>
          <IconArrowDown name="chevron-down" size={20} />
        </Content>
        <ExpenseContainer>
          {expenses
            .filter((expense) => expense.idExpenseCategory === category.id)
            .map((expense) => (
              <Expense
                key={expense.id}
                onPress={() => handleEditExpense(expense)}
              >
                <BackgroundIconExpense color={expense.color}>
                  <IconImgExpense source={expense.icon} />
                </BackgroundIconExpense>
                <Name>{expense.NameExpense}</Name>
                <Value>
                  <ExpenseValueInput
                    editable={false}
                    type={'money'}
                    value={expense.ValueExpense}
                  />
                  <Date>{expense.DateExpense}</Date>
                </Value>
              </Expense>
            ))}
        </ExpenseContainer>
        <ButtonAddCategory>
          <Button
            colors={{ finished: '#E7F5ED', initial: '#E7F5ED' }}
            icon="plus"
            onPress={() => handleNextPageCategory('ListExpenses', category.id)}
          >
            Adicionar despesa
          </Button>
        </ButtonAddCategory>
      </Container>
    );
  }

  return <Text>Card undefined</Text>;
};

export default Card;
