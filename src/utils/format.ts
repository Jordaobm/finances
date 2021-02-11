import { format, isAfter } from 'date-fns';

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

export function compareDate(dateString: string): boolean {
  const month = new Date().getMonth() + 1;
  const parsed = dateString.split('/');

  const compare = Number(parsed[1]) === month;
  return compare;
}
export function compareMonth(dateString: string) {
  const parsed = dateString.split('/');
  return Number(parsed[1]);
}
