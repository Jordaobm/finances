import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import Header from '../../../components/Header';
import { IExpenseCategory } from '../../../dtos/types';
import { useMyExpenses } from '../../../hooks/MyExpense';

import {
  Container,
  ContentCategory,
  ActionsEdit,
  ButtonContent,
  ButtonText,
  Gradient,
} from './styles';
import { ContainerCategory } from '../YourSpending/styles';
import Card from '../../../components/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from '../../../hooks/themes';
import { shade } from 'polished';

const DetailsCategory: React.FC = () => {
  const navigation = useNavigation();
  const { switchState } = useTheme();
  const { detailsCategoryState, deleteCategory } = useMyExpenses();

  const handleDeleteCategory = useCallback(
    (category: IExpenseCategory) => {
      navigation.navigate('MyExpenses');
      deleteCategory(category);
    },
    [navigation, deleteCategory],
  );
  return (
    <Container>
      <Header>Controle de minhas despesas</Header>
      <ScrollView>
        <ContentCategory>
          <ContainerCategory>
            <Card category={detailsCategoryState} />
          </ContainerCategory>
        </ContentCategory>
      </ScrollView>
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
              navigation.navigate('MyExpenses');
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
            onPress={() => handleDeleteCategory(detailsCategoryState)}
          >
            <ButtonText>Deletar</ButtonText>
          </ButtonContent>
        </Gradient>
      </ActionsEdit>
    </Container>
  );
};
export default DetailsCategory;
