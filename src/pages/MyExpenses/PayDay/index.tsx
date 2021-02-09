import React, { useCallback, useState } from 'react';
import {
  Container,
  Content,
  ImageWraper,
  IconCalendar,
  TextTitle,
  InputDate,
  BodyText,
  Body,
  Color,
} from './styles';
import Header from '../../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import { useMyExpenses } from '../../../hooks/MyExpense';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

interface StateDate {
  dt: string;
}

const PayDay: React.FC = () => {
  const { setPayDay } = useMyExpenses();
  const navigation = useNavigation();

  const [day, setDay] = useState<StateDate>({ dt: '' });

  const handleSetPayDay = useCallback(
    (day: string) => {
      const dayNumber = Number(day);
      if (dayNumber < 0 || dayNumber > 31) {
        Alert.alert('Erro', 'Preencha uma data correta');
        return;
      }
      setPayDay(dayNumber);
      navigation.navigate('MyExpenses');
    },
    [navigation, setPayDay],
  );

  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: 30 }}>
        <Content>
          <ImageWraper colors={['#67E799', '#4AD07E']} start={{ x: 0.9, y: 0 }}>
            <IconCalendar name="calendar" size={32} />
          </ImageWraper>
          <TextTitle>Em que dia do mês você costuma receber?</TextTitle>
          <InputDate
            placeholder="DD"
            type={'datetime'}
            options={{
              format: 'DD',
            }}
            value={day.dt}
            onChangeText={(text) => {
              setDay({
                dt: text,
              });
            }}
          />

          <BodyText>
            Isso ajudará o <Color>finances</Color> à alertar você sempre que for
            dia de pagamento, adicionando o valor estabelecido como salário ao
            saldo atual disponível dentro do aplicativo. Caso não tenha um
            salário/renda definida, deixe essa data em branco e nada será
            adicionado.
          </BodyText>
        </Content>
        <Button
          onPress={() => handleSetPayDay(day.dt)}
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
export default PayDay;
