import React, { useCallback } from 'react';
import {
  Container,
  Content,
  IconFlag,
  ImageWraper,
  TextTitle,
  ActionsContent,
  ActionsText,
  Actions,
  ButtonContent,
  ButtonText,
  Gradient,
  Salary,
  ButtonAlterSalary,
  SalaryNegative,
  Negative,
  NegativeIcon,
} from './styles';
import Header from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import { useMyExpenses } from '../../hooks/MyExpense';
import { useNavigation } from '@react-navigation/native';
import { cash } from '../../utils/images';
import { useTheme } from '../../hooks/themes';
import { shade } from 'polished';
import { Calendar } from '../../components/Calendar';

const MyExpenses: React.FC = () => {
  const { balanceAvailable } = useMyExpenses();
  const { switchState } = useTheme();
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
          <ButtonAlterSalary onPress={() => handleNextPage('MyInitialBalance')}>
            <ImageWraper
              colors={
                !switchState ? ['#67E799', '#4AD07E'] : ['#4d4d4d', '#333333']
              }
              start={{ x: 0.9, y: 0 }}
            >
              <IconFlag source={cash} />
            </ImageWraper>
          </ButtonAlterSalary>

          <TextTitle>Saldo Disponível</TextTitle>
          {balanceAvailable() >= 0 ? (
            <Salary
              editable={false}
              type={'money'}
              value={balanceAvailable()}
            />
          ) : (
            <Negative>
              <NegativeIcon>-</NegativeIcon>
              <SalaryNegative
                editable={false}
                type={'money'}
                value={balanceAvailable()}
              />
            </Negative>
          )}

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
                <ButtonContent onPress={() => handleNextPage('AddIncome')}>
                  <ButtonText>Adicionar renda</ButtonText>
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
                <ButtonContent onPress={() => handleNextPage('YourSpending')}>
                  <ButtonText>Adicionar despesa</ButtonText>
                </ButtonContent>
              </Gradient>
            </Actions>

            <Calendar />
          </ActionsContent>
        </Content>
      </ScrollView>
    </Container>
  );
};

export { MyExpenses };
