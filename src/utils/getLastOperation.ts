import { Operation, Category } from "../types";

export function getLastOperationByCategory(
  operations: Operation[],
  category: Category
) {
  const filterOperationsByCategory = operations?.filter(
    (operation) => operation?.category?.id === category?.id
  );

  return getLastOperation(filterOperationsByCategory);
}

export function getLastOperation(operations: Operation[]) {
  return operations?.sort((operationA: any, operationB: any) => {
    if (operationA?.id > operationB?.id) {
      return -1;
    }
  })[0];
}
