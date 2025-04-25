import React from 'react';

import { AppLayout } from '@/layouts/appLayout';
import { ThemeProvider } from '@/context/Theme/ThemeProvider';
import { TasksProvider } from '@/context/Tasks/TasksProvider';

const App = () => {
  return (
    <TasksProvider>
      <ThemeProvider>
        <AppLayout />
      </ThemeProvider>
    </TasksProvider>
  );
};

export default App;
