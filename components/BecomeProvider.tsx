'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { SparklesIcon, CheckIcon } from '@heroicons/react/24/solid';

export function BecomeProvider() {
  const { address, isConnected } = useAccount();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    dailyPrice: '',
    weeklyPrice: '',
    monthlyPrice: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }

    setIsSubmitting(true);
    // Simulate transaction
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('Provider registration successful! Your profile is now live.');
    setIsSubmitting(false);
  };

  const benefits = [
    'Build verifiable on-chain reputation',
    'Direct monetization with zero intermediary fees',
    'Gasless B402 payments for subscribers',
    'Transparent performance tracking',
    'Access to growing trader community',
    'Flexible pricing models'
  ];

  return (
    <div>
      <div className="text-center mb-xl">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <SparklesIcon className="w-8 h-8 text-bg" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Become a Signal Provider</h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Join SignalSpark and start building your reputation as a trusted trading signal provider on BSC
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-xl">
        <div className="bg-surface rounded-lg p-8 border border-white/5">
          <h2 className="text-2xl font-semibold mb-6">Why Become a Provider?</h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-text-secondary">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-surface rounded-lg p-8 border border-white/5">
          <h2 className="text-2xl font-semibold mb-6">Registration Form</h2>
          
          {!isConnected ? (
            <div className="text-center py-8">
              <p className="text-text-secondary mb-4">
                Please connect your wallet to register as a provider
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Provider Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary transition-colors duration-base"
                  placeholder="Your trading name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary transition-colors duration-base resize-none"
                  placeholder="Describe your trading strategy and experience"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Daily ($)</label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    value={formData.dailyPrice}
                    onChange={(e) => setFormData({ ...formData, dailyPrice: e.target.value })}
                    className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg text-text-primary focus:outline-none focus:border-primary transition-colors duration-base"
                    placeholder="5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Weekly ($)</label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    value={formData.weeklyPrice}
                    onChange={(e) => setFormData({ ...formData, weeklyPrice: e.target.value })}
                    className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg text-text-primary focus:outline-none focus:border-primary transition-colors duration-base"
                    placeholder="25"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Monthly ($)</label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    value={formData.monthlyPrice}
                    onChange={(e) => setFormData({ ...formData, monthlyPrice: e.target.value })}
                    className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg text-text-primary focus:outline-none focus:border-primary transition-colors duration-base"
                    placeholder="75"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-bg font-semibold rounded-lg hover:bg-accent transition-all duration-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                    Registering...
                  </>
                ) : (
                  'Register as Provider'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
