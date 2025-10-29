'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { bsc, bscTestnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const config = getDefaultConfig({
  appName: 'SignalSpark',
  projectId: '9f4bd472c01ba49282b42e5e1874c2af',
  chains: [bsc, bscTestnet],
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({
          accentColor: 'hsl(43, 96%, 50%)',
          accentColorForeground: 'hsl(240, 10%, 4%)',
          borderRadius: 'medium',
        })}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
