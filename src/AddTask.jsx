import React from 'react';

function AddTask({ onAddTask }) {
  return (
    <div className="text-box">
      <input placeholder="Add text" type="text" />
      <button>Add</button>
    </div>
  );
}

export default AddTask;
