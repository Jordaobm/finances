import React from 'react';
import {
  Container,
  Content,
  ImageIcon,
  AppName,
  AppDescription,
  ImageWraper,
  AppNameText,
  AppDescriptionText,
} from './styles';
import logo from '../../assets/logo1.png';
import Button from '../../components/Button';

const Init: React.FC = () => {
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
      <Button icon="arrow-right" direction="Home">
        Começar
      </Button>
    </Container>
  );
};

export default Init;
