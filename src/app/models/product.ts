export interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  prime?: boolean;
}
