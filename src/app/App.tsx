import { AppLayout } from '@/layouts/appLayout';
import { ThemeProvider } from '@/app/providers/context/Theme/ThemeProvider';

import './styles/index.css';

const App = () => {
  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  );
};

export default App;
