export interface User {
  id: number;
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;

  favorites?: Favorite[];
  cart?: Cart[];
  addresses?: Address[] | null;
  cards?: Card[];
}

export interface Favorite {
  id: number;
  productId: number;
}

export interface Cart {
  id: number;
  productId: number;
}

export interface Address {
  id?: number;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface Card {
  id?: number;
  name: string;
  number: string;
  date: string;
  cvv: string;
}
