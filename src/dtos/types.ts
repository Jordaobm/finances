export interface IExpenseCategory {
  id: number;
  color: string;
  name: string;
  icon: Object;
  date: Date;
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
  DateIncome: string;
}

export interface IIncomeEdit {
  NameEdit: string;
  DescriptionEdit: string;
  ValueEditIncome: number;
  EditDateIncome: string;
}

export interface Theme {
  backgroundInit: string;
  background: string;
  backgroundCard: string;
  backgroundCardDisable: string;
  textColor: string;
  backgroundButton: string;
  backgroundText: string;
  borderInputColor: string;
  textBlue: string;
}
