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

const ListCategory: React.FC = () => {
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
              <GoalIconWraper color={'#E7F8EE'}>
                <Graphic source={ArrendamentosEdividendos} />
              </GoalIconWraper>
              <GoalText>Arrendamentos e dividendos </GoalText>
            </Goal>

            <Goal
              onPress={() =>
                handleNavigatePageAddCategory(
                  '#FFEDFA',
                  'Serviços básicos',
                  basicServices,
                )
              }
              style={styles.container}
            >
              <GoalIconWraper color={'#FFEDFA'}>
                <Graphic source={basicServices} />
              </GoalIconWraper>
              <GoalText>Serviços básicos</GoalText>
            </Goal>

            <Goal
              onPress={() =>
                handleNavigatePageAddCategory(
                  '#E5F4FF',
                  'Créditos e Seguros',
                  creditosESeguros,
                )
              }
              style={styles.container}
            >
              <GoalIconWraper color={'#E5F4FF'}>
                <Graphic source={creditosESeguros} />
              </GoalIconWraper>
              <GoalText>Créditos e Seguros</GoalText>
            </Goal>

            <Goal
              onPress={() =>
                handleNavigatePageAddCategory(
                  '#FFE9E3',
                  'Cartões de Crédito',
                  cartoesDeCredito,
                )
              }
              style={styles.container}
            >
              <GoalIconWraper color={'#FFE9E3'}>
                <Graphic source={cartoesDeCredito} />
              </GoalIconWraper>
              <GoalText>Cartões de Crédito</GoalText>
            </Goal>

            <Goal
              onPress={() =>
                handleNavigatePageAddCategory('#F0F7FD', 'Outros', other)
              }
              style={styles.container}
            >
              <GoalIconWraper color={'#F0F7FD'}>
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
