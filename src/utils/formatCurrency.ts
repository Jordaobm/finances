export function formatCurrency(value: number) {
  const formatted =
    "R$" +
    Math.abs(value)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  return `${value < 0 ? "-" : ""} ${formatted
    ?.replace(",", "-")
    ?.replace(".", ",")
    ?.replace("-", ".")}`;
}
