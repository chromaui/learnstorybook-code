import { useMemo } from "react";

import TaskList from "./TaskList";
import { getFormattedDate } from "#utils/date";
import { useTasks } from "#lib/useTasks.ts";

export default function InboxScreen() {
  const { error, tasks, updateTaskState, status } = useTasks();
  
  const today = useMemo(() => getFormattedDate(new Date()), []);

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <p className="title-message">Oh no!</p>
          <p className="subtitle-message">Something went wrong</p>
        </div>
      </div>
    );
  }
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">Taskbox - {today}</h1>
      </nav>
      <TaskList tasks={tasks} updateTaskState={updateTaskState} status={status}/>
    </div>
  );
}
