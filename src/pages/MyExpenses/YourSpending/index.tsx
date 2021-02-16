import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { useMyExpenses } from '../../../hooks/MyExpense';
import {
  Container,
  Content,
  ImageWraper,
  IconFlag,
  TextTitle,
  ContentCategory,
  AddCategory,
  AddCategoryButtonWraper,
  Next,
  ContainerCategory,
  HistoryText,
  History,
  HistoryInput,
} from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { removeSalaty } from '../../../utils/images';
import Card from '../../../components/Card';
import { getMonthDate } from '../../../utils/format';

interface StateDate {
  dt: string;
}

const YourSpending: React.FC = () => {
  const { categories } = useMyExpenses();
  const navigation = useNavigation();

  const handleNextPage = useCallback(
    (route: string) => {
      navigation.navigate(route);
    },
    [navigation],
  );

  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const MonthYear = `${month}/${year}`;
  const [initalDate, setInitialDate] = useState<StateDate>({ dt: MonthYear });

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
        <History>
          <HistoryText>Ações no mês de: </HistoryText>
          <HistoryInput
            placeholder="data"
            type={'datetime'}
            value={initalDate.dt}
            options={{
              format: 'M/YYYY',
            }}
            onChangeText={(text) => setInitialDate({ dt: text })}
          />
        </History>

        <ContentCategory>
          {categories
            .filter((category) => getMonthDate(category.date) === initalDate.dt)
            .map((category) => (
              <ContainerCategory
                key={categories.findIndex((index) => index.id === category.id)}
              >
                <Card category={category} />
              </ContainerCategory>
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
