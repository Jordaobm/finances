import { useNavigation } from '@react-navigation/native';
import { shade } from 'polished';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import { useTheme } from '../../hooks/themes';
import { SchedulingCalendar } from '../../components/SchedulingCalendar';
import { agendamentoDeContas } from '../../utils/images';
import {
  Container,
  Content,
  ImageWraper,
  IconShedullingAccount,
  SchedulingInformation,
  IncomeSchedules,
  ExpenseSchedules,
  IncomeText,
  IncomeSchedulesQuantity,
  ExpenseText,
  ExpenseSchedulesQuantity,
  Actions,
  ActionsContent,
  ActionsText,
  ButtonContent,
  ButtonText,
  Gradient,
} from './styles';
import { useAccountScheduling } from '../../hooks/AccountScheduling';

const AccountScheduling: React.FC = () => {
  const { switchState } = useTheme();
  const { scheduling, schedulingExpenses } = useAccountScheduling();
  const navigation = useNavigation();
  return (
    <Container>
      <Header>Agendamento de despesas</Header>
      <ScrollView>
        <Content>
          <ImageWraper color={!switchState ? '#E6BF74' : '#333333'}>
            <IconShedullingAccount source={agendamentoDeContas} />
          </ImageWraper>

          <SchedulingInformation>
            <IncomeSchedules>
              <IncomeText>Rendas este mês</IncomeText>
              <IncomeSchedulesQuantity>
                {scheduling ? scheduling.length : 0}
              </IncomeSchedulesQuantity>
            </IncomeSchedules>
            <ExpenseSchedules>
              <ExpenseText>Despesas este mês</ExpenseText>
              <ExpenseSchedulesQuantity>
                {schedulingExpenses ? schedulingExpenses.length : 0}
              </ExpenseSchedulesQuantity>
            </ExpenseSchedules>
          </SchedulingInformation>

          <ActionsContent>
            <ActionsText>Ações</ActionsText>
            <Actions>
              <Gradient
                colors={
                  !switchState
                    ? ['#67E799', '#4AD07E']
                    : [`${shade(0.5, '#67E799')}`, `${shade(0.5, '#4AD07E')}`]
                }
                start={{ x: 0.1, y: 1 }}
              >
                <ButtonContent
                  onPress={() => navigation.navigate('IncomeScheduling')}
                >
                  <ButtonText>Agendar renda</ButtonText>
                </ButtonContent>
              </Gradient>

              <Gradient
                colors={
                  !switchState
                    ? ['#EB5757', '#FF6969']
                    : [`${shade(0.5, '#EB5757')}`, `${shade(0.5, '#FF6969')}`]
                }
                start={{ x: 0.1, y: 1 }}
              >
                <ButtonContent
                  onPress={() => navigation.navigate('ListExpensesScheduling')}
                >
                  <ButtonText>Agendar despesa</ButtonText>
                </ButtonContent>
              </Gradient>
            </Actions>

            <SchedulingCalendar />
          </ActionsContent>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default AccountScheduling;
