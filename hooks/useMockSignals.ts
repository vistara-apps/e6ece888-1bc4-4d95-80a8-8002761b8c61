import { useState, useEffect } from 'react';
import type { Signal } from '@/types';

export function useMockSignals(providerId: string) {
  const [signals, setSignals] = useState<Signal[]>([]);

  useEffect(() => {
    const mockSignals: Signal[] = [
      {
        id: '1',
        providerId,
        assetPair: 'BNB/USDT',
        type: 'LONG',
        entryPrice: 315.50,
        takeProfit: 335.00,
        stopLoss: 305.00,
        status: 'CLOSED',
        outcome: 'PROFIT',
        closingPrice: 332.80,
        openTimestamp: '2024-01-15T10:30:00Z',
        closeTimestamp: '2024-01-18T14:20:00Z',
        roi: 5.48
      },
      {
        id: '2',
        providerId,
        assetPair: 'ETH/USDT',
        type: 'SHORT',
        entryPrice: 2450.00,
        takeProfit: 2350.00,
        stopLoss: 2500.00,
        status: 'CLOSED',
        outcome: 'PROFIT',
        closingPrice: 2380.00,
        openTimestamp: '2024-01-12T08:15:00Z',
        closeTimestamp: '2024-01-14T16:45:00Z',
        roi: 2.86
      },
      {
        id: '3',
        providerId,
        assetPair: 'CAKE/USDT',
        type: 'LONG',
        entryPrice: 2.85,
        takeProfit: 3.20,
        stopLoss: 2.65,
        status: 'OPEN',
        openTimestamp: '2024-01-20T12:00:00Z'
      },
      {
        id: '4',
        providerId,
        assetPair: 'ADA/USDT',
        type: 'LONG',
        entryPrice: 0.52,
        takeProfit: 0.58,
        stopLoss: 0.49,
        status: 'CLOSED',
        outcome: 'LOSS',
        closingPrice: 0.49,
        openTimestamp: '2024-01-10T09:30:00Z',
        closeTimestamp: '2024-01-11T11:20:00Z',
        roi: -5.77
      },
      {
        id: '5',
        providerId,
        assetPair: 'DOT/USDT',
        type: 'SHORT',
        entryPrice: 7.85,
        takeProfit: 7.20,
        stopLoss: 8.15,
        status: 'CLOSED',
        outcome: 'PROFIT',
        closingPrice: 7.35,
        openTimestamp: '2024-01-08T14:00:00Z',
        closeTimestamp: '2024-01-09T10:30:00Z',
        roi: 6.37
      }
    ];

    setSignals(mockSignals);
  }, [providerId]);

  return { signals };
}
