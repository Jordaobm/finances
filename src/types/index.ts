export interface IconProps {
  color: string;
}

export interface HeaderProps {
  color: "white" | "#595959";
  onlySettings?: boolean;
}

export interface Card {
  id: number;
  institutionName: string;
  name: string;
  currentValue: number;
  colorBackground: string;
  colorText: string;
}

export interface Wallet {
  currentValue: number;
  name: string;
}

export interface Operation {
  id: number;
  type: "INPUT" | "OUTPUT" | "POUPED";
  name: string;
  value: number;
  category: Category;
  date: Date;
  card?: Card;
  wallet?: Wallet;
}

export interface Category {
  id: number;
  name: string;
  color: string;
}

export interface CardOperationProps {
  operations: Operation[];
}

export interface CardCategoryProps {
  categories: Category[];
}

export interface NavigationProps {
  activeRoute: string;
}
