import React from "react";
import PropTypes from "prop-types";

const alignStyles = {
  fontSize: "14px",
  lineHeight: "1.5rem",
  padding: "0.75em 0.25em"
};

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}) {
  return (
    <div className="list-item">
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <input
        type="text"
        value={title}
        readOnly={true}
        placeholder="Input title"
      />
      {state !== "TASK_PINNED" && (
        <a style={alignStyles} onClick={() => onPinTask(id)}>
          <span className="icon-link icon-arrow-down" />
        </a>
      )}
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }),
  onPinTask: PropTypes.func
};
