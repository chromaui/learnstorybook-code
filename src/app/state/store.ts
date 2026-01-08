// A simple Angular state management implementation using signals update methods and initial data.
// A true app would be more complex and separated into different files.
import type { TaskData } from '../types';

import { Injectable, signal, computed } from '@angular/core';

interface TaskBoxState {
  tasks: TaskData[];
  status: 'idle' | 'loading' | 'error' | 'success';
  error: string | null;
}

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server. Let's not worry about that now
 */
const defaultTasks: TaskData[] = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

const initialState: TaskBoxState = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
};

@Injectable({
  providedIn: 'root',
})
export class Store {
  private state = signal<TaskBoxState>(initialState);

  // Public readonly signal for components to subscribe to
  readonly tasks = computed(() => this.state().tasks);
  readonly status = computed(() => this.state().status);
  readonly error = computed(() => this.state().error);

  readonly getFilteredTasks = computed(() => {
    const filteredTasks = this.state().tasks.filter(
      (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
    return filteredTasks;
  });

  archiveTask(id: string): void {
    this.state.update((currentState) => {
      const filteredTasks = currentState.tasks
        .map(
          (task): TaskData =>
            task.id === id ? { ...task, state: 'TASK_ARCHIVED' as TaskData['state'] } : task
        )
        .filter((t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED');

      return {
        ...currentState,
        tasks: filteredTasks,
      };
    });
  }

  pinTask(id: string): void {
    this.state.update((currentState) => ({
      ...currentState,
      tasks: currentState.tasks.map((task) =>
        task.id === id ? { ...task, state: 'TASK_PINNED' } : task
      ),
    }));
  }
}
