'use client';

import { useMockSignals } from '@/hooks/useMockSignals';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, ClockIcon } from '@heroicons/react/24/solid';

interface SignalHistoryProps {
  providerId: string;
}

export function SignalHistory({ providerId }: SignalHistoryProps) {
  const { signals } = useMockSignals(providerId);

  return (
    <div className="space-y-4">
      {signals.map((signal) => (
        <div
          key={signal.id}
          className="bg-surface rounded-lg p-6 border border-white/5 hover:border-primary/30 transition-all duration-base"
        >
          <div className="flex items-start justify-between mb-4">
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
                <h3 className="font-semibold text-lg">{signal.assetPair}</h3>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <ClockIcon className="w-4 h-4" />
                  <span>{new Date(signal.openTimestamp).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
              signal.status === 'CLOSED'
                ? signal.outcome === 'PROFIT'
                  ? 'bg-success/10 text-success'
                  : 'bg-danger/10 text-danger'
                : 'bg-primary/10 text-primary'
            }`}>
              {signal.status}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-text-secondary text-xs mb-1">Entry Price</div>
              <div className="font-semibold">${signal.entryPrice.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-text-secondary text-xs mb-1">Take Profit</div>
              <div className="font-semibold text-success">${signal.takeProfit.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-text-secondary text-xs mb-1">Stop Loss</div>
              <div className="font-semibold text-danger">${signal.stopLoss.toLocaleString()}</div>
            </div>
            {signal.closingPrice && (
              <div>
                <div className="text-text-secondary text-xs mb-1">Closing Price</div>
                <div className="font-semibold">${signal.closingPrice.toLocaleString()}</div>
              </div>
            )}
          </div>

          {signal.status === 'CLOSED' && signal.roi && (
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className={`text-sm font-semibold ${
                signal.roi > 0 ? 'text-success' : 'text-danger'
              }`}>
                ROI: {signal.roi > 0 ? '+' : ''}{signal.roi}%
              </div>
            </div>
          )}
        </div>
      ))}

      {signals.length === 0 && (
        <div className="text-center py-xl">
          <p className="text-text-secondary">No signals available yet</p>
        </div>
      )}
    </div>
  );
}
