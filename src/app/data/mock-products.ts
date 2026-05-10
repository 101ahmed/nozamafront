import { Product } from '../models/product';

export const DEAL_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Wireless noise‑cancelling headphones',
    price: 89.99,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/nozama-hp/320/320',
    rating: 4.5,
    reviewCount: 12403,
    prime: true,
  },
  {
    id: '2',
    title: 'Stainless steel insulated bottle (32 oz)',
    price: 24.5,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/nozama-bottle/320/320',
    rating: 4.7,
    reviewCount: 8921,
    prime: true,
  },
  {
    id: '3',
    title: 'Mechanical keyboard — tactile switches',
    price: 119.0,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/nozama-kb/320/320',
    rating: 4.3,
    reviewCount: 3412,
    prime: false,
  },
  {
    id: '4',
    title: 'USB‑C hub — 7‑in‑1 aluminum',
    price: 45.99,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/nozama-hub/320/320',
    rating: 4.6,
    reviewCount: 6722,
    prime: true,
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '5',
    title: '4K monitor 27" — HDR ready',
    price: 349.99,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/nozama-mon/320/320',
    rating: 4.4,
    reviewCount: 2103,
    prime: true,
  },
  {
    id: '6',
    title: 'Ergonomic office chair — mesh back',
    price: 199.0,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/nozama-chair/320/320',
    rating: 4.2,
    reviewCount: 5591,
    prime: false,
  },
  {
    id: '7',
    title: 'Smart fitness tracker — heart rate',
    price: 79.0,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/nozama-watch/320/320',
    rating: 4.5,
    reviewCount: 9876,
    prime: true,
  },
  {
    id: '8',
    title: 'Portable SSD 1TB — USB 3.2',
    price: 129.99,
    currency: 'USD',
    imageUrl: 'https://picsum.photos/seed/nozama-ssd/320/320',
    rating: 4.8,
    reviewCount: 445,
    prime: true,
  },
];

export const CATEGORY_TILES: { label: string; imageUrl: string }[] = [
  { label: 'Electronics', imageUrl: 'https://picsum.photos/seed/cat-el/200/200' },
  { label: 'Home & Kitchen', imageUrl: 'https://picsum.photos/seed/cat-home/200/200' },
  { label: 'Fashion', imageUrl: 'https://picsum.photos/seed/cat-fashion/200/200' },
  { label: 'Books', imageUrl: 'https://picsum.photos/seed/cat-books/200/200' },
];
