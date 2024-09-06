export {};

declare global {
  interface IProduct {
    id?: string;
    name?: string;
    description?: string;
    color?: string;
    price?: number;
    image?: string;
    category?: string;
  }
}
