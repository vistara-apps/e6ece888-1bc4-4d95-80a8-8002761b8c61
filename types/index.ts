export interface Provider {
  id: string;
  name: string;
  description: string;
  verified: boolean;
  winRate: number;
  roi: number;
  reputation: number;
  totalSignals: number;
  subscribers: number;
  minPrice: number;
  joinedDate: string;
}

export interface Signal {
  id: string;
  providerId: string;
  assetPair: string;
  type: 'LONG' | 'SHORT';
  entryPrice: number;
  takeProfit: number;
  stopLoss: number;
  status: 'OPEN' | 'CLOSED' | 'CANCELED';
  outcome?: 'PROFIT' | 'LOSS' | 'NEUTRAL';
  closingPrice?: number;
  openTimestamp: string;
  closeTimestamp?: string;
  roi?: number;
}

export interface SubscriptionPlan {
  id: string;
  providerId: string;
  duration: number;
  price: number;
  currency: string;
  description: string;
}

export interface UserSubscription {
  id: string;
  userId: string;
  providerId: string;
  planId: string;
  paymentType: 'SUBSCRIPTION' | 'MICROPAYMENT';
  amountPaid: number;
  currency: string;
  startTimestamp: string;
  endTimestamp: string;
}
