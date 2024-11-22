import { Task } from "../types";

type TaskProps = {
  task: Task;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

export default function TaskComponent({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskProps) {
  return (
    <li className={`list-item ${state}`}>
      <label
        htmlFor="checked"
        aria-label={`Archive ${title}`}
        className="checkbox"
        onClick={() => onArchiveTask(id)} 
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
        />
        <span className="checkbox-custom"/>
      </label>

      <label htmlFor="title" aria-label={title} className="title">
        {title}
      </label>

      {state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`Pin ${title}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </li>
  );
}
