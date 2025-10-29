'use client';

import { useState } from 'react';
import { useMockProviders } from '@/hooks/useMockProviders';
import { CheckBadgeIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/solid';
import { SubscriptionPlans } from './SubscriptionPlans';
import { SignalHistory } from './SignalHistory';

interface ProviderProfileProps {
  providerId: string;
}

export function ProviderProfile({ providerId }: ProviderProfileProps) {
  const { providers } = useMockProviders();
  const provider = providers.find(p => p.id === providerId);
  const [activeTab, setActiveTab] = useState<'signals' | 'plans'>('signals');

  if (!provider) {
    return (
      <div className="text-center py-xl">
        <p className="text-text-secondary text-lg">Provider not found</p>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-surface rounded-lg p-8 mb-8 border border-white/5">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-bg font-bold text-3xl">
            {provider.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{provider.name}</h1>
              {provider.verified && (
                <CheckBadgeIcon className="w-7 h-7 text-primary" />
              )}
            </div>
            <p className="text-text-secondary mb-4">{provider.description}</p>
            <div className="flex items-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <ChartBarIcon className="w-4 h-4" />
                <span>{provider.totalSignals} signals provided</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4" />
                <span>Member since {new Date(provider.joinedDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-bg/50 p-4 rounded-lg">
            <div className="text-success font-bold text-2xl mb-1">{provider.winRate}%</div>
            <div className="text-text-secondary text-sm">Win Rate</div>
          </div>
          <div className="bg-bg/50 p-4 rounded-lg">
            <div className="text-primary font-bold text-2xl mb-1">+{provider.roi}%</div>
            <div className="text-text-secondary text-sm">Average ROI</div>
          </div>
          <div className="bg-bg/50 p-4 rounded-lg">
            <div className="text-accent font-bold text-2xl mb-1">{provider.reputation}</div>
            <div className="text-text-secondary text-sm">Reputation Score</div>
          </div>
          <div className="bg-bg/50 p-4 rounded-lg">
            <div className="text-text-primary font-bold text-2xl mb-1">{provider.subscribers}</div>
            <div className="text-text-secondary text-sm">Active Subscribers</div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-4 border-b border-white/10">
          <button
            onClick={() => setActiveTab('signals')}
            className={`px-6 py-3 font-medium transition-colors duration-base ${
              activeTab === 'signals'
                ? 'text-primary border-b-2 border-primary'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Signal History
          </button>
          <button
            onClick={() => setActiveTab('plans')}
            className={`px-6 py-3 font-medium transition-colors duration-base ${
              activeTab === 'plans'
                ? 'text-primary border-b-2 border-primary'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Subscription Plans
          </button>
        </div>
      </div>

      {activeTab === 'signals' ? (
        <SignalHistory providerId={providerId} />
      ) : (
        <SubscriptionPlans provider={provider} />
      )}
    </div>
  );
}
