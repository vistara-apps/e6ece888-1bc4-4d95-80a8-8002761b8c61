'use client';

import Link from 'next/link';
import { ChartBarIcon, ShieldCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

export function Hero() {
  return (
    <section className="relative py-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Decentralized Trading Signals on BSC
          </h1>
          <p className="text-xl text-text-secondary mb-xl leading-relaxed">
            Empowering signal providers with verifiable on-chain reputation and enabling users to discover, 
            subscribe to, and act on trusted trading signals with gasless micropayments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-2xl">
            <Link 
              href="/providers"
              className="px-8 py-4 bg-primary text-bg font-semibold rounded-lg hover:bg-accent transition-all duration-base shadow-card hover:shadow-hover"
            >
              Discover Providers
            </Link>
            <Link 
              href="/become-provider"
              className="px-8 py-4 bg-surface border border-primary/30 text-text-primary font-semibold rounded-lg hover:border-primary transition-all duration-base"
            >
              Become a Provider
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface/50 backdrop-blur-sm p-6 rounded-lg border border-white/5">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ShieldCheckIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Verified Performance</h3>
              <p className="text-text-secondary text-sm">
                Immutable on-chain tracking of signal provider performance and reputation
              </p>
            </div>

            <div className="bg-surface/50 backdrop-blur-sm p-6 rounded-lg border border-white/5">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CurrencyDollarIcon className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Gasless Payments</h3>
              <p className="text-text-secondary text-sm">
                Zero gas fees with B402 micropayments for subscriptions and signal access
              </p>
            </div>

            <div className="bg-surface/50 backdrop-blur-sm p-6 rounded-lg border border-white/5">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ChartBarIcon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparent Metrics</h3>
              <p className="text-text-secondary text-sm">
                Real-time win rates, ROI, and performance data verified on BSC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
