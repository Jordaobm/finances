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
import { useAccountScheduling } from '../../hooks/AccountScheduling';
import { cash } from '../../utils/images';

export const SchedulingCalendar: React.FC = () => {
  const { switchState } = useTheme();
  const actualDate = new Date();

  const parsedActualDate = format(actualDate, "dd'/'MM'/'yyyy");

  const { scheduling, schedulingExpenses } = useAccountScheduling();

  const [data, setData] = useState(parsedActualDate);

  const [alreadyLoaded, setAlreadyLoaded] = useState(true);

  let customDatesStyles: any = [];

  const load = useCallback(() => {
    scheduling.map((schedulingIncome) => {
      customDatesStyles.push({
        date: transformDateStringInDate(schedulingIncome.DateIncome),
        style: {
          backgroundColor: `${
            !switchState ? '#4CCC81' : shade(0.5, '#4CCC81')
          }`,
        },
        textStyle: { color: '#fff' },
      });
    });

    schedulingExpenses.map((schedulingExpenses) => {
      customDatesStyles.push({
        date: transformDateStringInDate(schedulingExpenses.DateExpense),
        style: {
          backgroundColor: `${
            !switchState ? '#EB5757' : shade(0.5, '#EB5757')
          }`,
        },
        textStyle: { color: '#fff' },
      });
    });
  }, [customDatesStyles, schedulingExpenses, scheduling, switchState]);

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
        selectedDayTextColor="#fff"
        width={330}
        height={330}
      />

      {alreadyLoaded ? (
        scheduling
          .filter((schedulingIncome) => schedulingIncome.DateIncome === data)
          .map((income) => (
            <Card
              key={income.id}
              income={{
                id: income.id,
                DateIncome: income.DateIncome,
                DescriptionIncome: income.description,
                NameIncome: income.name,
                ValueIncome: 0,
              }}
            />
          ))
      ) : (
        <Card visible={alreadyLoaded} />
      )}

      {alreadyLoaded ? (
        schedulingExpenses
          .filter((schedulingExpense) => schedulingExpense.DateExpense === data)
          .map((expense) => (
            <SelectedDateInformations key={expense.id}>
              <Card
                expense={{
                  id: expense.id,
                  DateExpense: expense.DateExpense,
                  DescriptionExpense: expense.description,
                  NameExpense: expense.name,
                  ValueExpense: 0,
                  color: expense.color,
                  icon: expense.icon,
                  idExpenseCategory: 0,
                }}
              />
            </SelectedDateInformations>
          ))
      ) : (
        <Card visible={alreadyLoaded} />
      )}
    </Container>
  );
};
