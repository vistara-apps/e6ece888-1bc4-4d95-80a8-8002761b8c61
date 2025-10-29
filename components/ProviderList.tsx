'use client';

import Link from 'next/link';
import { ProviderCard } from './ProviderCard';
import { useMockProviders } from '@/hooks/useMockProviders';

export function ProviderList() {
  const { providers } = useMockProviders();
  const topProviders = providers.slice(0, 3);

  return (
    <section className="py-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-xl">
          <div>
            <h2 className="text-3xl font-bold mb-2">Top Signal Providers</h2>
            <p className="text-text-secondary">
              Verified providers with proven track records on BSC
            </p>
          </div>
          <Link 
            href="/providers"
            className="px-6 py-3 bg-surface border border-primary/30 text-text-primary font-medium rounded-lg hover:border-primary transition-all duration-base"
          >
            View All
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topProviders.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </section>
  );
}
