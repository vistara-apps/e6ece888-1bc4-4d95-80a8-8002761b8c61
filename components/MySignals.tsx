'use client';

import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/solid';

export function MySignals() {
  const recentSignals = [
    {
      id: '1',
      assetPair: 'BNB/USDT',
      type: 'LONG',
      entryPrice: 315.50,
      currentPrice: 322.80,
      roi: 2.31,
      status: 'OPEN'
    },
    {
      id: '2',
      assetPair: 'ETH/USDT',
      type: 'SHORT',
      entryPrice: 2450.00,
      currentPrice: 2420.00,
      roi: 1.22,
      status: 'OPEN'
    }
  ];

  return (
    <div className="bg-surface rounded-lg p-6 border border-white/5">
      <h2 className="text-2xl font-semibold mb-6">Recent Signals</h2>
      
      <div className="space-y-4">
        {recentSignals.map((signal) => (
          <div
            key={signal.id}
            className="bg-bg/50 rounded-lg p-4 border border-white/5"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  signal.type === 'LONG' ? 'bg-success/10' : 'bg-danger/10'
                }`}>
                  {signal.type === 'LONG' ? (
                    <ArrowTrendingUpIcon className="w-5 h-5 text-success" />
                  ) : (
                    <ArrowTrendingDownIcon className="w-5 h-5 text-danger" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">{signal.assetPair}</h3>
                  <div className="text-xs text-text-secondary">{signal.type}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-sm font-semibold ${
                  signal.roi > 0 ? 'text-success' : 'text-danger'
                }`}>
                  {signal.roi > 0 ? '+' : ''}{signal.roi}%
                </div>
                <div className="text-xs text-text-secondary">{signal.status}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-text-secondary text-xs mb-1">Entry</div>
                <div className="font-semibold">${signal.entryPrice.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-text-secondary text-xs mb-1">Current</div>
                <div className="font-semibold">${signal.currentPrice.toLocaleString()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {recentSignals.length === 0 && (
        <div className="text-center py-8">
          <p className="text-text-secondary">No active signals</p>
        </div>
      )}
    </div>
  );
}
