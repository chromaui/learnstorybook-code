import type { TaskData } from '../types';

import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TaskComponent } from './task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  template: `
    <div class="list-items">
      <div *ngIf="loading">loading</div>
      <div *ngIf="!loading && tasks.length === 0">empty</div>
      <app-task
        *ngFor="let task of tasks"
        [task]="task"
        (onArchiveTask)="onArchiveTask.emit($event)"
        (onPinTask)="onPinTask.emit($event)"
      >
      </app-task>
    </div>
  `,
})
export class TaskListComponent {
  /**
   * The list of tasks
   */
  @Input() tasks: TaskData[] = [];

  /**
   * Checks if it's in loading state
   */
  @Input() loading = false;

  /**
   * Event to change the task to pinned
   */
  @Output()
  onPinTask = new EventEmitter<Event>();

  /**
   * Event to change the task to archived
   */
  @Output()
  onArchiveTask = new EventEmitter<Event>();
}
