import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { Alert } from 'react-native';
import { IExpense } from '../../../dtos/types';
import { useMyExpenses } from '../../../hooks/MyExpense';
import {
  Container,
  Content,
  IconFlag,
  ImageWraper,
  InputContainer,
  InputDate,
  InputValue,
  ValueAndDate,
} from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { ScrollView } from 'react-native-gesture-handler';
import { Form } from '@unform/mobile';
import { useTheme } from '../../../hooks/themes';

const AddExpense: React.FC = () => {
  const { switchState } = useTheme();
  const formRef = useRef<FormHandles>(null);
  const {
    expenseDetailPageState,
    setExpenses,
    expenses,
    category_id,
  } = useMyExpenses();
  const navigation = useNavigation();
  const handleAddExpense = useCallback(
    (data: IExpense) => {
      if (
        data.NameExpense === '' ||
        data.ValueExpense === '' ||
        data.DateExpense === ''
      ) {
        Alert.alert(
          'Preencha todos os campos',
          'Preencha um nome para sua despesa, um valor e uma data válida',
        );
        return;
      }

      const id = new Date().getTime();
      const expense: IExpense = {
        id,
        name: expenseDetailPageState.name,
        color: expenseDetailPageState.color,
        icon: expenseDetailPageState.icon,
        NameExpense: data.NameExpense,
        DescriptionExpense: data.DescriptionExpense,
        ValueExpense: data.ValueExpense,
        idExpenseCategory: category_id,
        DateExpense: data.DateExpense,
      };

      setExpenses([...expenses, expense]);
      navigation.navigate('YourSpending');
    },
    [
      expenseDetailPageState.name,
      expenseDetailPageState.color,
      expenseDetailPageState.icon,
      expenses,
      setExpenses,
      navigation,
      category_id,
    ],
  );

  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <Content>
        <ImageWraper
          colors={
            !switchState
              ? [expenseDetailPageState.color, expenseDetailPageState.color]
              : ['#333333', '#333333']
          }
          start={{ x: 0.9, y: 0 }}
        >
          <IconFlag source={expenseDetailPageState.icon} />
        </ImageWraper>
      </Content>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 40,
        }}
      >
        <Form onSubmit={handleAddExpense} ref={formRef}>
          <InputContainer>
            <Input name="NameExpense" placeholder="Nome da despesa" />
            <Input
              name="DescriptionExpense"
              placeholder="Descrição"
              multiline={true}
              numberOfLines={5}
              style={{ textAlignVertical: 'top' }}
            />
            <ValueAndDate>
              <InputValue>
                <Input name="ValueExpense" placeholder="Valor" />
              </InputValue>
              <InputDate>
                <Input name="DateExpense" placeholder="Data da despesa" />
              </InputDate>
            </ValueAndDate>
          </InputContainer>
          <Button
            onPress={() => {
              formRef.current?.submitForm();
            }}
            iconColor="white"
            textColor="white"
            icon="arrow-right"
            colors={{ initial: '#4AD07E', finished: '#67E799' }}
          >
            Continuar
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default AddExpense;
