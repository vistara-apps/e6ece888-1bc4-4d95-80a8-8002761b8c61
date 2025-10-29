'use client';

import Link from 'next/link';
import { CheckBadgeIcon, ChartBarIcon, TrophyIcon } from '@heroicons/react/24/solid';
import type { Provider } from '@/types';

interface ProviderCardProps {
  provider: Provider;
}

export function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <Link href={`/provider/${provider.id}`}>
      <div className="bg-surface p-6 rounded-lg border border-white/5 hover:border-primary/30 transition-all duration-base hover:shadow-card group cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-bg font-bold text-lg">
              {provider.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-base">
                  {provider.name}
                </h3>
                {provider.verified && (
                  <CheckBadgeIcon className="w-5 h-5 text-primary" />
                )}
              </div>
              <p className="text-text-secondary text-sm">{provider.totalSignals} signals</p>
            </div>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {provider.description}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-success font-semibold text-lg">{provider.winRate}%</div>
            <div className="text-text-secondary text-xs">Win Rate</div>
          </div>
          <div className="text-center">
            <div className="text-primary font-semibold text-lg">+{provider.roi}%</div>
            <div className="text-text-secondary text-xs">ROI</div>
          </div>
          <div className="text-center">
            <div className="text-accent font-semibold text-lg">{provider.reputation}</div>
            <div className="text-text-secondary text-xs">Score</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="text-sm text-text-secondary">
            From <span className="text-primary font-semibold">${provider.minPrice}</span>/month
          </div>
          <div className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-base">
            View Profile →
          </div>
        </div>
      </div>
    </Link>
  );
}
