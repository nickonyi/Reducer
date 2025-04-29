import { useReducer } from 'react';
import AddTask from './AddTask';
import './App.css';
import TaskList from './TaskList';
import taskReducer from './taskReducer';

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const handleAddTask = (text) => {
    dispatch({ type: 'added', id: nextId++, text: text });
  };
  const handleChangeTask = (task) => {
    dispatch({ type: 'changed', task: task });
  };
  const handleDeleteTask = (taskId) => {
    dispatch({ type: 'deleted', taskId });
  };

  return (
    <div className="container">
      <h1>Prague Iternery</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
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
