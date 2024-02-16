export interface Investment {
  TypeOfInvestment: string;
  Status: boolean;
  Date: string;
  Name: string;
  Value: number;
}

export interface Theme {
  theme: string;
  toggleTheme: () => void;
}

export interface User {
  UserID: number;
  FirstName: string;
  LastName: string;
  Age: number;
}

export interface Sidebar {
  isCollapsed: boolean;
  toggleIsCollapsed: () => void;
}
