'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { useB402Payment } from '@/hooks/useB402Payment';
import { CheckIcon, BoltIcon } from '@heroicons/react/24/solid';
import type { Provider } from '@/types';

interface SubscriptionPlansProps {
  provider: Provider;
}

export function SubscriptionPlans({ provider }: SubscriptionPlansProps) {
  const { address } = useAccount();
  const { pay, isPaying } = useB402Payment();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'daily',
      name: 'Daily Pass',
      duration: '1 day',
      price: provider.minPrice,
      features: ['Access to all signals', '24-hour access', 'Real-time notifications']
    },
    {
      id: 'weekly',
      name: 'Weekly',
      duration: '7 days',
      price: provider.minPrice * 5,
      features: ['Access to all signals', '7-day access', 'Real-time notifications', 'Priority support'],
      popular: true
    },
    {
      id: 'monthly',
      name: 'Monthly',
      duration: '30 days',
      price: provider.minPrice * 15,
      features: ['Access to all signals', '30-day access', 'Real-time notifications', 'Priority support', 'Performance analytics']
    }
  ];

  const handleSubscribe = async (planId: string, price: number) => {
    if (!address) {
      alert('Please connect your wallet first');
      return;
    }

    setSelectedPlan(planId);
    try {
      const result = await pay({
        amount: price.toString(),
        recipientAddress: '0xa23beff60ad1b91f35e91476475f9e3eba0897d7' // Provider's address
      });
      
      alert(`Subscription successful! Transaction: ${result.txHash}`);
    } catch (error) {
      console.error('Subscription failed:', error);
      alert('Subscription failed. Please try again.');
    } finally {
      setSelectedPlan(null);
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`bg-surface rounded-lg p-6 border transition-all duration-base ${
            plan.popular
              ? 'border-primary shadow-card scale-105'
              : 'border-white/5 hover:border-primary/30'
          }`}
        >
          {plan.popular && (
            <div className="bg-primary text-bg text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
              MOST POPULAR
            </div>
          )}
          
          <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
          <div className="mb-4">
            <span className="text-3xl font-bold text-primary">${plan.price}</span>
            <span className="text-text-secondary ml-2">/ {plan.duration}</span>
          </div>

          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleSubscribe(plan.id, plan.price)}
            disabled={isPaying && selectedPlan === plan.id}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-base flex items-center justify-center gap-2 ${
              plan.popular
                ? 'bg-primary text-bg hover:bg-accent'
                : 'bg-surface border border-primary/30 text-text-primary hover:border-primary'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isPaying && selectedPlan === plan.id ? (
              <>
                <div className="w-5 h-5 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <BoltIcon className="w-5 h-5" />
                Subscribe with B402
              </>
            )}
          </button>
        </div>
      ))}
    </div>
  );
}
