import React, { useEffect, useRef, useState } from 'react';
import { Text, TextInputProps } from 'react-native';
import { Container, InputStyle, InputValueSalary } from './styles';
import { useField } from '@unform/core';
import { useMyExpenses } from '../../hooks/MyExpense';

interface InputProps extends TextInputProps {
  name: string;
  inputErr?: boolean;
}

interface InputValueReference {
  value: string;
}

interface StateDate {
  dt: string;
}

const Input: React.FC<InputProps> = ({ name, inputErr, ...rest }) => {
  const { editExpenseState, editIncomeState } = useMyExpenses();
  const { registerField, fieldName, defaultValue = '' } = useField(name);
  const inputElementRef = useRef<any>(null);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const [inputFocus, setInputFocus] = useState(false);
  const [inputCoin, setInputCoin] = useState('0');
  const [inputCoinValue, setInputCoinValue] = useState(
    `${editExpenseState.ValueExpense}`,
  );
  const [inputCoinValueIncome, setInputCoinValueIncome] = useState(
    `${editIncomeState.ValueIncome}`,
  );

  const [day, setDay] = useState<StateDate>({ dt: '' });
  const [inputDateValueExpense, setInputDateValueExpense] = useState<StateDate>(
    { dt: editExpenseState.DateExpense },
  );

  const [inputDateValueIncome, setInputDateValueIncome] = useState<StateDate>({
    dt: editIncomeState.DateIncome,
  });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
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

  if (name === 'DateExpense') {
    return (
      <Container inputFocus={inputFocus}>
        <InputValueSalary
          ref={inputElementRef}
          placeholder="Data da despesa"
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY',
          }}
          value={day.dt}
          onChangeText={(text) => {
            inputValueRef.current.value = text;
            setDay({
              dt: text,
            });
          }}
        />
      </Container>
    );
  }

  if (name === 'EditDateExpense') {
    return (
      <Container inputFocus={inputFocus}>
        <InputValueSalary
          ref={inputElementRef}
          placeholder="Data da despesa"
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY',
          }}
          value={inputDateValueExpense.dt}
          onChangeText={(text) => {
            inputValueRef.current.value = text;
            setInputDateValueExpense({
              dt: text,
            });
          }}
        />
      </Container>
    );
  }

  if (name === 'ValueIncome') {
    return (
      <Container inputFocus={inputFocus} inputErr={inputErr}>
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

  if (name === 'DateIncome') {
    return (
      <Container inputFocus={inputFocus}>
        <InputValueSalary
          ref={inputElementRef}
          placeholder="Data da renda"
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY',
          }}
          value={day.dt}
          onChangeText={(text) => {
            inputValueRef.current.value = text;
            setDay({
              dt: text,
            });
          }}
        />
      </Container>
    );
  }

  if (name === 'ValueEdit') {
    return (
      <Container inputFocus={inputFocus}>
        <InputValueSalary
          value={inputCoinValue}
          ref={inputElementRef}
          type={'money'}
          maxLength={18}
          onChangeText={(value) => {
            setInputCoinValue(value);
            value = value.replace('R$', '');
            value = value.replace('.', '');
            value = value.replace(',', '.');
            inputValueRef.current.value = value;
          }}
        />
      </Container>
    );
  }

  if (name === 'ValueEditIncome') {
    return (
      <Container inputFocus={inputFocus}>
        <InputValueSalary
          value={inputCoinValueIncome}
          ref={inputElementRef}
          type={'money'}
          maxLength={18}
          onChangeText={(value) => {
            setInputCoinValueIncome(value);
            value = value.replace('R$', '');
            value = value.replace('.', '');
            value = value.replace(',', '.');
            inputValueRef.current.value = value;
          }}
        />
      </Container>
    );
  }

  if (name === 'EditDateIncome') {
    return (
      <Container inputFocus={inputFocus}>
        <InputValueSalary
          ref={inputElementRef}
          placeholder="Data da renda"
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY',
          }}
          value={inputDateValueIncome.dt}
          onChangeText={(text) => {
            inputValueRef.current.value = text;
            setInputDateValueIncome({
              dt: text,
            });
          }}
        />
      </Container>
    );
  }

  return (
    <Container inputFocus={inputFocus} inputErr={inputErr}>
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
