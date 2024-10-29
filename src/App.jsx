import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dashboard } from './components/Dashboard';
import { showWatermark } from './utils/watermark';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    showWatermark();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col" style={{ background: 'var(--background-color)' }}>
        <header className="relative z-10 py-6 sm:py-8" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center tracking-tight" 
                style={{ color: 'var(--primary-text-color)' }}>
              Dashboard de Cotações
            </h1>
            <p className="text-sm sm:text-base text-center mt-2" style={{ color: 'var(--secondary-text-color)' }}>
              Monitoramento em tempo real
            </p>
          </div>
        </header>
        
        <main className="relative z-10 max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8 flex-grow">
          <Dashboard />
        </main>

        <footer className="py-4 sm:py-6 mt-6 sm:mt-8" style={{ 
          borderTop: '1px solid var(--border-color)',
          background: 'var(--secondary-background-color)'
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <p style={{ color: 'var(--secondary-text-color)' }} className="text-sm">
              Desenvolvido por{' '}
              <a 
                href="https://github.com/Carlinnn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium hover:underline transition-all duration-300"
                style={{ color: 'var(--accent-color)' }}
              >
                Carlos Barros
              </a>
              {' '}© {new Date().getFullYear()}
            </p>
            <p style={{ color: 'var(--secondary-text-color)' }} className="text-xs mt-1 opacity-75">
              Dashboard de Cotações em Tempo Real
            </p>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
