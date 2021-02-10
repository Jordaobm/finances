import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Goal,
  GoalIconWraper,
  GoalText,
  IconFlag,
  ImageWraper,
  TextTitle,
  Goals,
  Graphic,
} from './styles';
import Header from '../../components/Header';
import graphic from '../../assets/graphic3.png';
import pandeiro from '../../assets/pandeiro.png';
import flower from '../../assets/flower.png';
import alert from '../../assets/alert.png';
import other from '../../assets/other.png';
import flag from '../../assets/homeIcon.png';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useMyExpenses } from '../../hooks/MyExpense';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { first } = useMyExpenses();
  return (
    <>
      <StatusBar backgroundColor="#f6f7fb" barStyle="dark-content" />

      <Container>
        <Header />
        <ScrollView>
          <Content>
            <ImageWraper
              colors={['#FFD481', '#FFA800']}
              start={{ x: 0.9, y: 0 }}
            >
              <IconFlag source={flag} />
            </ImageWraper>
            <TextTitle>Selecione seu objetivo </TextTitle>

            <Goals>
              {first ? (
                <Goal
                  style={styles.container}
                  onPress={() => navigation.navigate('YourSalary')}
                >
                  <GoalIconWraper color={'#fff1f1'}>
                    <Graphic source={graphic} />
                  </GoalIconWraper>
                  <GoalText>Controle de minhas despesas</GoalText>
                </Goal>
              ) : (
                <Goal
                  style={styles.container}
                  onPress={() => navigation.navigate('MyExpenses')}
                >
                  <GoalIconWraper color={'#fff1f1'}>
                    <Graphic source={graphic} />
                  </GoalIconWraper>
                  <GoalText>Controle de minhas despesas</GoalText>
                </Goal>
              )}

              <Goal disable={true} style={styles.container}>
                <GoalIconWraper color={'#E0F8E9'} disable={true}>
                  <Graphic source={pandeiro} />
                </GoalIconWraper>
                <GoalText>Juntar para comprar </GoalText>
              </Goal>

              <Goal disable={true} style={styles.container}>
                <GoalIconWraper color={'#F9F3FF'} disable={true}>
                  <Graphic source={flower} />
                </GoalIconWraper>
                <GoalText>Economize para investir</GoalText>
              </Goal>

              <Goal disable={true} style={styles.container}>
                <GoalIconWraper color={'#FFF6D9'} disable={true}>
                  <Graphic source={alert} />
                </GoalIconWraper>
                <GoalText>Economize para imprevistos</GoalText>
              </Goal>

              <Goal disable={true} style={styles.container}>
                <GoalIconWraper color={'#F0F7FD'} disable={true}>
                  <Graphic source={other} />
                </GoalIconWraper>
                <GoalText>Outros</GoalText>
              </Goal>
            </Goals>
          </Content>
        </ScrollView>
      </Container>
    </>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    elevation: 5,
  },
});
