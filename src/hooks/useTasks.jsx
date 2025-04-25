import { useContext } from 'react';

import { TasksContext } from '@/context/Tasks/TasksContext';

export const useTasks = () => useContext(TasksContext);
