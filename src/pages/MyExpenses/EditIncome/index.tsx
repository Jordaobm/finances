import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { Alert } from 'react-native';
import { IIncome, IIncomeEdit } from '../../../dtos/types';
import { useMyExpenses } from '../../../hooks/MyExpense';
import {
  Container,
  Content,
  ImageWraper,
  IconFlag,
  ValueAndDate,
  InputValue,
  InputDate,
  InputContainer,
  ActionsEdit,
  ButtonContent,
  Gradient,
  ButtonText,
} from './styles';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import { ScrollView } from 'react-native-gesture-handler';
import { addSalary } from '../../../utils/images';
import { Form } from '@unform/mobile';
import { useTheme } from '../../../hooks/themes';
import { shade } from 'polished';

const EditIncome: React.FC = () => {
  const { switchState } = useTheme();
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const { editIncomeState, deleteIncome, setEditIncome } = useMyExpenses();

  const handleEditIncome = useCallback(
    (income: IIncomeEdit) => {
      if (income.NameEdit === '' || income.ValueEditIncome === '') {
        Alert.alert(
          'Preencha todos os campos',
          'Preencha um nome para sua renda e um valor',
        );
        return;
      }

      setEditIncome({
        id: editIncomeState.id,
        NameIncome: income.NameEdit,
        DescriptionIncome: income.DescriptionEdit,
        ValueIncome: income.ValueEditIncome,
        DateIncome: income.EditDateIncome,
      });
      navigation.navigate('MyExpenses');
    },
    [editIncomeState.id, navigation, setEditIncome],
  );

  const handleDeleteIncome = useCallback(
    (income: IIncome) => {
      deleteIncome(income);
      navigation.navigate('MyExpenses');
    },
    [deleteIncome, navigation],
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
        <Form
          initialData={{
            NameEdit: editIncomeState.NameIncome,
            DescriptionEdit: editIncomeState.DescriptionIncome,
            ValueEditIncome: editIncomeState.ValueIncome,
            EditDateIncome: editIncomeState.DateIncome,
          }}
          onSubmit={handleEditIncome}
          ref={formRef}
        >
          <InputContainer>
            <Input name="NameEdit" placeholder="Nome da renda" />
            <Input
              name="DescriptionEdit"
              placeholder="Descrição"
              multiline={true}
              numberOfLines={5}
              style={{ textAlignVertical: 'top' }}
            />
            <ValueAndDate>
              <InputValue>
                <Input name="ValueEditIncome" placeholder="Valor" />
              </InputValue>
              <InputDate>
                <Input name="EditDateIncome" placeholder="Data da despesa" />
              </InputDate>
            </ValueAndDate>
          </InputContainer>

          <ActionsEdit>
            <Gradient
              colors={
                !switchState
                  ? ['#67E799', '#4AD07E']
                  : [`${shade(0.5, '#67E799')}`, `${shade(0.5, '#4AD07E')}`]
              }
              start={{ x: 0.1, y: 1 }}
            >
              <ButtonContent
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                <ButtonText>Concluir</ButtonText>
              </ButtonContent>
            </Gradient>

            <Gradient
              colors={
                !switchState
                  ? ['#EB5757', '#FF6969']
                  : [`${shade(0.5, '#EB5757')}`, `${shade(0.5, '#FF6969')}`]
              }
              start={{ x: 0.1, y: 1 }}
            >
              <ButtonContent
                onPress={() => handleDeleteIncome(editIncomeState)}
              >
                <ButtonText>Deletar</ButtonText>
              </ButtonContent>
            </Gradient>
          </ActionsEdit>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default EditIncome;
