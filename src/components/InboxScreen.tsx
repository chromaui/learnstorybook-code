import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, fetchTasks, RootState } from "../lib/store";

import TaskList from "./TaskList";

export default function InboxScreen() {
  const dispatch = useDispatch<AppDispatch>();
  // We're retrieving the error field from our updated store
  const { error } = useSelector((state: RootState) => state.taskbox);
  // The useEffect triggers the data fetching when the component is mounted
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

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
        <h1 className="title-page">Taskbox</h1>
      </nav>
      <TaskList />
    </div>
  );
}
