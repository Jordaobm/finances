import React, {useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  Container,
  Content,
  IconFlag,
  ImageWraper,
  TextTitle,
  InputValueSalary,
  SkipStep,
  SkipStepText,
  SkipStepButton,
  ArrowDown,
  HeaderImage,
  TitleExpenseCategory,
  ContentxpenseCategory,
  Goals,
  Goal,
  GoalIconWraper,
  GoalText,
  Category,
  IconCategory,
  CategoryName,
  IconArrow,
  Categories,
  IconCategoryWraper,
  IconWraper,
  IconArrowWraper,
  Name,
  CategoryTitle,
  ButtonAddCategory,
} from './styles';
import Header from '../../components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import addSalary from '../../assets/addsalary.png';
import removeSalaty from '../../assets/removesalary.png';
import arrowDown from '../../assets/arrowDown.png';
import ArrendamentosEdividendos from '../../assets/ArrendamentosEdividendos.png';
import basicServices from '../../assets/basicServices.png';
import creditosESeguros from '../../assets/creditosESeguros.png';
import cartoesDeCredito from '../../assets/cartoesDeCredito.png';
import other from '../../assets/other.png';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {Graphic} from '../Home/styles';
import {useMyExpenses} from '../../hooks/MyExpense';

const YourSalary: React.FC = () => {
  const {setSalary} = useMyExpenses();

  const [inputCoin, setInputCoin] = useState('0');

  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <ScrollView contentContainerStyle={{flex: 1, paddingBottom: 20}}>
        <Content>
          <ImageWraper colors={['#67E799', '#4AD07E']} start={{x: 0.9, y: 0}}>
            <IconFlag source={addSalary} />
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
              setSalary(Number(value));
            }}
          />
        </Content>
        <Button
          icon="arrow-right"
          direction="YourSpending"
          colors={{initial: '#4AD07E', finished: '#67E799'}}>
          Continuar
        </Button>
      </ScrollView>
    </Container>
  );
};

const YourSpending: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <ScrollView>
        <Content>
          <ImageWraper colors={['#F97474', '#E15050']} start={{x: 0.9, y: 0}}>
            <IconFlag source={removeSalaty} />
          </ImageWraper>
          <TextTitle>Insira suas despesas constantes </TextTitle>
        </Content>

        <Categories>
          <Category>
            <CategoryTitle>
              <IconWraper>
                <IconCategoryWraper color={'#FFEDFA'}>
                  <IconCategory source={basicServices} />
                </IconCategoryWraper>
              </IconWraper>
              <Name>
                <CategoryName>Serviços Básicos</CategoryName>
              </Name>
              <IconArrowWraper>
                <IconArrow name="chevron-down" size={20} />
              </IconArrowWraper>
            </CategoryTitle>
            <ButtonAddCategory>
              <Button
                icon="plus"
                direction="YourSpending"
                colors={{initial: '#4AD07E', finished: '#67E799'}}>
                Adicionar despesa
              </Button>
            </ButtonAddCategory>
          </Category>
        </Categories>

        <Button icon="plus" direction="ExpenseCategory">
          Criar categoria
        </Button>
        <SkipStepButton>
          <SkipStep onPress={() => navigation.navigate('Home')}>
            <SkipStepText>Pular esse passo</SkipStepText>
          </SkipStep>
        </SkipStepButton>
      </ScrollView>
    </Container>
  );
};

const ExpenseCategory: React.FC = () => {
  return (
    <Container>
      <HeaderImage>
        <ArrowDown source={arrowDown} />
      </HeaderImage>
      <ScrollView>
        <ContentxpenseCategory>
          <TitleExpenseCategory>Categoria de despesas</TitleExpenseCategory>

          <Goals>
            <Goal style={styles.container}>
              <GoalIconWraper color={'#E7F8EE'}>
                <Graphic source={ArrendamentosEdividendos} />
              </GoalIconWraper>
              <GoalText>Controle de minhas despesas</GoalText>
            </Goal>

            <Goal style={styles.container}>
              <GoalIconWraper color={'#FFEDFA'}>
                <Graphic source={basicServices} />
              </GoalIconWraper>
              <GoalText>Serviços básicos</GoalText>
            </Goal>

            <Goal style={styles.container}>
              <GoalIconWraper color={'#E5F4FF'}>
                <Graphic source={creditosESeguros} />
              </GoalIconWraper>
              <GoalText>Créditos e Seguros</GoalText>
            </Goal>

            <Goal style={styles.container}>
              <GoalIconWraper color={'#FFE9E3'}>
                <Graphic source={cartoesDeCredito} />
              </GoalIconWraper>
              <GoalText>Cartões de Crédito</GoalText>
            </Goal>

            <Goal style={styles.container}>
              <GoalIconWraper color={'#F0F7FD'}>
                <Graphic source={other} />
              </GoalIconWraper>
              <GoalText>Outros</GoalText>
            </Goal>
          </Goals>
        </ContentxpenseCategory>
      </ScrollView>
    </Container>
  );
};

const MyExpenses: React.FC = () => {
  return <YourSalary />;
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
  },
});

export {MyExpenses, YourSpending, ExpenseCategory};
