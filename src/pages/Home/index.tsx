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
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useMyExpenses } from '../../hooks/MyExpense';
import {
  flag,
  graphic,
  pandeiro,
  flower,
  alert,
  other,
} from '../../utils/images';
import { useTheme } from '../../hooks/themes';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { first } = useMyExpenses();
  const { switchState } = useTheme();
  return (
    <>
      <StatusBar
        backgroundColor={switchState ? '#1a1a1a' : '#fff'}
        barStyle={switchState ? 'light-content' : 'dark-content'}
      />

      <Container>
        <Header />
        <ScrollView>
          <Content>
            <ImageWraper
              colors={[
                `${!switchState ? '#FFD481' : '#4d4d4d'}`,
                `${!switchState ? '#FFA800' : '#333333'}`,
              ]}
              start={{ x: 0.9, y: 0 }}
            >
              <IconFlag source={flag} />
            </ImageWraper>
            <TextTitle>Selecione seu objetivo </TextTitle>

            <Goals>
              {first ? (
                <Goal
                  style={styles.container}
                  onPress={() => navigation.navigate('MyInitialBalance')}
                >
                  <GoalIconWraper
                    color={`${!switchState ? '#fff1f1' : '#333333'}`}
                  >
                    <Graphic source={graphic} />
                  </GoalIconWraper>
                  <GoalText>Controle de minhas despesas</GoalText>
                </Goal>
              ) : (
                <Goal
                  style={styles.container}
                  onPress={() => navigation.navigate('MyExpenses')}
                >
                  <GoalIconWraper
                    color={`${!switchState ? '#fff1f1' : '#333333'}`}
                  >
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
