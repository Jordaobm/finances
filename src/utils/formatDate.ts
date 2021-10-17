import { format } from "date-fns";

export function getDayAndMonthByDate(date: Date) {
  const value = format(date, "dd'/'MM");

  return value;
}

export function dateToString(date: Date) {
  return format(date, "dd'/'MM'/'yyyy");
}

export function dateToStringWithHour(date: Date) {
  return format(date, "dd'/'MM'/'yyyy 'às' H':'mm");
}

export function stringToDate(date: string) {
  const split = date?.split("/");
  return new Date(`${split[2]}/${split[1]}/${split[0]}`);
}
