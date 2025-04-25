import React, { useState } from 'react';

function Task({ tasks, onChangeTask, onDeleteTask }) {}

function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  const [editing, isEditing] = useState(false);
  return <div>TaskList</div>;
}

export default TaskList;
