import { create } from 'zustand';
import { Task } from '@/shared/types/task';

interface ITaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
}

interface ITaskEditorStore {
  isOpenTaskEditor: boolean;
  toggleTaskEditor: () => void;
}

export const useTaskStore = create<ITaskStore>()((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));

export const useTaskEditorStore = create<ITaskEditorStore>()((set) => ({
  isOpenTaskEditor: false,
  toggleTaskEditor: () =>
    set((state) => ({ isOpenTaskEditor: !state.isOpenTaskEditor })),
}));
