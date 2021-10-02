export function monthAndYearToDate(monthYear: string) {
  const month = monthYear?.split("/")[0];
  const year = monthYear?.split("/")[1];

  const date = new Date(Number(year), Number(month) - 1, 1);

  return date;
}
