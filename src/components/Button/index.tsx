import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {
  Container,
  TextButton,
  Content,
  IconButton,
  GradienteColor,
} from './styles';

interface ButtonProps {
  direction: string;
  colors?: {
    initial: string;
    finished: string;
  };
  icon: string;
}

const Button: React.FC<ButtonProps> = ({children, direction, colors, icon}) => {
  const navigation = useNavigation();

  if (colors) {
    return (
      <Container>
        <GradienteColor
          colors={[colors.initial, colors.finished]}
          start={{x: -1, y: 0}}>
          <Content
            onPress={() => navigation.navigate(direction)}
            colors={colors}>
            <TextButton color="white">{children}</TextButton>
            <IconButton color="white" name={icon} size={24} />
          </Content>
        </GradienteColor>
      </Container>
    );
  }

  return (
    <Container>
      <Content onPress={() => navigation.navigate(direction)} colors={colors}>
        <TextButton>{children}</TextButton>
        <IconButton name={icon} size={24} />
      </Content>
    </Container>
  );
};

export default Button;
