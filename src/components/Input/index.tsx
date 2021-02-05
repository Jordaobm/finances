import React, {useEffect, useRef, useState} from 'react';
import {Text, TextInputProps} from 'react-native';
import {Container, InputStyle, InputValueSalary} from './styles';
import {useField} from '@unform/core';

interface InputProps extends TextInputProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({name, ...rest}) => {
  const {registerField, fieldName, defaultValue = ''} = useField(name);
  const inputElementRef = useRef<any>(null);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});
  const [inputFocus, setInputFocus] = useState(false);
  const [inputCoin, setInputCoin] = useState('0');

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  if (name === 'ValueExpense') {
    return (
      <Container inputFocus={inputFocus}>
        <InputValueSalary
          ref={inputElementRef}
          type={'money'}
          value={inputCoin}
          maxLength={18}
          onChangeText={(value) => {
            setInputCoin(value);
            value = value.replace('R$', '');
            value = value.replace('.', '');
            value = value.replace(',', '.');
            inputValueRef.current.value = value;
          }}
        />
      </Container>
    );
  }

  return (
    <Container inputFocus={inputFocus}>
      <InputStyle
        {...rest}
        ref={inputElementRef}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
      />
    </Container>
  );
};

export default Input;
