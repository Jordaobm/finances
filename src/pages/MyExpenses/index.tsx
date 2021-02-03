import React, {useState} from 'react';
import {Text} from 'react-native';
import {
  Container,
  Content,
  IconFlag,
  ImageWraper,
  TextTitle,
  InputValueSalary,
} from './styles';
import Header from '../../components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import addSalaty from '../../assets/addsalary.png';
import Button from '../../components/Button';

const YourSalary: React.FC = () => {
  const [inputCoin, setInputCoin] = useState('0');
  const [valueCoin, setValueCoin] = useState(0);

  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <ScrollView>
        <Content>
          <ImageWraper colors={['#67E799', '#4AD07E']} start={{x: 0.9, y: 0}}>
            <IconFlag source={addSalaty} />
          </ImageWraper>
          <TextTitle>Estabeleça seu salário ou outra renda</TextTitle>
          <InputValueSalary
            type={'money'}
            value={inputCoin}
            maxLength={18}
            onChangeText={(value) => {
              setInputCoin(value);
              value = value.replace('R$', '');
              value = value.replace('.', '');
              value = value.replace(',', '.');
              setValueCoin(Number(value));
            }}
          />
        </Content>
        <Button colors={{initial: '#4AD07E', finished: '#67E799'}}>
          Continuar
        </Button>
      </ScrollView>
    </Container>
  );
};

const MyExpenses: React.FC = () => {
  return <YourSalary />;
};

export {MyExpenses};
