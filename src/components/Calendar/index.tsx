import React, { useCallback, useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import { Container, SelectedDateInformations } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useMyExpenses } from '../../hooks/MyExpense';
import { transformDateStringInDate } from '../../utils/format';
import { format } from 'date-fns';
import Card from '../Card';
import { useTheme } from '../../hooks/themes';
import { shade } from 'polished';

export const Calendar: React.FC = () => {
  const { switchState } = useTheme();
  const actualDate = new Date();

  const parsedActualDate = format(actualDate, "dd'/'MM'/'yyyy");

  const { expenses, incomes } = useMyExpenses();

  const [data, setData] = useState(parsedActualDate);

  const [alreadyLoaded, setAlreadyLoaded] = useState(true);

  let customDatesStyles: any = [];

  const load = useCallback(() => {
    incomes.map((income) => {
      customDatesStyles.push({
        date: transformDateStringInDate(income.DateIncome),
        style: {
          backgroundColor: `${
            !switchState ? '#4CCC81' : shade(0.5, '#4CCC81')
          }`,
        },
        textStyle: { color: '#fff' },
      });
    });

    expenses.map((expense) => {
      customDatesStyles.push({
        date: transformDateStringInDate(expense.DateExpense),
        style: {
          backgroundColor: `${
            !switchState ? '#EB5757' : shade(0.5, '#EB5757')
          }`,
        },
        textStyle: { color: '#fff' },
      });
    });
  }, [customDatesStyles, expenses, incomes, switchState]);

  load();

  const loadingExpensesAndIncomes = useCallback((data) => {
    setAlreadyLoaded(false);
    setData(data.format('DD/MM/yyyy'));

    setTimeout(function () {
      setAlreadyLoaded(true);
    }, 2000);
  }, []);

  return (
    <Container>
      <CalendarPicker
        onMonthChange={() => setData('')}
        onDateChange={(data) => loadingExpensesAndIncomes(data)}
        customDatesStyles={customDatesStyles}
        weekdays={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']}
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
          color: `${switchState ? '#fff' : '#000'}`,
        }}
        todayBackgroundColor="#5D87A8"
        selectedDayColor="#40AAFF"
        previousComponent={
          <Icon
            name="arrow-left"
            size={20}
            color={`${switchState ? '#fff' : '#000'}`}
          />
        }
        previousTitleStyle={{ fontFamily: 'CircularStd-Book' }}
        nextComponent={
          <Icon
            name="arrow-right"
            size={20}
            color={`${switchState ? '#fff' : '#000'}`}
          />
        }
        nextTitleStyle={{ fontFamily: 'CircularStd-Book' }}
        selectedDayTextColor={`${switchState ? '#fff' : '#000'}`}
        width={330}
        height={330}
      />

      {alreadyLoaded ? (
        incomes
          .filter((income) => income.DateIncome === data)
          .map((income) => <Card key={income.id} income={income} />)
      ) : (
        <Card visible={alreadyLoaded} />
      )}

      {alreadyLoaded ? (
        expenses
          .filter((expense) => expense.DateExpense === data)
          .map((expense) => (
            <SelectedDateInformations key={expense.id}>
              <Card expense={expense} />
            </SelectedDateInformations>
          ))
      ) : (
        <Card visible={alreadyLoaded} />
      )}
    </Container>
  );
};
