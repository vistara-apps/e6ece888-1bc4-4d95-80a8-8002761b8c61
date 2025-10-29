'use client';

import Link from 'next/link';
import { SparklesIcon } from '@heroicons/react/24/solid';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 py-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <SparklesIcon className="w-5 h-5 text-bg" />
              </div>
              <span className="text-xl font-semibold">SignalSpark</span>
            </div>
            <p className="text-text-secondary text-sm">
              Empowering signal providers and enriching signal consumption on Binance Smart Chain.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/providers" className="text-text-secondary hover:text-primary transition-colors duration-base">
                  Browse Providers
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-text-secondary hover:text-primary transition-colors duration-base">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/become-provider" className="text-text-secondary hover:text-primary transition-colors duration-base">
                  Become a Provider
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://docs.bnbchain.org" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors duration-base">
                  BSC Documentation
                </a>
              </li>
              <li>
                <a href="https://bscscan.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors duration-base">
                  BSCScan Explorer
                </a>
              </li>
              <li>
                <a href="https://b402.ai" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors duration-base">
                  B402 Payments
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Network</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span className="text-text-secondary">BSC Mainnet</span>
              </div>
              <div className="text-text-secondary">Chain ID: 56</div>
              <div className="text-text-secondary">Native Token: BNB</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-text-secondary">
          <p>© 2024 SignalSpark. Built on Binance Smart Chain with B402 gasless payments.</p>
        </div>
      </div>
    </footer>
  );
}
