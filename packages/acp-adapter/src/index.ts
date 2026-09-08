export class AcpAdapter {
  async handleSharedPaymentToken(token: string): Promise<boolean> {
    console.log(`Processing ACP SPT: ${token}`);
    return true;
  }
}
