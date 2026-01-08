// A simple Angular state management implementation using signals update methods and initial data.
// A true app would be more complex and separated into different files.
import type { TaskData } from '../types';

import { Injectable, signal, computed } from '@angular/core';

interface TaskBoxState {
  tasks: TaskData[];
  status: 'idle' | 'loading' | 'error' | 'success';
  error: string | null;
}

const initialState: TaskBoxState = {
  tasks: [],
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
  async fetchTasks(): Promise<void> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1');
      const data = await response.json();
      const result = data
        .map((task: { id: number; title: string; completed: boolean }) => ({
          id: `${task.id}`,
          title: task.title,
          state: task.completed ? 'TASK_ARCHIVED' : 'TASK_INBOX',
        }))
        .filter((task: TaskData) => task.state === 'TASK_INBOX' || task.state === 'TASK_PINNED');

      this.state.update((currentState) => ({
        ...currentState,
        tasks: result,
        status: 'success',
        error: null,
      }));
    } catch (error) {
      this.state.update((currentState) => ({
        ...currentState,
        error: error instanceof Error ? error.message : 'Failed to fetch tasks',
      }));
    }
  }
}
