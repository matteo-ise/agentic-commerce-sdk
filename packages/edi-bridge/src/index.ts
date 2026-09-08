export class EdiBridge {
  generateEdifactOrders(orderId: string): string {
    const unh = `UNH+1+ORDERS:D:96A:UN:EAN008'`;
    const bgm = `BGM+220+${orderId}+9'`;
    const dtm = `DTM+137:20260908:102'`;
    const unt = `UNT+4+1'`;
    return `${unh}\n${bgm}\n${dtm}\n${unt}`;
  }
}
