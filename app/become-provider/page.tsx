import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BecomeProvider } from '@/components/BecomeProvider';

export default function BecomeProviderPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-xl">
        <div className="max-w-4xl mx-auto px-6">
          <BecomeProvider />
        </div>
      </main>
      <Footer />
    </div>
  );
}
