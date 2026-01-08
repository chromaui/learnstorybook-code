import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, computed } from '@angular/core';

import { Store } from '../state/store';

import { TaskListComponent } from './task-list.component';

@Component({
  selector: 'app-inbox-screen',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  template: `
    <div *ngIf="isError()" class="page lists-show">
      <div class="wrapper-message">
        <span class="icon-face-sad"></span>
        <p class="title-message">Oh no!</p>
        <p class="subtitle-message">Something went wrong</p>
      </div>
    </div>

    <div *ngIf="!isError()" class="page lists-show">
      <nav>
        <h1 class="title-page">Taskbox</h1>
      </nav>
      <app-task-list></app-task-list>
    </div>
  `,
})
export class InboxScreenComponent implements OnInit {
  store = inject(Store);

  isError = computed(() => this.store.status() === 'error');

  ngOnInit(): void {
    this.store.fetchTasks();
  }
}
