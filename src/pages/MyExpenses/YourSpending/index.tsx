import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { IExpense, IExpenseCategory } from '../../../dtos/types';
import { useMyExpenses } from '../../../hooks/MyExpense';
import {
  Container,
  Content,
  ImageWraper,
  IconFlag,
  TextTitle,
  Category,
  ContentCategory,
  Categories,
  CategoryTitle,
  IconCategoryWraper,
  IconArrowWraper,
  IconWraper,
  Name,
  IconCategory,
  CategoryName,
  IconArrow,
  ButtonAlterSalary,
  ExpenseContainer,
  ExpenseIcon,
  ExpenseIconContainer,
  ExpenseIconWraper,
  ExpenseName,
  ExpenseValue,
  Value,
  ButtonAddCategory,
  AddCategory,
  AddCategoryButtonWraper,
  Next,
  ExpenseValueInput,
} from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { removeSalaty } from '../../../utils/images';

const YourSpending: React.FC = () => {
  const {
    categories,
    setCategory_id,
    expenses,
    setEditExpenseState,
    setDetailsCategoryState,
  } = useMyExpenses();
  const navigation = useNavigation();

  const handleNextPageCategory = useCallback(
    (route: string, category_id: number) => {
      navigation.navigate(route);
      setCategory_id(category_id);
    },
    [navigation, setCategory_id],
  );

  const handleEditExpense = useCallback(
    (expense: IExpense) => {
      navigation.navigate('EditExpense');
      setEditExpenseState(expense);
    },
    [navigation, setEditExpenseState],
  );

  const handleNextPage = useCallback(
    (route: string) => {
      navigation.navigate(route);
    },
    [navigation],
  );

  const handleDetailsCategory = useCallback(
    (category: IExpenseCategory) => {
      navigation.navigate('DetailsCategory');
      setDetailsCategoryState(category);
    },
    [navigation, setDetailsCategoryState],
  );

  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <ScrollView>
        <Content>
          <ImageWraper colors={['#F97474', '#E15050']} start={{ x: 0.9, y: 0 }}>
            <IconFlag source={removeSalaty} />
          </ImageWraper>
          <TextTitle>Insira suas despesas </TextTitle>
        </Content>

        <ContentCategory>
          {categories &&
            categories.map((category) => (
              <Categories key={categories.indexOf(category)}>
                <Category>
                  <CategoryTitle
                    onPress={() => handleDetailsCategory(category)}
                  >
                    <IconWraper>
                      <IconCategoryWraper color={category.color}>
                        <IconCategory source={category.icon} />
                      </IconCategoryWraper>
                    </IconWraper>
                    <Name>
                      <CategoryName>{category.name}</CategoryName>
                    </Name>
                    <IconArrowWraper>
                      <IconArrow name="chevron-down" size={20} />
                    </IconArrowWraper>
                  </CategoryTitle>

                  {expenses
                    .filter(
                      (expense) => expense.idExpenseCategory === category.id,
                    )
                    .map((expense) => (
                      <ExpenseContainer
                        key={expense.id}
                        onPress={() => handleEditExpense(expense)}
                      >
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
                    ))}

                  <ButtonAddCategory>
                    <Button
                      colors={{ finished: '#E7F5ED', initial: '#E7F5ED' }}
                      icon="plus"
                      onPress={() =>
                        handleNextPageCategory('ListExpenses', category.id)
                      }
                    >
                      Adicionar despesa
                    </Button>
                  </ButtonAddCategory>
                </Category>
              </Categories>
            ))}
        </ContentCategory>
        <AddCategoryButtonWraper>
          <AddCategory>
            <Button icon="plus" onPress={() => handleNextPage('ListCategory')}>
              Criar categoria
            </Button>
          </AddCategory>
        </AddCategoryButtonWraper>
      </ScrollView>

      <Next>
        <Button
          iconColor="white"
          textColor="white"
          icon="arrow-right"
          onPress={() => handleNextPage('MyExpenses')}
          colors={{ initial: '#4AD07E', finished: '#67E799' }}
        >
          Continuar
        </Button>
      </Next>
    </Container>
  );
};

export default YourSpending;
