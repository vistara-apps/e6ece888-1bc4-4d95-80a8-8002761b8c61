'use client';

import { 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  MagnifyingGlassIcon, 
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/solid';

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Immutable Performance Tracking',
    description: 'On-chain recording of signal providers\' performance with smart contract verification of all statistics.',
    color: 'text-primary'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Direct Monetization',
    description: 'Smart contracts facilitate direct payments from users to providers with zero intermediary fees.',
    color: 'text-success'
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'Verified Discovery',
    description: 'Find signal providers ranked by transparent on-chain performance metrics and verified track records.',
    color: 'text-accent'
  },
  {
    icon: BoltIcon,
    title: 'Flexible Micropayments',
    description: 'Pay for specific signals or subscribe with gasless B402 payments on BSC - minimal transaction costs.',
    color: 'text-primary'
  },
  {
    icon: ChartBarIcon,
    title: 'Real-time Analytics',
    description: 'Access comprehensive performance data including win rates, ROI, and trade history.',
    color: 'text-success'
  },
  {
    icon: ClockIcon,
    title: 'Instant Signal Delivery',
    description: 'Receive trading signals immediately upon subscription with on-chain proof of delivery.',
    color: 'text-accent'
  }
];

export function Features() {
  return (
    <section className="py-2xl bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose SignalSpark?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Built on Binance Smart Chain with cutting-edge features for signal providers and traders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-surface p-6 rounded-lg border border-white/5 hover:border-primary/30 transition-all duration-base hover:shadow-card group"
            >
              <div className={`w-12 h-12 bg-surface rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-base`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
