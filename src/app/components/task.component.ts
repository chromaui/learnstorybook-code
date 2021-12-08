import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  template: `
    <div class="list-item {{ task?.state }}">
      <label class="checkbox">
        <input
          type="checkbox"
          [defaultChecked]="task?.state === 'TASK_ARCHIVED'"
          disabled="true"
          name="checked"
        />
        <span
          class="checkbox-custom"
          (click)="onArchive(task.id)"
          attr.aria-label="archiveTask-{{ task?.id }}"
        ></span>
      </label>
      <div class="title">
        <input
          type="text"
          [value]="task?.title"
          readonly="true"
          placeholder="Input title"
          style="text-overflow: ellipsis;"
        />
      </div>
      <div class="actions">
        <a *ngIf="task?.state !== 'TASK_ARCHIVED'" (click)="onPin(task.id)">
          <span
            class="icon-star"
            attr.aria-label="pinTask-{{ task?.id }}"
          ></span>
        </a>
      </div>
    </div>
  `,
})
export class TaskComponent {
  @Input() task: Task;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();

  /**
   * Component method to trigger the onPin event
   * @param id string
   */
  onPin(id: any) {
    this.onPinTask.emit(id);
  }
  /**
   * Component method to trigger the onArchive event
   * @param id string
   */
  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }
}
