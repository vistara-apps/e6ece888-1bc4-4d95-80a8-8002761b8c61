'use client';

import { useAccount } from 'wagmi';
import { MySubscriptions } from './MySubscriptions';
import { MySignals } from './MySignals';

export function Dashboard() {
  const { address, isConnected } = useAccount();

  if (!isConnected) {
    return (
      <div className="text-center py-2xl">
        <h2 className="text-2xl font-semibold mb-4">Connect Your Wallet</h2>
        <p className="text-text-secondary">
          Please connect your wallet to view your dashboard
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-xl">
        <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
        <p className="text-text-secondary">
          Manage your subscriptions and track your signal performance
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <MySubscriptions />
        <MySignals />
      </div>
    </div>
  );
}
