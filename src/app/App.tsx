import { AppLayout } from '@/layouts/appLayout';
import { ThemeProvider } from '@/app/providers/context/Theme/ThemeProvider';

import './styles/index.css';

const App = () => {
  return (
    <div data-testid='app-container'>
      <ThemeProvider data-testid='theme-provider'>
        <AppLayout />
      </ThemeProvider>
    </div>
  );
};

export default App;
