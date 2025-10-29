import { useState, useEffect } from 'react';
import type { Provider } from '@/types';

export function useMockProviders() {
  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    const mockProviders: Provider[] = [
      {
        id: '1',
        name: 'CryptoMaster Pro',
        description: 'Specialized in BNB and major altcoin swing trading with 5+ years experience',
        verified: true,
        winRate: 78,
        roi: 145,
        reputation: 95,
        totalSignals: 342,
        subscribers: 1250,
        minPrice: 5,
        joinedDate: '2023-01-15'
      },
      {
        id: '2',
        name: 'DeFi Signals Elite',
        description: 'Focus on DeFi tokens and yield farming opportunities on BSC',
        verified: true,
        winRate: 72,
        roi: 128,
        reputation: 88,
        totalSignals: 256,
        subscribers: 890,
        minPrice: 8,
        joinedDate: '2023-03-22'
      },
      {
        id: '3',
        name: 'Scalping Wizard',
        description: 'High-frequency trading signals for day traders and scalpers',
        verified: true,
        winRate: 65,
        roi: 98,
        reputation: 82,
        totalSignals: 567,
        subscribers: 1450,
        minPrice: 10,
        joinedDate: '2023-02-10'
      },
      {
        id: '4',
        name: 'Trend Hunter',
        description: 'Long-term trend analysis and position trading strategies',
        verified: false,
        winRate: 68,
        roi: 112,
        reputation: 75,
        totalSignals: 189,
        subscribers: 520,
        minPrice: 6,
        joinedDate: '2023-06-05'
      },
      {
        id: '5',
        name: 'Altcoin Alpha',
        description: 'Early-stage altcoin gems and emerging BSC projects',
        verified: true,
        winRate: 70,
        roi: 156,
        reputation: 90,
        totalSignals: 298,
        subscribers: 1100,
        minPrice: 12,
        joinedDate: '2023-04-18'
      },
      {
        id: '6',
        name: 'Technical Trader',
        description: 'Pure technical analysis with chart patterns and indicators',
        verified: true,
        winRate: 74,
        roi: 134,
        reputation: 86,
        totalSignals: 412,
        subscribers: 980,
        minPrice: 7,
        joinedDate: '2023-05-12'
      }
    ];

    setProviders(mockProviders);
  }, []);

  return { providers };
}
