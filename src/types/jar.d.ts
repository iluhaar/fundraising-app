export interface JarType {
  title: string;
  description: string;
  goal: string;
  amount: string;
  closed: boolean;
  ownerName: string;
  ownerIcon: string;
  bank: string;
  jarId: string;
}

export interface JarsType {
  data: JarType[];
  total: string;
  goal: string;
  progress: string;
}
