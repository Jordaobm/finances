import { format } from 'date-fns';

export function formatValue(value: number) {
  const formattedValue = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formattedValue;
}

export function transformDateStringInDate(dateString: string) {
  const parsed = dateString.split('/');

  const day = Number(parsed[0]);
  const month = Number(parsed[1] - 1);
  const year = Number(parsed[2]);

  const date = new Date(year, month, day);

  // console.log(date);

  return date;
}
