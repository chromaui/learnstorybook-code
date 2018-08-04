import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from './components/task.component';
import { PureTaskListComponent } from './components/pure-task-list.component';
import { TaskListComponent } from './containers/task-list.component';
import { TasksState } from './state/task.state';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, PureTaskListComponent, TaskListComponent],
  declarations: [TaskComponent, PureTaskListComponent, TaskListComponent],
  providers: [],
})
export class TaskModule {}
