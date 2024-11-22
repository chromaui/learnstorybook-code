import { UseTasksPayload } from "#lib/useTasks.ts";
import TaskComponent from "./Task";

type TaskListProps = UseTasksPayload;

export default function TaskList({ tasks = [], updateTaskState, status }: TaskListProps) {
  // Filtered tasks (similar to the previous `selectFilteredTasks`)
  const filteredTasks = [
    ...tasks.filter((t) => t.state === "TASK_PINNED"),
    ...tasks.filter((t) => t.state !== "TASK_PINNED"),
  ].filter((t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED");

  const pinTask = (id: string) => updateTaskState(id, "TASK_PINNED");

  const archiveTask = (id: string) => updateTaskState(id, "TASK_ARCHIVED");

  if (status === "loading") {
    return (
      <div className="list-items" data-testid="loading">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
              <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items" key="empty" data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }

  return (
    <ul className="list-items" data-testid="success">
      {filteredTasks.map((task) => (
        <TaskComponent
          key={task.id}
          task={task}
          onPinTask={(task) => pinTask(task)}
          onArchiveTask={(task) => archiveTask(task)}
        />
      ))}
    </ul>
  );
}
