import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { Store } from '../state/store';

import { PureTaskListComponent } from './pure-task-list.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, PureTaskListComponent],
  template: `
    <app-pure-task-list
      [tasks]="store.getFilteredTasks()"
      (onArchiveTask)="store.archiveTask($any($event))"
      (onPinTask)="store.pinTask($any($event))"
    ></app-pure-task-list>
  `,
})
export class TaskListComponent {
  store = inject(Store);
}
