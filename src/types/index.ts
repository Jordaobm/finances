export interface IconProps {
  color: string;
}

export interface HeaderProps {
  color: "white" | "#595959";
  onlySettings?: boolean;
  receivedDate?: Date;
}

export interface Card {
  id?: string;
  institutionName: string;
  name: string;
  currentValue: number | string;
  colorBackground: string;
  colorBackgroundNumber?: number;
  colorText: string;
  colorTextNumber?: number;
}

export interface Wallet {
  currentValue: number;
  name: string;
}

export interface Operation {
  id?: string;
  type: string;
  name: string;
  value: number | string;
  category: Category;
  date: string;
  card?: Card;
  origin?: Card;
  for?: Card;
}

export interface OperationDB {
  id?: string;
  type: string;
  name: string;
  value: number | string;
  id_category?: string;
  date: Date;
  id_card?: string;
  id_origin?: string;
  id_for?: string;
}

export interface Category {
  id?: string;
  name: string;
  color: string;
  number: number;
  accumuledValue?: number;
}

export interface CardOperationProps {
  operations: Operation[];
}

export interface NavigationProps {
  activeRoute: string;
  activeColor?: string;
  onNavigate?: () => void;
}

export interface AutocompleteOption {
  label: string;
  value: string;
  id?: string;
}

export interface SelectOption {
  label: string;
  value: string;
  id?: string;
}

export interface Config {
  id?: string;
  monthYear: string;
  firstDayMonth?: string;
  lastDayMonth?: string;
}

export interface InitialValue {
  categories: Category[];
  cards: Card[];
  wallet: Card;
  operations: Operation[];
  config: Config;
}

export interface FormChartFilter {
  initialDate: string;
  finishDate: string;
}

export interface File {
  name: string;
  path: string;
}

export interface RestoreDB {
  cards: Card[];
  categories: Category[];
  configurations: Config;
  operations: Operation[];
}

export interface CustomAutocompleteProps {
  data: AutocompleteOption[];
  placeholder?: string;
}
