import { Component, signal } from '@angular/core';

import { InboxScreenComponent } from './components/inbox-screen.component';

@Component({
  selector: 'app-root',
  imports: [InboxScreenComponent],
  template: `<app-inbox-screen></app-inbox-screen>`,
})
export class App {
  protected readonly title = signal('taskbox');
}
