import { useEffect, useMemo } from "react";

import { useDispatch, useSelector } from "../lib/hooks";
import { fetchTasks } from "../lib/store";
import { selectTaskbox } from "../lib/selectors";
import TaskList from "./TaskList";
import { getFormattedDate } from "#utils/date";

export default function InboxScreen() {
  const dispatch = useDispatch();
  // We're retrieving the error field from our updated store
  const { error } = useSelector(selectTaskbox);
  // The useEffect triggers the data fetching when the component is mounted
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

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
      <TaskList />
    </div>
  );
}
