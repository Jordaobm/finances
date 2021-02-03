import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {Container, IconButton, ContentButton, TextHeader} from './styles';

const Header: React.FC = ({children}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContentButton onPress={() => navigation.goBack()}>
        <IconButton name="arrow-left" size={24} />
      </ContentButton>
      <TextHeader>{children}</TextHeader>
    </Container>
  );
};

export default Header;
