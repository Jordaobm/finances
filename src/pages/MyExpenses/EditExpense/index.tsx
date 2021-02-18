import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { Alert } from 'react-native';
import { IExpense, IExpenseEdit } from '../../../dtos/types';
import { useMyExpenses } from '../../../hooks/MyExpense';
import {
  Container,
  Content,
  ImageWraper,
  IconFlag,
  InputContainer,
  InputDate,
  InputValue,
  ValueAndDate,
  ActionsEdit,
  ButtonContent,
  ButtonText,
  Gradient,
} from './styles';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import { ScrollView } from 'react-native-gesture-handler';
import { Form } from '@unform/mobile';
import { useTheme } from '../../../hooks/themes';
import { shade } from 'polished';

const EditExpense: React.FC = () => {
  const { switchState } = useTheme();
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const { editExpenseState, setEditExpense, deleteExpense } = useMyExpenses();

  const handleEditExpense = useCallback(
    (data: IExpenseEdit) => {
      if (data.NameEdit === '' || data.ValueEdit === '') {
        Alert.alert(
          'Preencha todos os campos',
          'Preencha um nome para sua despesa e um valor',
        );
        return;
      }
      const edit: IExpense = {
        id: editExpenseState.id,
        color: editExpenseState.color,
        icon: editExpenseState.icon,
        idExpenseCategory: editExpenseState.idExpenseCategory,
        DescriptionExpense: data.DescriptionEdit,
        NameExpense: data.NameEdit,
        ValueExpense: data.ValueEdit,
        DateExpense: data.EditDateExpense,
      };
      setEditExpense(edit);
      navigation.navigate('MyExpenses');
    },
    [
      editExpenseState.idExpenseCategory,
      editExpenseState.color,
      editExpenseState.icon,
      editExpenseState.id,
      navigation,
      setEditExpense,
    ],
  );

  const handleDeleteExpense = useCallback(
    (expense: IExpense) => {
      deleteExpense(expense);
      navigation.navigate('MyExpenses');
    },
    [deleteExpense, navigation],
  );

  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <Content>
        <ImageWraper
          colors={
            !switchState
              ? [editExpenseState.color, editExpenseState.color]
              : ['#333333', '#333333']
          }
          start={{ x: 0.9, y: 0 }}
        >
          <IconFlag source={editExpenseState.icon} />
        </ImageWraper>
      </Content>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 40,
        }}
      >
        <Form
          initialData={{
            NameEdit: editExpenseState.NameExpense,
            DescriptionEdit: editExpenseState.DescriptionExpense,
            ValueEdit: editExpenseState.ValueExpense,
            EditDateExpense: editExpenseState.DateExpense,
          }}
          onSubmit={handleEditExpense}
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
                <Input name="ValueEdit" placeholder="Valor" />
              </InputValue>
              <InputDate>
                <Input name="EditDateExpense" placeholder="Data da despesa" />
              </InputDate>
            </ValueAndDate>
          </InputContainer>

          <ActionsEdit>
            <Gradient
              colors={
                !switchState
                  ? ['#4AD07E', '#67E799']
                  : [`${shade(0.5, '#4AD07E')}`, `${shade(0.5, '#67E799')}`]
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
                onPress={() => handleDeleteExpense(editExpenseState)}
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

export default EditExpense;
