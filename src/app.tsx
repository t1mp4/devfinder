import { useState } from 'preact/hooks';
import { toast, Toaster } from 'react-hot-toast';
import { useThemeSwitcher } from './hooks/useThemeSwitcher';
import { useGitHubAPI } from './hooks/useGitHubAPI';
import Header from './layout/Header';
import UsernameSearch from './layout/UsernameSearch';
import Card from './layout/Card';
import type { JSXInternal } from 'preact/src/jsx';

const App = (): JSXInternal.Element => {
  const [username, setUsername] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const { isDarkMode, toggleDarkMode } = useThemeSwitcher();

  const { devData, updateDevData } = useGitHubAPI((errorMessage: string) => {
    toast.error(errorMessage, {
      ariaProps: {
        role: 'alert',
        'aria-live': 'assertive',
      },
    });
  });

  const handleUsernameChange = (e: JSXInternal.TargetedEvent<HTMLInputElement, Event>) => {
    setUsername((e.target as HTMLInputElement).value);
  };

  const handleUsernameFormSubmit = async () => {
    setIsFetching(true);
    await updateDevData(username);
    setIsFetching(false);

    setUsername('');
  };

  return (
    <div id="app-root" data-dark-mode={isDarkMode}>
      <Toaster
        toastOptions={{
          className: 'font-bold text-ui-warning bg-bg-secondary shadow-xl dark:shadow-none',
          duration: 4000,
          error: {
            iconTheme: {
              primary: 'currentColor',
            },
          },
        }}
      />
      <div className="px-6 py-8 max-w-[36rem] lg:max-w-[46rem] mx-auto md:py-20">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <main className="mt-9">
          <UsernameSearch
            value={username}
            handleChange={handleUsernameChange}
            handleSubmit={handleUsernameFormSubmit}
          />
          <section className="mt-4" aria-live="polite" aria-busy={isFetching}>
            <Card data={devData} isFetching={isFetching} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
