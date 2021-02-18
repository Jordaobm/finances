import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { Alert } from 'react-native';
import { IIncome } from '../../../dtos/types';
import { useMyExpenses } from '../../../hooks/MyExpense';
import { addSalary } from '../../../utils/images';
import {
  Container,
  Content,
  ImageWraper,
  IconFlag,
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
import { shade } from 'polished';

const AddExpense: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { setIncomes, incomes } = useMyExpenses();
  const { switchState } = useTheme();

  const navigation = useNavigation();

  const handleAddIncome = useCallback(
    (data: IIncome) => {
      if (
        data.NameIncome === '' ||
        data.ValueIncome === '' ||
        data.DateIncome === ''
      ) {
        Alert.alert(
          'Preencha todos os campos',
          'Preencha um nome para sua renda, um valor e uma data válida',
        );
        return;
      }

      const id = new Date().getTime();
      const income: IIncome = {
        id,
        NameIncome: data.NameIncome,
        DescriptionIncome: data.DescriptionIncome,
        ValueIncome: data.ValueIncome,
        DateIncome: data.DateIncome,
      };

      setIncomes([...incomes, income]);
      navigation.navigate('MyExpenses');
    },
    [navigation, setIncomes, incomes],
  );

  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <Content>
        <ImageWraper
          colors={
            !switchState ? ['#67E799', '#4AD07E'] : ['#4d4d4d', '#333333']
          }
          start={{ x: 0.9, y: 0 }}
        >
          <IconFlag source={addSalary} />
        </ImageWraper>
      </Content>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 40,
        }}
      >
        <Form onSubmit={handleAddIncome} ref={formRef}>
          <InputContainer>
            <Input
              name="NameIncome"
              placeholder="Nome da renda"
              keyboardAppearance="dark"
              returnKeyType="next"
            />
            <Input
              name="DescriptionIncome"
              placeholder="Descrição"
              multiline={true}
              numberOfLines={5}
              style={{ textAlignVertical: 'top' }}
            />
            <ValueAndDate>
              <InputValue>
                <Input name="ValueIncome" placeholder="Valor" />
              </InputValue>
              <InputDate>
                <Input name="DateIncome" placeholder="Data da despesa" />
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
