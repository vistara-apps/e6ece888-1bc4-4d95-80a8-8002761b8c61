import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProviderList } from '@/components/ProviderList';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ProviderList />
      </main>
      <Footer />
    </div>
  );
}
