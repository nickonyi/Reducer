import { useReducer } from 'react';
import AddTask from './AddTask';
import './App.css';
import TaskList from './TaskList';

function taskReducer(tasks, action) {
  if (action.type === 'added') {
    return [...tasks, { id: action.id, text: action.text, done: false }];
  } else if (action.type === 'changed') {
    return tasks.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  } else if (action.type === 'deleted') {
    return tasks.filter((t) => t.id !== action.taskId);
  }
}

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const handleAddTask = (text) => {
    dispatch({ type: 'added', id: nextId++, text: text });
  };
  const handleChangeTask = (task) => {
    dispatch({ type: 'changed', task: task });
  };
  const handleDeleteTask = (taskId) => {
    dispatch({ type: 'deleted', taskId: taskId });
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
