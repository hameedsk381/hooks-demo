import React from "react";

// eslint-disable-next-line react/display-name
export const Task = React.memo(({ task, onStatusChange }) => {
    return (
      <div>
        <span>{task.text}</span>
        <select value={task.status} onChange={(e) => onStatusChange(task.id, e.target.value)}>
          <option value="Incomplete">Incomplete</option>
          <option value="In Progress">In Progress</option>
          <option value="Complete">Complete</option>
        </select>
      </div>
    );
  });
  