import { EdiBridge } from '@agentic-commerce/edi-bridge';

async function main() {
  const bridge = new EdiBridge();
  const edifact = bridge.generateEdifactOrders('ORD-12345');
  console.log(edifact);
}
main();
