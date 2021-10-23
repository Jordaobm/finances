import { Operation, Category } from "../types";

export function getLastOperationByCategory(
  operations: Operation[],
  category: Category
) {
  return operations
    ?.filter((operation) => operation?.category?.id === category?.id)
    ?.sort((operationA: Operation, operationB: Operation) => {
      if (operationA?.id && operationB?.id) {
        if (operationA?.id > operationB?.id) {
          return -1;
        }
      }
      return 0;
    })[0];
}

export function getLastOperation(operations: Operation[]) {
  return operations?.sort((operationA: Operation, operationB: Operation) => {
    if (operationA?.id && operationB?.id) {
      if (operationA?.id > operationB?.id) {
        return -1;
      }
    }
    return 0;
  })[0];
}
