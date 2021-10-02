export function monthAndYearToDate(monthYear: string) {
  const month = monthYear?.split("/")[0];
  const year = monthYear?.split("/")[1];

  return new Date(`${year}-${Number(month) + 1}-01`);
}
