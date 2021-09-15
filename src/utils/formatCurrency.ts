export function formatCurrency(value: number) {
  const formatted =
    "R$" + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  return formatted?.replace(",", "-")?.replace(".", ",")?.replace("-", ".");
}
