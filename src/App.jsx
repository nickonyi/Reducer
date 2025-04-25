import AddTask from './AddTask';
import './App.css';

function App() {
  const handleAddTask = () => {};
  return (
    <div className="container">
      <h1>Prague Iternery</h1>
      <AddTask onAddTask={handleAddTask} />
    </div>
  );
}

export default App;
