import { create } from 'zustand';
import { Task } from '@/shared/types/task';

interface ITaskStore {
  tasks: Task[];
}

export const useTaskStore = create<ITaskStore>()((set) => ({
  tasks: [],
}));
