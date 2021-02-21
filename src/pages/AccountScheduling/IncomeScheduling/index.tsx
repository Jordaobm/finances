import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import React, { useCallback, useRef } from 'react';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import { IIncomeScheduling } from '../../../dtos/types';
import { useAccountScheduling } from '../../../hooks/AccountScheduling';
import { useTheme } from '../../../hooks/themes';
import { addSalary } from '../../../utils/images';
import {
  Container,
  Content,
  IconFlag,
  ImageWraper,
  InputContainer,
  ValueAndDate,
} from './styles';

const IncomeScheduling: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { switchState } = useTheme();
  const { addAccountSchedulingIncome } = useAccountScheduling();

  const navigation = useNavigation();

  const handleAddAccountScheduling = useCallback(
    (data: IIncomeScheduling) => {
      if (data.name === '' || data.DateIncome === '') {
        Alert.alert('Erro', 'Preencha um nome e data validos');
      }
      const id = new Date().getTime();
      addAccountSchedulingIncome({
        id,
        name: data.name,
        DateIncome: data.DateIncome,
        description: data.description,
      });
      navigation.navigate('AccountScheduling');
    },
    [addAccountSchedulingIncome, navigation],
  );

  return (
    <Container>
      <Header>Agendamento de despesas</Header>
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
        <Form onSubmit={handleAddAccountScheduling} ref={formRef}>
          <InputContainer>
            <Input
              name="name"
              placeholder="Nome da renda"
              keyboardAppearance="dark"
              returnKeyType="next"
            />
            <Input
              name="description"
              placeholder="Descrição"
              multiline={true}
              numberOfLines={5}
              style={{ textAlignVertical: 'top' }}
            />
            <ValueAndDate>
              <Input name="DateIncome" placeholder="Data da despesa" />
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

export default IncomeScheduling;
