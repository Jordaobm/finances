import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import Header from '../../../components/Header';
import { IExpense, IExpenseCategory } from '../../../dtos/types';
import { useMyExpenses } from '../../../hooks/MyExpense';
import Button from '../../../components/Button';
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
  Container,
  Category,
  CategoryTitle,
  ButtonAddCategory,
  CategoryName,
  IconArrow,
  IconArrowWraper,
  IconCategory,
  IconCategoryWraper,
  IconWraper,
  Name,
  ExpenseContainer,
  ExpenseIcon,
  ExpenseIconContainer,
  ExpenseIconWraper,
  ExpenseName,
  ExpenseValue,
  ExpenseValueInput,
  ContentCategory,
  ActionsEdit,
  ButtonContent,
  ButtonText,
  Gradient,
} from './styles';
import { ContainerCategory } from '../YourSpending/styles';
import Card from '../../../components/Card';
import { ScrollView } from 'react-native-gesture-handler';

const DetailsCategory: React.FC = () => {
  const navigation = useNavigation();
  const {
    setEditExpenseState,
    expenses,
    detailsCategoryState,
    setCategory_id,
    deleteCategory,
  } = useMyExpenses();

  const handleEditExpense = useCallback(
    (expense: IExpense) => {
      navigation.navigate('EditExpense');
      setEditExpenseState(expense);
    },
    [navigation, setEditExpenseState],
  );

  const handleNextPageCategory = useCallback(
    (route: string, category_id: number) => {
      navigation.navigate(route);
      setCategory_id(category_id);
    },
    [navigation, setCategory_id],
  );

  const handleDeleteCategory = useCallback(
    (category: IExpenseCategory) => {
      navigation.navigate('MyExpenses');
      deleteCategory(category);
    },
    [navigation, deleteCategory],
  );
  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <ScrollView>
        <ContentCategory>
          <ContainerCategory>
            <Card category={detailsCategoryState} />
          </ContainerCategory>
        </ContentCategory>
      </ScrollView>
      <ActionsEdit>
        <Gradient colors={['#4AD07E', '#67E799']} start={{ x: 0.1, y: 1 }}>
          <ButtonContent
            onPress={() => {
              navigation.navigate('MyExpenses');
            }}
          >
            <ButtonText>Concluir</ButtonText>
          </ButtonContent>
        </Gradient>

        <Gradient colors={['#EB5757', '#FF6969']} start={{ x: 0.1, y: 1 }}>
          <ButtonContent
            onPress={() => handleDeleteCategory(detailsCategoryState)}
          >
            <ButtonText>Deletar</ButtonText>
          </ButtonContent>
        </Gradient>
      </ActionsEdit>
    </Container>
  );
};
export default DetailsCategory;
