import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Dashboard } from '@/components/Dashboard';

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-xl">
        <div className="max-w-7xl mx-auto px-6">
          <Dashboard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
