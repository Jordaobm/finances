import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Container, IconButton, ContentButton, TextHeader } from './styles';
import { Switch } from 'react-native';
import { useTheme } from '../../hooks/themes';

const Header: React.FC = ({ children }) => {
  const { switchState, setSwitchState } = useTheme();
  const navigation = useNavigation();
  return (
    <Container>
      <ContentButton onPress={() => navigation.goBack()}>
        <IconButton name="arrow-left" size={24} />
      </ContentButton>
      <TextHeader>{children}</TextHeader>
      <Switch
        trackColor={{ false: '#4CCC81', true: '#333333' }}
        thumbColor={switchState ? '#f4f3f4' : '#f4f3f4'}
        onValueChange={() => setSwitchState(!switchState)}
        value={switchState}
      />
    </Container>
  );
};

export default Header;
