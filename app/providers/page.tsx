import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProviderGrid } from '@/components/ProviderGrid';

export default function ProvidersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-xl">
            <h1 className="text-4xl font-semibold mb-4">Discover Signal Providers</h1>
            <p className="text-text-secondary text-lg">
              Browse verified trading signal providers with transparent on-chain performance metrics
            </p>
          </div>
          <ProviderGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
