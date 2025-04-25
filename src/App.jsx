import { useState } from 'react';
import AddTask from './AddTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const handleAddTask = (text) => {
    setTasks([...tasks, { id: nextId++, text: text, done: false }]);
  };
  console.log(tasks);

  return (
    <div className="container">
      <h1>Prague Iternery</h1>
      <AddTask onAddTask={handleAddTask} />
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
