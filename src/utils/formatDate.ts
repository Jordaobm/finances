import { format } from "date-fns";

export function getDayAndMonthByDate(date: Date) {
  const value = format(date, "dd'/'MM");

  return value;
}

export function dateToString(date: Date) {
  return format(date, "dd'/'MM'/'yyyy");
}

export function stringToDate(date: string) {
  const split = date?.split("/");
  return new Date(`${split[2]}/${split[1]}/${split[0]}`);
}
