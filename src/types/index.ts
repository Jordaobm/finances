export interface IconProps {
  color: string;
}

export interface HeaderProps {
  color: "white" | "black";
  onlySettings?: boolean;
}

export interface Operation {
  category: {
    color: string;
  };
  card: {
    name: string;
  };
  value: number;
  date: Date;
  name: string;
}

export interface CardOperationProps {
  operations: Operation[];
}

export interface NavigationProps {
  activeRoute: string;
}
