import React, { useState } from 'react';

function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  console.log(tasks);

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
          </li>
        );
      })}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input type="text" />
        <button>save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input type="checkbox" name="" id="" />
      {taskContent}
      <button>delete</button>
    </label>
  );
}

export default TaskList;
