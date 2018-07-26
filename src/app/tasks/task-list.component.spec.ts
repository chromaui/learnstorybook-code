import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './task.component';

import { withPinnedTasks } from './task-list.stories';
import { By } from '@angular/platform-browser';

describe('TaskList component', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent, TaskListComponent],
    }).compileComponents();
  }));

  it('renders pinned tasks at the start of the list', () => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    component.tasks = withPinnedTasks;

    fixture.detectChanges();
    const lastTaskInput = fixture.debugElement.query(
      By.css('.list-item:nth-child(1)'),
    );

    // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
    expect(lastTaskInput.nativeElement.id).toEqual('6');
  });
});
