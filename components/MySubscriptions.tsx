'use client';

import { useMockProviders } from '@/hooks/useMockProviders';
import { ClockIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export function MySubscriptions() {
  const { providers } = useMockProviders();
  const activeSubscriptions = providers.slice(0, 2);

  return (
    <div className="bg-surface rounded-lg p-6 border border-white/5">
      <h2 className="text-2xl font-semibold mb-6">My Subscriptions</h2>
      
      <div className="space-y-4">
        {activeSubscriptions.map((provider) => (
          <Link 
            key={provider.id}
            href={`/provider/${provider.id}`}
            className="block bg-bg/50 rounded-lg p-4 border border-white/5 hover:border-primary/30 transition-all duration-base"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-bg font-bold">
                {provider.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{provider.name}</h3>
                  {provider.verified && (
                    <CheckBadgeIcon className="w-4 h-4 text-primary" />
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <ClockIcon className="w-4 h-4" />
                  <span>Expires in 23 days</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div>
                <div className="text-success font-semibold">{provider.winRate}%</div>
                <div className="text-text-secondary text-xs">Win Rate</div>
              </div>
              <div>
                <div className="text-primary font-semibold">+{provider.roi}%</div>
                <div className="text-text-secondary text-xs">ROI</div>
              </div>
              <div>
                <div className="text-text-primary font-semibold">{provider.totalSignals}</div>
                <div className="text-text-secondary text-xs">Signals</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {activeSubscriptions.length === 0 && (
        <div className="text-center py-8">
          <p className="text-text-secondary mb-4">No active subscriptions</p>
          <Link 
            href="/providers"
            className="inline-block px-6 py-2 bg-primary text-bg font-semibold rounded-lg hover:bg-accent transition-colors duration-base"
          >
            Browse Providers
          </Link>
        </div>
      )}
    </div>
  );
}
