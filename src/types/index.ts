export interface IconProps {
  color: string;
}

export interface HeaderProps {
  color: "white" | "#595959";
  onlySettings?: boolean;
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
  id: string;
  type: string;
  name: string;
  value: number | string;
  category: Category;
  date: string;
  card?: Card;
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

export interface CardCategoryProps {
  categories: Category[];
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
