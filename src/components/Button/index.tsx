import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import {
  Container,
  TextButton,
  Content,
  IconButton,
  GradienteColor,
} from './styles';

interface ButtonProps extends RectButtonProperties {
  iconColor?: string;
  textColor?: string;
  colors?: {
    initial: string;
    finished: string;
  };
  icon: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  colors,
  icon,
  textColor,
  iconColor,
  ...rest
}) => {
  if (colors) {
    return (
      <Container>
        <GradienteColor
          colors={[colors.initial, colors.finished]}
          start={{ x: 0.1, y: 1 }}
        >
          <Content {...rest} colors={colors}>
            <TextButton color={textColor}>{children}</TextButton>
            <IconButton color={iconColor} name={icon} size={24} />
          </Content>
        </GradienteColor>
      </Container>
    );
  }

  return (
    <Container>
      <Content {...rest} colors={colors}>
        <TextButton>{children}</TextButton>
        <IconButton name={icon} size={24} />
      </Content>
    </Container>
  );
};

export default Button;
