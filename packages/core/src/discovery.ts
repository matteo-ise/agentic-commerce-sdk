import { z } from 'zod';

export const MoneySchema = z.object({
  amount: z.number(),
  currency: z.string(),
  per_unit: z.string()
});
export type Money = z.infer<typeof MoneySchema>;

export interface SupplierInfo {
  id: string;
  name: string;
  url: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface PaymentMethod {
  id: string;
  type: string;
}

export interface DeliveryOption {
  id: string;
  name: string;
  cost: Money;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  sku: string;
  gtin?: string;
  unit: string;
  price: Money;
  availability: 'in_stock' | 'limited' | 'on_request';
  min_order_qty?: number;
  lead_time_days?: number;
  specifications?: Record<string, string>;
}

export interface ProductCatalog {
  supplier: SupplierInfo;
  categories: Category[];
  products: Product[];
  pricing: 'fixed' | 'negotiable' | 'quote_required';
  payment_methods: PaymentMethod[];
  delivery_options: DeliveryOption[];
}

export class DiscoveryService {
  async discover(mcpUrl: string): Promise<ProductCatalog> {
    console.log(`Discovering catalog at ${mcpUrl}`);
    // Mock implementation
    return {
      supplier: { id: 'sup1', name: 'Lieferant GmbH', url: mcpUrl },
      categories: [{ id: 'c1', name: 'Büromaterial' }],
      products: [{
        id: 'p1',
        name: 'A4 Papier',
        description: 'Druckerpapier A4',
        sku: 'PAPER-A4-500',
        unit: 'piece',
        price: { amount: 4.5, currency: 'EUR', per_unit: 'piece' },
        availability: 'in_stock'
      }],
      pricing: 'negotiable',
      payment_methods: [{ id: 'pm1', type: 'invoice' }],
      delivery_options: [{ id: 'd1', name: 'Standard', cost: { amount: 5, currency: 'EUR', per_unit: 'shipment' } }]
    };
  }
}
