import { Category, Operation } from "../types";

export function extractCategoriesByOperations(
  entryOperations: Operation[],
  type?: string
) {
  let operations = entryOperations;

  if (type) {
    operations = entryOperations?.filter((e) => e?.type === type);
  }

  let categoriesFilter: Category[] = [];

  operations?.forEach((operation) => {
    if (
      categoriesFilter?.findIndex((e) => e?.id === operation?.category?.id) ===
      -1
    ) {
      categoriesFilter.push(operation?.category);
    }
  });

  categoriesFilter = categoriesFilter?.map((category) => {
    let operationByCategory = operations?.filter(
      (e) => e?.category?.id === category?.id
    );

    let accumuledValue = 0;
    operationByCategory.forEach((e) => {
      accumuledValue = accumuledValue + Number(e?.value);
    });

    return { ...category, accumuledValue };
  });

  return categoriesFilter;
}
