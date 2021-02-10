import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useMyExpenses } from '../../../hooks/MyExpense';
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

const ListExpenses: React.FC = () => {
  const navigation = useNavigation();
  const { setExpenseDetailPageState } = useMyExpenses();
  const handleNavigateExpenseDetailPage = useCallback(
    (color: string, name: string, icon: object) => {
      navigation.navigate('AddExpense');
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

const styles = StyleSheet.create({
  container: {
    elevation: 5,
  },
});

export default ListExpenses;
