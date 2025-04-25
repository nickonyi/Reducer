import { useState } from 'react';
import AddTask from './AddTask';
import './App.css';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const handleAddTask = (text) => {
    setTasks([...tasks, { id: nextId++, text: text, done: false }]);
  };
  const handleChange = () => {};
  const handleDelete = () => {};

  return (
    <div className="container">
      <h1>Prague Iternery</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList taks={tasks} onChange={handleChange} onDelete={handleDelete} />
    </div>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

export default App;
