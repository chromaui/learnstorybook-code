import { useDispatch, useSelector } from "../lib/hooks";
import { updateTaskState } from "../lib/store";
import { selectFilteredTasks, selectTaskbox } from "../lib/selectors";
import Task from "./Task";

export default function TaskList() {
  // We're retrieving our state from the store
  const tasks = useSelector(selectFilteredTasks);

  const { status } = useSelector(selectTaskbox);

  const dispatch = useDispatch();

  const pinTask = (id: string) => {
    // We're dispatching the Pinned event back to our store
    dispatch(updateTaskState({ id, newTaskState: "TASK_PINNED" }));
  };
  const archiveTask = (id: string) => {
    // We're dispatching the Archive event back to our store
    dispatch(updateTaskState({ id, newTaskState: "TASK_ARCHIVED" }));
  };
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (status === "loading") {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }

  return (
    <div className="list-items" data-testid="success" key={"success"}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onPinTask={(task) => pinTask(task)}
          onArchiveTask={(task) => archiveTask(task)}
        />
      ))}
    </div>
  );
}
