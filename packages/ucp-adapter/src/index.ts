import { ProductCatalog } from '@agentic-commerce/core';

export class UcpAdapter {
  async translateUcpCatalog(ucpData: any): Promise<ProductCatalog> {
    console.log('Translating UCP to Commerce SDK Catalog');
    return {
      supplier: { id: 'ucp-sup', name: 'UCP Supplier', url: '' },
      categories: [],
      products: [],
      pricing: 'fixed',
      payment_methods: [],
      delivery_options: []
    };
  }
}
