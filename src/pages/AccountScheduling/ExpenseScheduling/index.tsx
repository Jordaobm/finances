import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { Alert } from 'react-native';
import { IExpenseScheduling } from '../../../dtos/types';
import {
  Container,
  Content,
  IconFlag,
  ImageWraper,
  InputContainer,
  ValueAndDate,
} from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { ScrollView } from 'react-native-gesture-handler';
import { Form } from '@unform/mobile';
import { useTheme } from '../../../hooks/themes';
import { useAccountScheduling } from '../../../hooks/AccountScheduling';

const ExpenseScheduling: React.FC = () => {
  const { switchState } = useTheme();
  const formRef = useRef<FormHandles>(null);
  const { addAccountSchedulingExpense, expensePage } = useAccountScheduling();
  const navigation = useNavigation();
  const handleAddExpenseScheduling = useCallback(
    (data: IExpenseScheduling) => {
      if (data.name === '' || data.DateExpense === '') {
        Alert.alert(
          'Preencha todos os campos',
          'Preencha um nome para sua despesa, um valor e uma data válida',
        );
        return;
      }
      const id = new Date().getTime();

      addAccountSchedulingExpense({
        id,
        color: expensePage.color,
        icon: expensePage.icon,
        DateExpense: data.DateExpense,
        description: data.description,
        name: data.name,
      });

      navigation.navigate('AccountScheduling');
    },
    [
      addAccountSchedulingExpense,
      navigation,
      expensePage.color,
      expensePage.icon,
    ],
  );

  return (
    <Container>
      <Header>Agendamento de despesas</Header>

      <Content>
        <ImageWraper
          colors={
            !switchState
              ? [expensePage.color, expensePage.color]
              : ['#333333', '#333333']
          }
          start={{ x: 0.9, y: 0 }}
        >
          <IconFlag source={expensePage.icon} />
        </ImageWraper>
      </Content>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 40,
        }}
      >
        <Form onSubmit={handleAddExpenseScheduling} ref={formRef}>
          <InputContainer>
            <Input name="name" placeholder="Nome da despesa" />
            <Input
              name="description"
              placeholder="Descrição"
              multiline={true}
              numberOfLines={5}
              style={{ textAlignVertical: 'top' }}
            />
            <ValueAndDate>
              <Input name="DateExpense" placeholder="Data da despesa" />
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

export default ExpenseScheduling;
