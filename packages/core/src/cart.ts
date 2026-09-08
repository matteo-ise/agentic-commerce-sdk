import { Money } from './discovery.js';

export interface CartItem {
  sku: string;
  quantity: number;
}

export interface Cart {
  id: string;
  supplier: string;
  items: CartItem[];
  subtotal: Money;
  tax: Money;
  shipping: Money;
  total: Money;
  payment_terms?: string;
  delivery_date?: string;
  status: 'draft' | 'submitted' | 'confirmed' | 'rejected';
}

export class CartService {
  constructor(public id: string, public supplier: string) {}
  
  items: CartItem[] = [];

  async addItem(item: CartItem): Promise<void> {
    this.items.push(item);
  }

  async requestQuote(): Promise<void> {
    console.log(`Requesting quote for cart ${this.id}`);
  }

  async submit(): Promise<void> {
    console.log(`Submitting cart ${this.id} to ${this.supplier}`);
  }
}
