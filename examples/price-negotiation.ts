import { NegotiationEngine } from '@agentic-commerce/core';

async function main() {
  const engine = new NegotiationEngine();
  const result = await engine.negotiate({
    with: 'https://lieferant.de',
    items: [{ sku: 'PAPER-A4-500', quantity: 1000 }],
    config: {
      strategy: 'fair',
      priorities: ['price', 'payment_terms'],
      constraints: { max_price_per_unit: 3.50 },
      fallback: 'escalate_to_human'
    }
  });
  console.log('Result:', result);
}
main();
