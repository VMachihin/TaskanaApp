import { useState } from 'react';
import { TasksContext } from './TasksContext';

export const TasksProvider = ({ children }) => {
  const [isOpenTaskEditor, setIsOpenTaskEditor] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleOpenTaskEditor = () => {
    setIsOpenTaskEditor(true);
  };

  const handleCloseTaskEditor = () => {
    setIsOpenTaskEditor(false);
  };

  const addTask = (task) => {
    setTasks((prev) => [task, ...prev]);
  };

  return (
    <TasksContext.Provider
      value={{
        isOpenTaskEditor,
        handleOpenTaskEditor,
        handleCloseTaskEditor,
        tasks,
        addTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
