import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { useMyExpenses } from '../../../hooks/MyExpense';
import {
  Container,
  Content,
  IconFlag,
  ImageWraper,
  InputValueSalary,
  TextTitle,
} from './styles';
import Header from '../../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import { addSalary } from '../../../utils/images';
import Button from '../../../components/Button';

const MyInitialBalance: React.FC = () => {
  const navigation = useNavigation();
  const { setInitialBalance, setFirst } = useMyExpenses();

  const [inputCoin, setInputCoin] = useState('0');
  const [salaryValue, setSalaryValue] = useState(0);

  const handleConfirmSalaryValue = useCallback(
    (initialBalance: number) => {
      setInitialBalance(initialBalance);
      setFirst(false);
      navigation.navigate('MyExpenses');
    },
    [navigation, setInitialBalance, setFirst],
  );

  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: 30 }}>
        <Content>
          <ImageWraper colors={['#67E799', '#4AD07E']} start={{ x: 0.9, y: 0 }}>
            <IconFlag source={addSalary} />
          </ImageWraper>
          <TextTitle>Estabeleça seu saldo atual disponível</TextTitle>
          <InputValueSalary
            type={'money'}
            value={inputCoin}
            maxLength={18}
            onChangeText={(value) => {
              setInputCoin(value);
              value = value.replace('R$', '');
              value = value.replace('.', '');
              value = value.replace(',', '.');
              setSalaryValue(Number(value));
            }}
          />
        </Content>
        <Button
          onPress={() => handleConfirmSalaryValue(salaryValue)}
          iconColor="white"
          textColor="white"
          icon="arrow-right"
          colors={{ initial: '#4AD07E', finished: '#67E799' }}
        >
          Continuar
        </Button>
      </ScrollView>
    </Container>
  );
};

export default MyInitialBalance;
