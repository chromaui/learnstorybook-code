import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Store, NgxsModule } from '@ngxs/store';
import { TasksState, ErrorFromServer } from '../state/task.state';
import { TaskModule } from '../task.module';

import { Component } from '@angular/core';

@Component({
  template: `<inbox-screen></inbox-screen>`,
})
class HostDispatchErrorComponent {
  constructor(store: Store) {
    store.dispatch(new ErrorFromServer('Error'));
  }
}

storiesOf('InboxScreen', module)
  .addDecorator(
    moduleMetadata({
      declarations: [HostDispatchErrorComponent],
      imports: [TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }),
  )
  .add('default', () => {
    return {
      template: `<inbox-screen></inbox-screen>`,
    };
  })
  .add('error', () => {
    return {
      template: `<pure-inbox-screen [error]="error"></pure-inbox-screen>`,
      props: {
        error: 'Something!',
      },
    };
  })
  .add('Connected Error', () => {
    return {
      component: HostDispatchErrorComponent,
    };
  });