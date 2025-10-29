'use client';

import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ChartBarIcon, SparklesIcon } from '@heroicons/react/24/solid';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <SparklesIcon className="w-5 h-5 text-bg" />
            </div>
            <span className="text-xl font-semibold group-hover:text-primary transition-colors duration-base">
              SignalSpark
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/providers" 
              className="text-text-secondary hover:text-text-primary transition-colors duration-base"
            >
              Providers
            </Link>
            <Link 
              href="/dashboard" 
              className="text-text-secondary hover:text-text-primary transition-colors duration-base"
            >
              Dashboard
            </Link>
            <Link 
              href="/become-provider" 
              className="text-text-secondary hover:text-text-primary transition-colors duration-base"
            >
              Become a Provider
            </Link>
          </nav>

          <ConnectButton />
        </div>
      </div>
    </header>
  );
}
