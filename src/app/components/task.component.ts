import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="list-item">
      <label [attr.aria-label]="task.title + ''" for="title">
        <input type="text" [value]="task.title" readonly="true" id="title" name="title" />
      </label>
    </div>
  `,
})
export class TaskComponent {
  /**
   * The shape of the task object
   */
  @Input() task: any;

  @Output()
  onPinTask = new EventEmitter<Event>();

  @Output()
  onArchiveTask = new EventEmitter<Event>();
}
