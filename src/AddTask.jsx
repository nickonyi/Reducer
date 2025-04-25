import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [text, setText] = useState('');

  return (
    <div className="text-box">
      <input
        placeholder="Add text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
