import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TaskModule } from './tasks/task.module';
import { NgxsModule, Store } from '@ngxs/store';
import { TasksState } from './tasks/state/task.state';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
