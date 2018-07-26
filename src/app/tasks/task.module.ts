import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskComponent } from './task.component';

@NgModule({
  imports: [CommonModule],
  exports: [TaskComponent],
  declarations: [TaskComponent],
  providers: [],
})
export class TaskModule {}
