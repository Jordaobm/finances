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
  DateExpense: string;
}

export interface IExpenseEdit {
  NameEdit: string;
  DescriptionEdit: string;
  ValueEdit: number;
  EditDateExpense: string;
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
