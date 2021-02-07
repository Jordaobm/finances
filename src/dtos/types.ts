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
  icon: Object;
  NameExpense: string;
  DescriptionExpense: string;
  ValueExpense: number;
  idExpenseCategory: number;
}

export interface IExpenseEdit {
  NameEdit: string;
  DescriptionEdit: string;
  ValueEdit: number;
}

export interface IIncome {
  id: number;
  NameIncome: string;
  DescriptionIncome: string;
  ValueIncome: number;
}

export interface IIncomeEdit {
  NameEdit: string;
  DescriptionEdit: string;
  ValueEditIncome: number;
}
