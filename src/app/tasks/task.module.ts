import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from './components/task.component';
import { PureTaskListComponent } from './components/pure-task-list.component';
import { TaskListComponent } from './containers/task-list.component';
import { TasksState } from './state/task.state';
import { InboxScreenComponent } from './containers/inbox-screen.component';
import { PureInboxScreenComponent } from './components/pure-inbox-screen.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [
    TaskComponent,
    PureTaskListComponent,
    TaskListComponent,
    PureInboxScreenComponent,
    InboxScreenComponent,
  ],
  declarations: [
    TaskComponent,
    PureTaskListComponent,
    TaskListComponent,
    PureInboxScreenComponent,
    InboxScreenComponent,
  ],
  providers: [],
})
export class TaskModule {}
