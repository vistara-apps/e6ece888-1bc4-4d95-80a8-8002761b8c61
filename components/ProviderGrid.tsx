'use client';

import { useState } from 'react';
import { ProviderCard } from './ProviderCard';
import { useMockProviders } from '@/hooks/useMockProviders';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/solid';

export function ProviderGrid() {
  const { providers } = useMockProviders();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'winRate' | 'roi' | 'reputation'>('winRate');

  const filteredProviders = providers
    .filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="w-5 h-5 text-text-secondary absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search providers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-surface border border-white/10 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary transition-colors duration-base"
          />
        </div>

        <div className="relative">
          <FunnelIcon className="w-5 h-5 text-text-secondary absolute left-4 top-1/2 -translate-y-1/2" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="pl-12 pr-8 py-3 bg-surface border border-white/10 rounded-lg text-text-primary focus:outline-none focus:border-primary transition-colors duration-base appearance-none cursor-pointer"
          >
            <option value="winRate">Sort by Win Rate</option>
            <option value="roi">Sort by ROI</option>
            <option value="reputation">Sort by Reputation</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProviders.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>

      {filteredProviders.length === 0 && (
        <div className="text-center py-xl">
          <p className="text-text-secondary text-lg">No providers found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
