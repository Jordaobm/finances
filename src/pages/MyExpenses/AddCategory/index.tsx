import { parse } from '@babel/core';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns/esm';
import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import { useMyExpenses } from '../../../hooks/MyExpense';
import { useTheme } from '../../../hooks/themes';
import { cartoesDeCredito } from '../../../utils/images';
import {
  Container,
  Content,
  ContentIcon,
  IconBackground,
  IconCategory,
  InputDate,
  ContainerInput,
  Description,
  Finances,
  NameTitle,
} from './styles';

interface inputDateValueData {
  dt: string;
}

const AddCategory: React.FC = () => {
  const { switchState } = useTheme();
  const navigation = useNavigation();

  const { categoryPage, addCategoryInExpenses } = useMyExpenses();

  const actualDate = new Date();

  const parsed = format(actualDate, "MM'/'yyyy");

  const [inputDateValue, setInputDateValue] = useState<inputDateValueData>({
    dt: parsed,
  });

  const handleAddCategory = useCallback(() => {
    if (inputDateValue.dt === '') {
      Alert.alert(
        'Erro',
        'Preencha um mês e um ano válido para sua categoria de despesas',
      );
      return;
    }
    const month = Number(inputDateValue.dt.split('/')[0]);
    const year = Number(inputDateValue.dt.split('/')[1]);
    const date = new Date(year, month - 1, actualDate.getDate());
    addCategoryInExpenses({
      id: categoryPage.id,
      name: categoryPage.name,
      color: categoryPage.color,
      icon: categoryPage.icon,
      date: date,
    });
    navigation.navigate('YourSpending');
  }, [
    actualDate,
    inputDateValue.dt,
    addCategoryInExpenses,
    categoryPage.id,
    categoryPage.name,
    categoryPage.color,
    categoryPage.icon,
    navigation,
  ]);

  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <Content>
        <ContentIcon>
          <IconBackground color={!switchState ? categoryPage.color : '#333333'}>
            <IconCategory source={categoryPage.icon} />
          </IconBackground>
        </ContentIcon>
        <NameTitle>{categoryPage.name}</NameTitle>

        <ContainerInput>
          <InputDate
            value={inputDateValue.dt}
            placeholder="Mês e Ano"
            type={'datetime'}
            options={{
              format: 'MM/YYYY',
            }}
            onChangeText={(text) => {
              setInputDateValue({ dt: text });
            }}
          />
        </ContainerInput>
        <Description>
          Selecione um mês para a categoria em questão. Isso ajudará o
          <Finances> finances </Finances>à mostrar em suas despesas apenas
          aquelas do mês em que você se encontra, evitando a poluição visual.
        </Description>
        <Button
          onPress={handleAddCategory}
          iconColor="white"
          textColor="white"
          icon="arrow-right"
          colors={{ initial: '#4AD07E', finished: '#67E799' }}
        >
          Continuar
        </Button>
      </Content>
    </Container>
  );
};
export default AddCategory;
