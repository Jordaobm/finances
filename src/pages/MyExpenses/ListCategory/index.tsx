import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IExpenseCategory } from '../../../dtos/types';
import { useMyExpenses } from '../../../hooks/MyExpense';
import {
  ArrendamentosEdividendos,
  arrowDown,
  basicServices,
  cartoesDeCredito,
  creditosESeguros,
  other,
} from '../../../utils/images';
import {
  Container,
  HeaderImage,
  ArrowDown,
  ContentxpenseCategory,
  TitleExpenseCategory,
  Goal,
  GoalIconWraper,
  GoalText,
  Goals,
  Graphic,
} from './styles';
import { useTheme } from '../../../hooks/themes';

const ListCategory: React.FC = () => {
  const { switchState } = useTheme();
  const navigation = useNavigation();
  const { setCategoryPage } = useMyExpenses();

  const handleNavigatePageAddCategory = useCallback(
    (color: string, name: string, icon: object) => {
      navigation.navigate('AddCategory');
      const id = new Date().getTime();
      const category: IExpenseCategory = {
        id,
        color,
        name,
        icon,
        date: new Date(),
      };
      setCategoryPage(category);
    },
    [navigation, setCategoryPage],
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
                handleNavigatePageAddCategory(
                  '#E7F8EE',
                  'Arrendamentos e dividendos',
                  ArrendamentosEdividendos,
                )
              }
              style={styles.container}
            >
              <GoalIconWraper color={!switchState ? '#E7F8EE' : '#333333'}>
                <Graphic source={ArrendamentosEdividendos} />
              </GoalIconWraper>
              <GoalText>Arrendamentos e dividendos </GoalText>
            </Goal>

            <Goal
              onPress={() =>
                handleNavigatePageAddCategory(
                  '#FFEDFA',
                  'Servi??os b??sicos',
                  basicServices,
                )
              }
              style={styles.container}
            >
              <GoalIconWraper color={!switchState ? '#FFEDFA' : '#333333'}>
                <Graphic source={basicServices} />
              </GoalIconWraper>
              <GoalText>Servi??os b??sicos</GoalText>
            </Goal>

            <Goal
              onPress={() =>
                handleNavigatePageAddCategory(
                  '#E5F4FF',
                  'Cr??ditos e Seguros',
                  creditosESeguros,
                )
              }
              style={styles.container}
            >
              <GoalIconWraper color={!switchState ? '#E5F4FF' : '#333333'}>
                <Graphic source={creditosESeguros} />
              </GoalIconWraper>
              <GoalText>Cr??ditos e Seguros</GoalText>
            </Goal>

            <Goal
              onPress={() =>
                handleNavigatePageAddCategory(
                  '#FFE9E3',
                  'Cart??es de Cr??dito',
                  cartoesDeCredito,
                )
              }
              style={styles.container}
            >
              <GoalIconWraper color={!switchState ? '#FFE9E3' : '#333333'}>
                <Graphic source={cartoesDeCredito} />
              </GoalIconWraper>
              <GoalText>Cart??es de Cr??dito</GoalText>
            </Goal>

            <Goal
              onPress={() =>
                handleNavigatePageAddCategory('#F0F7FD', 'Outros', other)
              }
              style={styles.container}
            >
              <GoalIconWraper color={!switchState ? '#F0F7FD' : '#333333'}>
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

const styles = StyleSheet.create({
  container: {
    elevation: 5,
  },
});

export default ListCategory;
