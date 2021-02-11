import React, { useCallback } from 'react';
import {
  Container,
  Content,
  ImageIcon,
  AppName,
  AppDescription,
  ImageWraper,
  AppNameText,
  AppDescriptionText,
  ButtonWraper,
} from './styles';
import logo from '../../assets/logo1.png';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const Init: React.FC = () => {
  const navigation = useNavigation();

  const handleNextPage = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <Container>
      <Content>
        <ImageWraper>
          <ImageIcon source={logo} />
        </ImageWraper>
        <AppName>
          <AppNameText>Finances</AppNameText>
        </AppName>
        <AppDescription>
          <AppDescriptionText>Seu aplicativo de finanças</AppDescriptionText>
        </AppDescription>
      </Content>
      <ButtonWraper>
        <Button icon="arrow-right" onPress={handleNextPage}>
          Começar
        </Button>
      </ButtonWraper>
    </Container>
  );
};

export default Init;
