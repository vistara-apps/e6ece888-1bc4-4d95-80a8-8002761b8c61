import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProviderProfile } from '@/components/ProviderProfile';

export default async function ProviderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-xl">
        <div className="max-w-7xl mx-auto px-6">
          <ProviderProfile providerId={id} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
