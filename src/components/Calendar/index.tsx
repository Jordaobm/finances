import React, { useCallback, useEffect, useState } from 'react';
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
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { IExpense } from '../../dtos/types';
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
import {
  transformDateInString,
  transformDateStringInDate,
} from '../../utils/format';

export const Calendar: React.FC = () => {
  const { setEditExpenseState, expenses } = useMyExpenses();
  const navigation = useNavigation();

  const [findExpensesDayState, setFindExpensesDayState] = useState<IExpense[]>(
    [],
  );

  const handleEditExpense = useCallback(
    (expense: IExpense) => {
      navigation.navigate('EditExpense');
      setEditExpenseState(expense);
    },
    [navigation, setEditExpenseState],
  );

  const showMeWhatsOnDate = useCallback(
    (data: string) => {
      const findExpensesDay = expenses.filter(
        (expense) => expense.DateExpense === data,
      );

      if (findExpensesDay) {
        setFindExpensesDayState(findExpensesDay);
      }
    },
    [expenses],
  );

  let customDatesStyles: any = [];

  const load = useCallback(() => {
    expenses.map((expense) => {
      customDatesStyles.push({
        date: transformDateStringInDate(expense.DateExpense),
        style: { backgroundColor: '#EB5757' },
        textStyle: { color: '#fff' },
      });
    });
  }, [customDatesStyles, expenses]);

  load();

  // let customDatesStyles = [
  //   {
  //     date: new Date(2021, 1, 15),
  //     style: { backgroundColor: '#EB5757' },
  //     textStyle: { color: '#fff' },
  //   },
  //   {
  //     date: new Date(2021, 1, 11),
  //     style: { backgroundColor: '#4CCC81' },
  //     textStyle: { color: '#fff' },
  //   },
  // ];
  return (
    <Container>
      <CalendarPicker
        onDateChange={(data) => showMeWhatsOnDate(data.format('DD/MM/yyyy'))}
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
        selectedDayColor="#8E35FF"
        previousComponent={<Icon name="arrow-left" size={20} />}
        previousTitleStyle={{ fontFamily: 'CircularStd-Book' }}
        nextComponent={<Icon name="arrow-right" size={20} />}
        nextTitleStyle={{ fontFamily: 'CircularStd-Book' }}
        selectedDayTextColor="#fff"
        width={330}
        height={350}
      />

      {findExpensesDayState &&
        findExpensesDayState.map((expense) => (
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
