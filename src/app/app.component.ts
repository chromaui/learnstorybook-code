import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: ` <app-inbox-screen></app-inbox-screen> `,
})
export class AppComponent {
  title = 'taskbox';
}
