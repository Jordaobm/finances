import { format } from "date-fns";

export function getDayAndMonthByDate(date: Date) {
  const value = format(date, "dd'/'MM");

  return value;
}
