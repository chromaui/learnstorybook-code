import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Task from "./Task";

export function createTask(attrs) {
  return {
    id: Math.round(Math.random() * 1000000).toString(),
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: Date.now(),
    ...attrs
  };
}

export const actions = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
  onUpdateTaskTitle: action("onUpdateTaskTitle")
};

storiesOf("Task", module)
  .add("default", () => (
    <Task task={createTask({ state: "TASK_INBOX" })} {...actions} />
  ))
  .add("pinned", () => (
    <Task task={createTask({ state: "TASK_PINNED" })} {...actions} />
  ))
  .add("archived", () => (
    <Task task={createTask({ state: "TASK_ARCHIVED" })} {...actions} />
  ));
