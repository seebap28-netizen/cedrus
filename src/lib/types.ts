export type MenuId = "weekday" | "weekend";

export type Category = {
  id: string;
  name: string;
  description: string;
  sortOrder: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  imageUrl: string;
  available: boolean;
  featured: boolean;
  menus: MenuId[];
};

export type StoreData = {
  categories: Category[];
  products: Product[];
};
