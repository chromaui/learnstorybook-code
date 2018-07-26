import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [TaskComponent, TaskListComponent],
  declarations: [TaskComponent, TaskListComponent],
  providers: [],
})
export class TaskModule {}
