export interface Book {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

export type RootState = Book[];
