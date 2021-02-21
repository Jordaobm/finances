import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useAccountScheduling } from '../../../hooks/AccountScheduling';
import { useMyExpenses } from '../../../hooks/MyExpense';
import { useTheme } from '../../../hooks/themes';
import {
  agua,
  arrowDown,
  gas,
  luz,
  other,
  pencil,
} from '../../../utils/images';
import {
  Container,
  ContentxpenseCategory,
  HeaderImage,
  TitleExpenseCategory,
  ArrowDown,
  Goal,
  GoalIconWraper,
  GoalText,
  Goals,
  IconAddExpense,
  Graphic,
} from './styles';

const ListExpensesScheduling: React.FC = () => {
  const { switchState } = useTheme();
  const navigation = useNavigation();
  const { setExpensePage } = useAccountScheduling();
  const handleNavigateExpenseDetailPage = useCallback(
    (color: string, name: string, icon: object) => {
      navigation.navigate('ExpenseScheduling');
      setExpensePage({ name, color, icon });
    },
    [navigation, setExpensePage],
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
              <GoalIconWraper color={!switchState ? '#F0F7FD' : '#333333'}>
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
              <GoalIconWraper color={!switchState ? '#FFEFEF' : '#333333'}>
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
              <GoalIconWraper color={!switchState ? '#FFF6D9' : '#333333'}>
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
              <GoalIconWraper color={!switchState ? '#E5F4FF' : '#333333'}>
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

const styles = StyleSheet.create({
  container: {
    elevation: 5,
  },
});

export default ListExpensesScheduling;
