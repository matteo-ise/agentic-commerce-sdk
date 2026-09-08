export interface NegotiationConfig {
  strategy: 'conservative' | 'aggressive' | 'fair';
  priorities: ('price' | 'delivery_time' | 'payment_terms' | 'quantity_discount')[];
  constraints: {
    max_price_per_unit?: number;
    max_delivery_days?: number;
    min_payment_terms_days?: number;
    max_total_budget?: number;
  };
  fallback: 'accept_best_offer' | 'escalate_to_human' | 'abort';
}

export interface NegotiationRequest {
  with: string;
  items: { sku: string; quantity: number }[];
  config: NegotiationConfig;
}

export interface NegotiationResult {
  status: 'agreed' | 'escalated' | 'aborted';
  agreedPricePerUnit?: number;
  paymentTerms?: string;
  reason?: string;
}

export class NegotiationEngine {
  async negotiate(req: NegotiationRequest): Promise<NegotiationResult> {
    console.log(`Negotiating with ${req.with}...`);
    if (req.config.strategy === 'fair') {
      return {
        status: 'agreed',
        agreedPricePerUnit: req.config.constraints?.max_price_per_unit ? req.config.constraints.max_price_per_unit - 0.1 : 3.40,
        paymentTerms: 'net_30'
      };
    }
    return { status: 'escalated', reason: 'Unable to reach target price' };
  }
}
