import React, { useCallback, useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {
  Container,
  SelectedDateInformations,
  ExpenseContainer,
  ExpenseIcon,
  ExpenseIconContainer,
  ExpenseIconWraper,
  ExpenseName,
  ExpenseValue,
  ExpenseValueInput,
  ButtonIncome,
  IncomeIconContainer,
  IncomeIconWraper,
  IncomeName,
  IncomeValue,
  IncomeValueInput,
  IncomeContainer,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { IExpense, IIncome } from '../../dtos/types';
import { useMyExpenses } from '../../hooks/MyExpense';
import { useNavigation } from '@react-navigation/native';
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
import { transformDateStringInDate } from '../../utils/format';
import { format } from 'date-fns';

export const Calendar: React.FC = () => {
  const actualDate = new Date();

  const parsedActualDate = format(actualDate, "dd'/'MM'/'yyyy");

  const {
    setEditExpenseState,
    expenses,
    incomes,
    setEditIncomeState,
  } = useMyExpenses();

  const [data, setData] = useState(parsedActualDate);

  const navigation = useNavigation();

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

  let customDatesStyles: any = [];

  const load = useCallback(() => {
    incomes.map((income) => {
      customDatesStyles.push({
        date: transformDateStringInDate(income.DateIncome),
        style: { backgroundColor: '#4CCC81' },
        textStyle: { color: '#fff' },
      });
    });

    expenses.map((expense) => {
      customDatesStyles.push({
        date: transformDateStringInDate(expense.DateExpense),
        style: { backgroundColor: '#EB5757' },
        textStyle: { color: '#fff' },
      });
    });
  }, [customDatesStyles, expenses, incomes]);

  load();
  return (
    <Container>
      <CalendarPicker
        onDateChange={(data) => setData(data.format('DD/MM/yyyy'))}
        customDatesStyles={customDatesStyles}
        weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
        months={[
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ]}
        textStyle={{
          fontFamily: 'CircularStd-Medium',
          color: '#000',
        }}
        todayBackgroundColor="#5D87A8"
        selectedDayColor="#40AAFF"
        previousComponent={<Icon name="arrow-left" size={20} />}
        previousTitleStyle={{ fontFamily: 'CircularStd-Book' }}
        nextComponent={<Icon name="arrow-right" size={20} />}
        nextTitleStyle={{ fontFamily: 'CircularStd-Book' }}
        selectedDayTextColor="#fff"
        width={330}
        height={330}
      />

      {incomes
        .filter((income) => income.DateIncome === data)
        .map((income) => (
          <ButtonIncome
            onPress={() => handleEditIncome(income)}
            key={income.id}
          >
            <IncomeContainer>
              <IncomeIconContainer>
                <IncomeIconWraper>
                  <ExpenseIcon source={cash} />
                </IncomeIconWraper>
              </IncomeIconContainer>
              <IncomeName>{income.NameIncome}</IncomeName>
              <IncomeValue>
                <IncomeValueInput
                  editable={false}
                  type={'money'}
                  value={income.ValueIncome}
                />
              </IncomeValue>
            </IncomeContainer>
          </ButtonIncome>
        ))}

      {expenses
        .filter((expense) => expense.DateExpense === data)
        .map((expense) => (
          <SelectedDateInformations key={expense.id}>
            <ExpenseContainer onPress={() => handleEditExpense(expense)}>
              <ExpenseIconContainer>
                <ExpenseIconWraper color={expense.color}>
                  <ExpenseIcon source={expense.icon} />
                </ExpenseIconWraper>
              </ExpenseIconContainer>
              <ExpenseName>{expense.NameExpense}</ExpenseName>
              <ExpenseValue>
                <ExpenseValueInput
                  editable={false}
                  type={'money'}
                  value={expense.ValueExpense}
                />
              </ExpenseValue>
            </ExpenseContainer>
          </SelectedDateInformations>
        ))}
    </Container>
  );
};
