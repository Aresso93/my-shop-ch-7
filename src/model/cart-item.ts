import { Product } from '@/model/product';

export interface CartItem {
  product: Product;
  qty: number;
}
