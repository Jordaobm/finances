export interface IExpenseCategory {
  id: number;
  color: string;
  name: string;
  icon: Object;
}

export interface IExpenseDetailPageState {
  color: string;
  name: string;
  icon: Object;
}

export interface IExpense {
  id: number;
  color: string;
  name: string;
  icon: Object;
  NameExpense: string;
  DescriptionExpense: string;
  ValueExpense: number;
  idExpenseCategory: number;
}
