import { DiscoveryService, CartService } from '@agentic-commerce/core';

async function main() {
  const discovery = new DiscoveryService();
  const catalog = await discovery.discover('https://lieferant.de/.well-known/mcp.json');
  console.log(catalog);

  const cart = new CartService('cart-1', 'https://lieferant.de');
  await cart.addItem({ sku: 'PAPER-A4-500', quantity: 100 });
  await cart.requestQuote();
  await cart.submit();
}
main();
